import 'react-native-gesture-handler';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import HomeScreen from '@/screen/homescreen/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Total from '@/screen/Total';
import Order from '@/screen/Order';
import Diagram from '@/screen/Diagram';
import ShowMore from '@/screen/ShowMore';
import { imageAssests } from '@/assets/images/image';
import { useFonts } from 'expo-font';
import { fontType } from '@/assets/fonts/fontType';
const Tab = createBottomTabNavigator();
const _layout = () => {
  const [loaded, error] = useFonts(fontType);
  if (!loaded && !error) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={false} />
      <Tab.Navigator
        initialRouteName="Lệnh SX"
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Tổng quan"
          component={Total}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={imageAssests.total}
                style={[styles.tabBarStyle, {
                  tintColor: focused ? '#0375F3' : '#9295A4',
                }]}
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
                style={[styles.tabBarStyle, {
                  tintColor: focused ? '#0375F3' : '#9295A4',
                }]}
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
                style={[styles.tabBarStyle, {
                  tintColor: focused ? '#0375F3' : '#9295A4',
                }]}
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
                style={[
                  styles.tabBarStyle,
                  { tintColor: focused ? '' : '#9295A4' } 
                ]}
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
                source={imageAssests.showMore}
                style={[styles.tabBarStyle, {
                  tintColor: focused ? '#0375F3' : '#9295A4',
                }]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  tabBarStyle: {
    width: 24,
    height: 24,
    fontSize: 12,
    fontWeight: 400,
    fontFamily: 'LexendDeca_Regular'
  }
})