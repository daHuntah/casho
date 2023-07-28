import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  title: {
    alignSelf: "center",
    margin: 20,
    padding: 10
  },
  titleText: {
    fontSize: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgotPass: {
    textAlign: "right",
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default styles;
