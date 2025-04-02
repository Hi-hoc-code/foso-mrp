import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './homescreen/components/Header';
const Total = () => {
  return (
    <View style={styles.flex1}>
       <Header imgLeft={null} title={"Tổng Quan"} imgRight={null}/>
      <View style={styles.container}>
        
      </View>
    </View >
  )
}

export default Total
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex1: {
    flex: 1
  }
});
