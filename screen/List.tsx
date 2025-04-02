import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from './homescreen/components/Header';
const List = () => {
  return (
    <View style={styles.flex1}>
      <Header imgLeft={null} title={"Lệnh Sản Xuất"} imgRight={null} />
      <View style={styles.container}>
      </View>
    </View >
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  flex1:{ flex: 1 }
});
