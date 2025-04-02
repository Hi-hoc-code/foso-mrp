import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, Switch, LayoutAnimation } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import Checkbox from 'expo-checkbox';
import { useData } from '../useData';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import ItemData from './ItemData';
import { imageAssests } from '@/assets/images/image';

type LeftModalProps = {
  visible: boolean,
  changeVisible: () => void
}

const LeftModal = (props: LeftModalProps) => {
  const { visible, changeVisible } = props
  const [isNotChecked, setIsNotChecked] = React.useState(true);
  const [isDoingChecked, setIsDoingChecked] = React.useState(true);
  const [isDoneChecked, setIsDoneChecked] = React.useState(true);
  const [search, setSearch] = React.useState('');
  const { listData } = useData()
  const [showStatus, setShowStatus] = React.useState(true);
  const rotation = useSharedValue(180)
  const [data, setData] = React.useState(listData)
  const onShowStatus = () => {
    setShowStatus(!showStatus);
    rotation.value = withTiming(rotation.value === 0 ? 180 : 0, { duration: 400 });
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });


  React.useEffect(() => {
    setData(listData.filter(i => {
      return (
        (isNotChecked && i.status === "not") ||
        (isDoingChecked && i.status === "doing") ||
        (isDoneChecked && i.status === "done")
      );
    }));
  }, [isDoingChecked, isNotChecked, isDoneChecked]);


  return (
    <Modal
      isVisible={visible}
      onBackdropPress={changeVisible}
      animationOut={"slideOutLeft"}
      animationIn={"slideInLeft"}
      style={{ margin: 0 }}
      statusBarTranslucent={true}
      useNativeDriver
    >

      <View style={styles.modalContainer}>
        <SafeAreaView />
        <Text style={styles.title}>Lệnh Sản Xuất</Text>
        <View style={[styles.row, styles.border, { height: 50, marginTop: 20 }]}>
          <TextInput
            placeholder='Tìm kiếm mã lệnh sản xuất'
            value={search}
            onChangeText={setSearch}
            style={styles.inputSearch}
          />
          <View style={styles.searchContainer}>
            <Image
              source={imageAssests.searchIcon}
              style={styles.imgSearch}
            />
          </View>

        </View>
        <View style={
          [styles.border,
          {
            paddingEnd: 15,
            marginTop: 8,
            borderBottomRightRadius: showStatus ? 0 : 8,
            borderBottomLeftRadius: showStatus ? 0 : 8
          }]
        }>
          <TouchableOpacity onPress={onShowStatus}>
            <View style={[styles.row, styles.statusContainer]}>
              <Image
                source={imageAssests.chartDonut}
                style={styles.imgStyle16} />

              <Text style={styles.textStatus}>Trạng thái</Text>
              <Animated.View style={[animatedStyle, styles.juti_alight_center]}>
                <Image
                  source={imageAssests.caretUp}
                  style={styles.imgStyle16} />
              </Animated.View>
            </View>
          </TouchableOpacity>
        </View>
        {showStatus && <View
          style={[styles.border, styles.borderTop]}>

          <View style={[styles.row, styles.checkBoxStyle]}>
            <Checkbox
              style={styles.checkboxImg}
              value={isNotChecked}
              onValueChange={setIsNotChecked}
              color={isNotChecked ? '#1760B9' : undefined}
            />
            <Text style={[styles.textSelect]}>Chưa sản xuất</Text>
          </View>
          <View style={[styles.row, styles.checkBoxStyle]}>
            <Checkbox
              style={styles.checkboxImg}
              value={isDoingChecked}
              onValueChange={setIsDoingChecked}
              color={isDoingChecked ? '#1760B9' : undefined}
            />
            <Text style={[styles.textSelect, styles.textDoing]}>Đang sản xuất</Text>
          </View>
          <View style={[styles.row, styles.checkBoxStyle]}>
            <Checkbox
              style={styles.checkboxImg}
              value={isDoneChecked}
              onValueChange={setIsDoneChecked}
              color={isDoneChecked ? '#1760B9' : undefined}
            />
            <Text style={[styles.textSelect, styles.textDone]}>Đã hoàn thành</Text>
          </View>
        </View>}
        <TouchableOpacity>
          <View style={[styles.row, styles.border, styles.flexBoxRemovePin]}>
            <Text style={styles.removePinText}>Bỏ ghim toàn bộ</Text>
            <Image
              style={styles.imgStyle16}
              source={imageAssests.vector} />
          </View>
        </TouchableOpacity>
        <FlatList
          extraData={isNotChecked}
          data={data}
          keyExtractor={(item) => item.lsxId}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemData item={item} key={item.lsxId} />
          )}
        />
      </View>
    </Modal>
  )
}

export default LeftModal

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
  checkboxImg: {
    width: 16,
    height: 16
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: "#25387A",
    fontFamily: 'LexendDeca_Medium',
  },
  border: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D5DD',
  },
  textSelect: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: "#C25705",
    fontSize: 14,
    fontWeight: '400',
    backgroundColor: 'rgba(255, 129, 26, 0.15)',
    marginStart: 12,
    borderRadius: 8,
    fontFamily: 'LexendDeca_Regular'
  },
  searchContainer: {
    backgroundColor: '#92BFF7',
    width: 50,
    height: '100%',
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusContainer: {
    justifyContent: 'space-between',
    height: 45
  },
  textStatus: {
    textAlign: 'left',
    flex: 1,
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'LexendDeca_Regular '
  },
  juti_alight_center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  borderTop: {
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0
  },
  imgStyle16: {
    width: 16,
    height: 16
  },
  checkBoxStyle: {
    justifyContent: 'flex-start',
    height: 45
  },
  textDoing: {
    backgroundColor: 'rgba(62, 195, 247, 0.2)',
    color: '#076A94'
  },
  textDone: {
    backgroundColor: 'rgba(53, 189, 75, 0.2)',
    color: '#1A7526'
  },
  flexBoxRemovePin: {
    height: 45,
    justifyContent: 'space-between',
    padding: 12,
    marginVertical: 10
  },
  removePinText: {
    fontSize: 14,
    color: '#11315B',
    fontWeight: '500',
    fontFamily: 'LexendDeca_Medium '
  },
  inputSearch: {
    fontSize: 12,
    letterSpacing: 0.4,
    fontWeight: 300,
    fontFamily: 'LexendDeca_Light',
    color: "#9295A4",
    flex: 1
  }

});
