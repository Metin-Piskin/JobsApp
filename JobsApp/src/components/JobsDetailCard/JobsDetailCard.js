import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import RenderHtml from "react-native-render-html";
import İcon from "../İcon/İcon";

import styles from "./JobsDetailCard.style";

const JobsDetailCard = ({ item, source, width, Favorite, Submit }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                    <View style={styles.innerlocations}>
                        <Text style={styles.textlocations}>Locations: </Text>
                        <Text style={styles.locations}>{item.locations[0].name}</Text>
                    </View>
                    <View style={styles.innerLevel}>
                        <Text style={styles.textlevel}>Job Level: </Text>
                        <Text style={styles.levels}>{item.levels[0].name}</Text>
                    </View>
                    <Text style={styles.text}>Job Detail</Text>
                </View>

                <RenderHtml
                    baseStyle={styles.RenderHtml}
                    contentWidth={width}
                    source={source}
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.Submitbutton} onPress={Submit}>
                        <İcon name="login" size={28} color="white" />
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Favoritebutton} onPress={Favorite}>
                        <İcon name="cards-heart" size={28} color="white" />
                        <Text style={styles.buttonText}>Favorite Job</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}
export default JobsDetailCard;

