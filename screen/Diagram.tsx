import { StyleSheet, View } from 'react-native';
import React, {  } from 'react';
import Header from './homescreen/components/Header';

const Diagram = () => {

  return (
    <View style={styles.flex1}>
      <Header imgLeft={null} title={"Sơ đồ Grantt"} imgRight={null} />
      <View style={styles.container}>

      </View>
    </View >
  );
};

export default Diagram;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#F3F4F6",
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex1: {
    flex: 1,
    width: '100%',
  },
});
