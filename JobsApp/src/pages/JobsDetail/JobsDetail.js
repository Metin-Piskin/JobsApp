import React from "react";
import { View, Text, ScrollView, Dimensions, Alert } from "react-native";

import { useDispatch } from "react-redux";
import JobsDetailCard from "../../components/JobsDetailCard";
import styles from "./JobsDetail.style";

function JodsDetail(props) {
  const { item } = props.route.params
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch({ type: 'ADD_FAVORITE', payload: { name: item } });
  };

  const handleSubmit = () => {
    Alert.alert('Başarılı!', 'İş Başvurunuz başarıyla alınmıştır!');
  };

  const source = {
    html: item.contents
  }

  const { width } = {
    width: Dimensions.get('screen').width
  }

  return (
    <View>
      <JobsDetailCard
        item={item}
        width={width}
        source={source}
        Favorite={handleFavorite}
        Submit={handleSubmit}
      />
    </View>
  );
}
export default JodsDetail;