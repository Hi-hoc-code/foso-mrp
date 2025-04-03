import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DataType } from '../useData'
import { imageAssests } from '@/assets/images/image';
import { LinearGradient } from 'expo-linear-gradient';
import ProcessModal from './ProcessModal';

const ItemData = ({ item, onTogglePinned }: { item: DataType, onTogglePinned: (id: string) => void }) => {

  const [isPinned, setIsPinned] = React.useState(false);
  const [isVisibleDetail, setIsvisibleDetail] = React.useState(false);
  const getStatusStyle = React.useMemo(() => {
    switch (item.status) {
      case "not":
        return { color: '#C25705', backgroundColor: 'rgba(255, 129, 26, 0.15)' };
      case "doing":
        return { color: '#076A94', backgroundColor: 'rgba(62, 195, 247, 0.2)' };
      case "done":
        return { color: '#1A7526', backgroundColor: 'rgba(53, 189, 75, 0.2)' };
      default:
        return {};
    }
  }, [item.status]);
  const statusText = React.useMemo(() => {
    switch (item.status) {
      case "not":
        return "Chưa sản xuất";
      case "doing":
        return "Đang sản xuất";
      case "done":
        return "Đã hoàn thành";
      default:
        return "Không xác định";
    }
  }, [item.status]);
  const pinColor = React.useMemo(() => item.isPinned ? "red" : "grey", [item.isPinned]);

  const onPressPinned = () => {
    setIsPinned(!isPinned)
    onTogglePinned(item.lsxId);
  };
  const onVisibleProcess = () => {
    setIsvisibleDetail(!isVisibleDetail)
    console.log(isVisibleDetail)
  }
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['rgba(226, 240, 254, 0))', 'rgba(199, 223, 251, 0.21)']}
        style={styles.container}
      >
        <View style={styles.leftLine}></View>
        <View style={styles.flexItem}>
          <View style={styles.row_between}>
            <Text style={[getStatusStyle, styles.fontWeight400]}>{statusText}</Text>
            <TouchableOpacity onPress={() => onPressPinned()}>
              <Image source={imageAssests.pushPin}
                style={[styles.imgPin, { tintColor: pinColor }]} />
            </TouchableOpacity>
          </View>
          <Text style={styles.textID}>{item.lsxId}</Text>
          <Text style={styles.textDeadline}>Deadline: {item.deadline}</Text>
          <View style={styles.row_between_alight_100}>
            <View style={[styles.process, { backgroundColor: "#FDE8D6" }]}>
              <View style={[styles.boldProcess, { backgroundColor: "#FF9432", width: '40%', }]}>
                <Text style={[styles.textProcess]}>40%</Text>
              </View>
            </View>
            <View style={[styles.process, { backgroundColor: "#C5DBF2", marginHorizontal: 10 }]}>
              <View style={[styles.boldProcess, { backgroundColor: "#0375F3", width: '60%' }]}>
                <Text style={[styles.textProcess]}>60%</Text>
              </View>
            </View>
            <TouchableOpacity onPress={ onVisibleProcess}>
              <Image
                style={[styles.imgWarning]}
                source={imageAssests.warning} />
            </TouchableOpacity>
          </View>
          <ProcessModal visibleProcessModal={isVisibleDetail} changeVisible={onVisibleProcess} />
        </View>
      </LinearGradient>

      <View style={styles.underline}>

      </View>
    </View>
  )
}

export default ItemData

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingEnd: 12,
    paddingStart: 2,
    paddingVertical: 4,
    borderRadius: 8,
    height: "auto"
  },
  leftLine: {
    height: '100%',
    width: 4,
    marginEnd: 12,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: "#0375F4"
  },
  row_between: {
    justifyContent: "space-between",
    flexDirection: 'row'
  },
  row_between_alight_100: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  fontWeight400: {
    fontWeight: '400',
    fontFamily: 'LexendDeca_Regular',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5
  },
  imgPin:
  {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textID:
  {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'LexendDeca_SemiBold',
    color: "#003DA0"
  },
  textDeadline: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'LexendDeca_Medium',
    color: "#667085",

  },
  process: {
    height: 12,
    flex: 3,
    borderRadius: 100
  },
  boldProcess: {
    height: "100%",
    borderRadius: 100,
    paddingStart: 10,
    justifyContent: 'center'
  },
  textProcess: {
    color: "#fff",
    fontSize: 8,
    fontWeight: '400',
    fontFamily: 'LexendDeca_Regular'
  },
  imgWarning: {
    width: 12,
    height: 12,
    marginRight: 10
  },
  underline: {
    width: '100%',
    height: 1,
    backgroundColor: '#D0D5DD',
    marginVertical: 5
  },
  flexItem: {
    gap: 8,
    justifyContent: 'space-between',
    flexDirection: 'column'
  }

})
