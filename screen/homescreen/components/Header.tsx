import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import LeftModal from './LeftModal';
import { imageAssests } from '@/assets/images/image';
const Header = () => {
   const [modelVisible, setModelVisible] = React.useState(false);
    const toggleModal = () => {
      setModelVisible(!modelVisible);
    }
  return (
    <LinearGradient
      colors={['#62BDFF', '#0B69D2']}
      style={styles.containerHeader}
    >
      <TouchableOpacity
        onPress={() => toggleModal()}
      >
        <Image
          source={imageAssests.menuLine}
          style={styles.imgNav}
        />
      </TouchableOpacity>
      <Text style={styles.textHeader}>Lệnh Sản Xuất</Text>
      <TouchableOpacity>
        <Image
          source={imageAssests.navRight}
          style={styles.imgNav}
        />
      </TouchableOpacity>
      <LeftModal visible={modelVisible} changeVisible={toggleModal} />
    </LinearGradient>
  )
}

export default Header

const styles = StyleSheet.create({
  containerHeader: {
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 40
  },
  imgNav: {
    width: 32,
    height: 32,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#fff',
  },
})