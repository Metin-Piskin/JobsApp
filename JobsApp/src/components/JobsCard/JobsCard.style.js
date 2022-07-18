import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 10,
        borderColor: "#ddd",
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 3,
        margin: 10,
    },
    titleContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
    company: {
        fontSize: 15,
        color: "black",
    },
    innerlocations: {
        backgroundColor: "#EF5350",
        borderRadius: 30,
        alignItems: "center",
        alignSelf: "baseline",
        padding: 2,
    },
    locations: {
        fontSize: 13,
        color: "white",
        padding: 5,
        fontWeight: "bold",
    },
    innerContainer: {
        alignSelf: "flex-end",
        
    },
    levels: {
        color: "#EF5350",
        fontSize: 20,
        fontWeight: "bold",
    },
});