import React from "react";
import { View, Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import FavouritesCard from "../../components/FavouritesCard";
import styles from "./Favourites.style";

function Favourites(props) {
  const job = useSelector(s => s.FavouritesList);

  const dispatch = useDispatch();

  const RenderJobs = ({ item }) => {
    return <FavouritesCard job={item} onSelect={() => RenderJobsDetails(item)} Remove={() => RemoveItem(item)} />;
  }
  const RenderJobsDetails = (item) => {
    props.navigation.navigate('JobsDetailScreen', { item });
  }
  const RemoveItem = item => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: { name: item } })
  }
  return (
    <FlatList
      data={job}
      renderItem={RenderJobs}
    />
  );
}
export default Favourites;