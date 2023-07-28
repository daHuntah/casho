const MD = require("../../models/users.model");

const API_RESPONSE = {
  SUCCESS: { status: 1, message: "Success" },
  ERROR: { status: 0, message: "Error" },
  NOT_FOUND: { status: 0, message: "Data not found" },
};

exports.listCustomers = async (req, res, next) => {
  let filter = {};
  if (typeof req.query.username !== "undefined") {
    filter.username = new RegExp(req.query.username, "i");
  }
  try {
    const listCustomers = await MD.UserModel.find(filter);
    if (listCustomers.length > 0) {
      const response = { ...API_RESPONSE.SUCCESS, data: listCustomers };
      res.json(response);
    } else {
      const response = { ...API_RESPONSE.NOT_FOUND };
      res.json(response);
    }
  } catch (error) {
    console.log(error);
    const response = { ...API_RESPONSE.ERROR, message: error.message };
    res.status(500).json(response);
  }
};

exports.addCustomer = async (req, res, next) => {
  if (req.method === "POST") {
    try {
      const { username, password, address, phonenumber } = req.body;

      // Tạo một khách hàng mới và lưu vào cơ sở dữ liệu
      const newCustomer = new MD.UserModel({ username, password, phonenumber, address });
      await newCustomer.save();

      const response = {
        ...API_RESPONSE.SUCCESS,
        message: "Đăng kí thành công",
      };
      res.json(response);
    } catch (error) {
      console.log(error);
      const response = { ...API_RESPONSE.ERROR, message: error.message };
      res.status(500).json(response);
    }
  } else {
    const response = {
      ...API_RESPONSE.ERROR
    };
    res.status(405).json(response);
  }
};
