import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import Checkbox from 'expo-checkbox';
import { useData } from '../useData';

type LeftModalProps={
  visible: boolean,
  changeVisible:()=> void

}

const LeftModal = (props: LeftModalProps) => {
  const {visible, changeVisible}= props

  const [isNotChecked, setIsNotChecked] = React.useState(false);
  const [isDoingChecked, setIsDoingChecked] = React.useState(false);
  const [idDoneChecked, setIsDoneChecked] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const {listData}= useData()


  return (
    <Modal
      isVisible={visible}
      onBackdropPress={changeVisible}
      animationOut={"slideOutLeft"}
      style={{ margin: 0 }}
      animationIn={"slideInLeft"}
      statusBarTranslucent={true}
    >

      <View style={styles.modalContainer}>
        <SafeAreaView />
        <Text style={styles.title}>Lệnh Sản Xuất</Text>
        <View style={[styles.row, styles.border, { height: 50, marginTop: 20 }]}>
          <TextInput
            placeholder='Tìm kiếm mã lệnh sản xuất'
            value={search}
            onChangeText={setSearch}
            style={{ flex: 1 }}
          />
          <View style={{ backgroundColor: '#92BFF7', width: 50, height: '100%', borderBottomRightRadius: 8, borderTopRightRadius: 8, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              source={require('../../../assets/images/searchIcon.png')}
              style={styles.imgSearch}
            />
          </View>

        </View>
        <View style={[styles.border, { paddingEnd: 15, marginTop: 8, borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }]}>
          <View style={[styles.row, { justifyContent: 'space-between', height: 45 }]}>
            <Image
              source={require('../../../assets/images/ChartDonut.png')}
              style={{ width: 16, height: 16 }} />
            <Text style={{ textAlign: 'left', flex: 1, marginLeft: 5, fontSize: 16 }}>Trạng thái</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../../../assets/images/CaretUp.png')}
                style={{ width: 16, height: 16 }} />
            </View>
          </View>
        </View>
        <View style={[styles.border, { borderTopRightRadius: 0, borderTopLeftRadius: 0 }]}>

          <View style={[styles.row, { justifyContent: 'flex-start', height: 45 }]}>
            <Checkbox
              style={styles.checkbox}
              value={isNotChecked}
              onValueChange={setIsNotChecked}
              color={isNotChecked ? '#1760B9' : undefined}
            />
            <Text style={[styles.textSelect]}>Chưa sản xuất</Text>
          </View>
          <View style={[styles.row, { justifyContent: 'flex-start', height: 45 }]}>
            <Checkbox
              style={styles.checkbox}
              value={isDoingChecked}
              onValueChange={setIsDoingChecked}
              color={isDoingChecked ? '#1760B9' : undefined}
            />
            <Text style={[styles.textSelect, { backgroundColor: '#D8F3FD', color: '#076A94' }]}>Chưa sản xuất</Text>
          </View>
          <View style={[styles.row, { justifyContent: 'flex-start', height: 45 }]}>
            <Checkbox
              style={styles.checkbox}
              value={idDoneChecked}
              onValueChange={setIsDoneChecked}
              color={idDoneChecked ? '#1760B9' : undefined}
            />
            <Text style={[styles.textSelect, { backgroundColor: '#D7F2DB', color: '#1A7526' }]}>Chưa sản xuất</Text>
          </View>
        </View>

        <View style={[styles.row, styles.border, { height: 45, justifyContent: 'space-between', paddingEnd: 15, marginVertical: 10 }]}>
          <Text style={{ fontSize: 16, color: '#11315B', fontWeight: '600' }}>Bỏ ghim toàn bộ</Text>
          <TouchableOpacity>
            <Image
              style={{ width: 16, height: 16 }}
              source={require('../../../assets/images/Vector.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={listData}
          keyExtractor={(item) => item.lsxId}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <View style={{ flexDirection: "row", padding: 5, paddingEnd: 10, backgroundColor: "#F3F8FE" }}>
                <View style={{ height: '100%', width: 5, marginEnd: 5, borderBottomLeftRadius: 8, borderTopLeftRadius: 8, backgroundColor: "#0375F4" }}></View>
                <View>
                  <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
                    <Text style={[getStatusStyle(item.status), { fontWeight: '800' }]}>{item.status}</Text>
                    <Image source={require('../../../assets/images/PushPin.png')} />
                  </View>
                  <Text style={{ fontWeight: "bold", fontSize: 16, color: "#003DA0" }}>{item.lsxId}</Text>
                  <Text style={{ fontSize: 14, fontWeight: '500', color: "#667085" }}>Deadline: {item.deadline}</Text>
                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ backgroundColor: "#FDE8D6", height: 20, flex: 3, borderRadius: 15 }}>
                      <View style={{ backgroundColor: "#FF9432", width: '40%', height: "100%", borderRadius: 15, paddingStart: 10 }}>
                        <Text style={{ color: "#fff", fontSize: 14, }}>40%</Text>
                      </View>
                    </View>
                    <View style={{ backgroundColor: "#C5DBF2", height: 20, flex: 3, borderRadius: 15, marginHorizontal: 15 }}>
                      <View style={{ backgroundColor: "#0375F3", width: '60%', height: "100%", borderRadius: 15, paddingStart: 10 }}>
                        <Text style={{ color: "#fff", fontSize: 14, }}>60%</Text>
                      </View>
                    </View>
                    <Image
                      style={{ width: 16, height: 16 }}
                      source={require('../../../assets/images/Warning.png')} />
                  </View>
                </View>

              </View>
              <View style={{ width: '100%', height: 1, backgroundColor: '#D0D5DD', marginVertical: 5 }}></View>
            </View>
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
const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Chưa sản xuất':
      return { color: '#C25705', backgroundColor: '#FFECDD', padding: 5, borderRadius: 5 };
    case 'Đang sản xuất':
      return { color: '#076A94', backgroundColor: '#D8F3FD', padding: 5, borderRadius: 5 };
    case 'Hoàn thành':
      return { color: '#1A7526', backgroundColor: '#D7F2DB', padding: 5, borderRadius: 5 };
    default:
      return {};
  }
};