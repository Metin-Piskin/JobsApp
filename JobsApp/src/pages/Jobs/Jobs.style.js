import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECEFF1",
    },
    Button: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin: 10,
        justifyContent: "space-around",
    },
    PreviousContainer: {
        backgroundColor: "#EF5350",
        alignItems: "center",
        borderRadius: 50,

    },
    NextContainer: {
        alignItems: "center",
        backgroundColor: "#EF5350",
        borderRadius: 50,
    },
    PageNumber: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#EF5350",
        alignSelf: "center",
    }
});