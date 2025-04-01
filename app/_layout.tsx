import 'react-native-gesture-handler';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import HomeScreen from '@/screen/homescreen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Total from '@/screen/Total';
import Order from '@/screen/Order';
import Diagram from '@/screen/Diagram';
import ShowMore from '@/screen/ShowMore';
import { FontAwesome } from '@expo/vector-icons';
import { imageAssests } from '@/assets/images/image';
const Tab = createBottomTabNavigator();
const _layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} />

      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='Lệnh SX'
      >
        <Tab.Screen
          name="Tổng quan"
          component={Total}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imageAssests.total}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#0375F3' : 'gray',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Đơn hàng"
          component={Order}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imageAssests.order}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#0375F3' : 'gray',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Sơ đồ Grantt"
          component={Diagram}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imageAssests.diagram}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#0375F3' : 'gray',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Lệnh SX"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imageAssests.list}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#0375F3' : 'gray',
                }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Xem thêm"
          component={ShowMore}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imageAssests.list}
                style={{
                  width: 24,
                  height: 24,
                  tintColor: focused ? '#0375F3' : 'gray',
                }}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  )
}

export default _layout

const styles = StyleSheet.create({})