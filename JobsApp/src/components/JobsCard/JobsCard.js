import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import styles from "./JobsCard.style";

const JobsCard = ({ job, onSelect }) => {
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
            </View>
        </TouchableWithoutFeedback>
    );
}
export default JobsCard;