import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import LeftModal from './LeftModal';
import { fontType } from '@/assets/fonts/fontType';

type HeaderProps = {
  imgLeft: any | null;
  title: string;
  imgRight: any | null;
};
const Header: React.FC<HeaderProps> = ({ imgLeft, title, imgRight }) => {
  const [modelVisible, setModelVisible] = React.useState(false);
  const toggleModal = () => {
    setModelVisible(!modelVisible);
  };


  return (
    <LinearGradient
      colors={['#62BDFF', '#0B69D2']}
      style={styles.containerHeader}

    >
      <TouchableOpacity onPress={() => toggleModal()}>
        <Image source={imgLeft} style={styles.imgNav} />
      </TouchableOpacity>
      <Text style={[styles.textHeader]}>{title.toString()}</Text>
      <TouchableOpacity>
        <Image source={imgRight} style={styles.imgNav} />
      </TouchableOpacity>
      <LeftModal visible={modelVisible} changeVisible={toggleModal} />
    </LinearGradient>
  );
};

export default Header;

const styles = StyleSheet.create({
  containerHeader: {
    width: '100%',
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 40,
  },
  imgNav: {
    width: 32,
    height: 32,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0,
    lineHeight: 28,
    textAlign: 'center',
    color: '#fff',
    fontFamily:"LexendDeca_Medium"
  },
});
