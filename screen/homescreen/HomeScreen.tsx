import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import LeftModal from './components/LeftModal';
import { imageAssests } from '@/assets/images/image';
const HomeScreen = () => {
  const [modelVisible, setModelVisible] = React.useState(true);
  const toggleModal = () => {
    setModelVisible(!modelVisible);
  }
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.container}>
        <Image
          source={imageAssests.abc}
          style={styles.imgAdd}
        />
        <Text style={styles.textNotice}>Chưa có Lệnh sản xuất</Text>
        <TouchableOpacity style={[styles.button,]} onPress={() => toggleModal()}>
          <View style={styles.row}>
            <Image
              source={imageAssests.gimVer}
              style={styles.imgPin}
            />
            <Text style={styles.textStartPin}>Bắt đầu ghim lệnh ngay</Text>
          </View>
        </TouchableOpacity>
      </View>

      <LeftModal visible={modelVisible} changeVisible={toggleModal} />
    </View >
  )
}

export default HomeScreen

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
  textNotice: {
    fontSize: 18,
    fontWeight: 400,
    color: "#11315B",
    marginBottom: 24
  },
  imgPin: {
    width: 18,
    height: 18,
    marginRight: 10
  },
  textStartPin: {
    fontSize: 18,
    color: '#fff'
  }
});
