import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    usernameText: {
        textAlign: 'center',
        fontSize: 30
    },
    avtContainer: {
        justifyContent: 'center',
        margin: 10
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: 'hidden'
    },
    avtImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    }
})

export default styles