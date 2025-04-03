import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from './homescreen/components/Header';
import Tooltip from 'react-native-walkthrough-tooltip';
const Order = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.flex1}>
      <Header imgLeft={null} title={"Đơn hàng"} imgRight={null} />
      <View style={styles.container}>
      
      </View>
    </View>
  )
}

export default Order

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
  },
  touchable: {
    width: 100,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'grey'
  }
});
