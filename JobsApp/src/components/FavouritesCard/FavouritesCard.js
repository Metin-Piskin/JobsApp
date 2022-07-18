import React from "react";
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import İcon from "../İcon/İcon"

import styles from "./FavouritesCard.style";

const JobsCard = ({ job, onSelect, Remove }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.name}>{job.name}</Text>
                    <Text style={styles.company}>{job.company?.name}</Text>
                    <View style={styles.innerlocations}>
                        <Text style={styles.locations}>{job.locations[0].name}</Text>
                    </View>
                </View>
                <View style={styles.innerContainer}>
                    <Text style={styles.levels}>{job.levels[0].name}</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={Remove}>
                    <İcon name="trash-can-outline" size={30} color="white" />
                    <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
export default JobsCard;