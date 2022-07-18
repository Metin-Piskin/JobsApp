import React, { useState } from "react";
import { View, Text, FlatList, StatusBar } from "react-native";
import Config from 'react-native-config';

import styles from "./Jobs.style";
import useFetch from "../../Hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import JobsCard from "../../components/JobsCard";
import Button from "../../components/Button";

const url = "https://www.themuse.com/api/public/jobs?page=";

const Jods = (props) => {
  const [page, setpage] = useState(1);
  const { Jobs, loading, error } = useFetch(url + page);
  
  const RenderJobsDetails = (item) => {
    props.navigation.navigate('JobsDetailScreen', { item })
  }

  const NextPage = () => {
    setpage(prev => {
      if (page == 50) {
        setpage(1)
      } else {
        setpage(page + 1)
      }
    })

  }

  const PreviousPage = () => {
    if (page == 1) {
      setpage(1)
    } else {
      setpage(page - 1)
    }
  }

  if (loading) {
    return <Loading />;
  };

  if (error) {
    return (
      <View style={{ flex: 1 }}>
        <Error />
      </View>
    );
  };

  const RenderJobs = ({ item }) => {
    return <JobsCard job={item} onSelect={() => RenderJobsDetails(item)} />;
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='tomato' />
      <FlatList
        data={Jobs.results}
        renderItem={RenderJobs}
      />
      <View style={styles.Button}>
        <View style={styles.PreviousContainer}>
          <Button
            iconname={"arrow-left"}
            onPress={PreviousPage}
            disabled={loading}
            title={"Previous"}
          />
        </View>
        <Text style={styles.PageNumber}>Page {page}</Text>
        <View style={styles.NextContainer}>
          <Button
            iconname={"arrow-right"}
            onPress={NextPage}
            disabled={loading}
            title={"Next"}
          />
        </View>
      </View>
    </View>
  );
}
export default Jods;