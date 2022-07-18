import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    innerContainer: {
        backgroundColor: "#F2F2F2",
    },
    nameContainer: {
        flexDirection: "row",
        marginTop: 5,
        marginLeft: 5,
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#37474F",
    },
    innerlocations: {
        flexDirection: "row",
        margin: 5,
    },
    textlocations: {
        fontSize: 16,
        color: "#EF5350",
        fontWeight: "bold",
    },
    locations: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
    },
    innerLevel: {
        flexDirection: "row",
        margin: 5,
    },
    textlevel: {
        fontSize: 16,
        color: "#EF5350",
        fontWeight: "bold",
    },
    levels: {
        fontSize: 16,
        color: "black",
        fontWeight: "bold",
    },
    text: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "#37474F",
    },
    RenderHtml: {
        color: "black",
        borderWidth: 1,
        marginRight: 1,
        marginLeft: 1,
        padding: 5,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
    },
    Submitbutton: {
        flex: 1,
        backgroundColor: "#EF5350",
        borderRadius: 5,
        margin: 5,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    Favoritebutton: {
        flex: 1,
        backgroundColor: "#EF5350",
        borderRadius: 5,
        margin: 5,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        paddingLeft: 10,
    },
});