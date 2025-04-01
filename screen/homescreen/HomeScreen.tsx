import { Button, FlatList, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import Header from './components/Header'
import Checkbox from 'expo-checkbox';

import Animated, { FadeIn, SlideInDown, SlideInLeft, SlideInRight, SlideInUp, SlideOutLeft } from 'react-native-reanimated';
import LeftModal from './components/LeftModal';
const HomeScreen = () => {
  const [modelVisible, setModelVisible] = React.useState(false);

  const toggleModal = () => {
    setModelVisible(!modelVisible);
  }
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/ABC.png')}
          style={styles.imgAdd}
        />
        <Text style={{ fontSize: 18, fontWeight: 400, color: "#11315B", marginBottom: 24 }}>Chưa có Lệnh sản xuất</Text>
        <TouchableOpacity style={[styles.button,]} onPress={() => toggleModal()}>
          <View style={styles.row}>
            <Image
              source={require('../../assets/images/gimVer.png')}
              style={{ width: 18, height: 18, marginRight: 10 }}
            />
            <Text style={{ fontSize: 18, color: '#fff' }}>Bắt đầu ghim lệnh ngay</Text>
          </View>
        </TouchableOpacity>
      </View>

      <LeftModal visible={modelVisible} changeVisible={toggleModal} />
    </View >
  )
}

export default HomeScreen
type dataType = {
  lsxId: string;
  status: string;
  deadline: string;
  progress: {
    planned: number;
    actual: number;
  };
  pinned: boolean;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgAdd: {
    width: 200,
    height: 200,
    marginBottom: 10,
    padding: 0,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingStart: 15,
  },
  button: {
    backgroundColor: "#0375F3",
    width: 280,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: {

  },
  modalContainer: {
    flex: 1,
    height: '100%',
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 40
  },
  modalText: {

  },
  imgSearch: {
    width: 18,
    height: 18,
    tintColor: "#11315B"
  },
  checkbox: {

  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: "#25387A"
  },
  border: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D5DD',
  },
  textSelect: {
    padding: 5,
    paddingHorizontal: 10,
    color: "#C25705",
    fontSize: 14,
    fontWeight: '600',
    backgroundColor: '#FFECDD',
    marginStart: 12,
    borderRadius: 8
  },

});
