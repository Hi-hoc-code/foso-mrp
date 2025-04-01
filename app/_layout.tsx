import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import HomeScreen from '@/screen/homescreen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Total from '@/screen/Total';
import Order from '@/screen/Order';
import Diagram from '@/screen/Diagram';
import ShowMore from '@/screen/ShowMore';
const Tab = createBottomTabNavigator();
const _layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} />
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Lệnh SX"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Tổng quan"
          component={Total}
        />
        <Tab.Screen
          name="Đơn hàng"
          component={Order} />
        <Tab.Screen
          name="Sơ đồ Grantt"
          component={Diagram} />
        <Tab.Screen
          name="Xêm thêm"
          component={ShowMore} />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({})