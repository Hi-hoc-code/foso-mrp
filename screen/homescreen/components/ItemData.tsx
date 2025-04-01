import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DataType } from '../useData'
import { imageAssests } from '@/assets/images/image';

const ItemData = ({ item }: { item: DataType }) => {

  const [isPinned, setIsPinned] = React.useState(false);
  const onPressPinned = () => {
    setIsPinned(!isPinned)
  }

  const getStatusStyle = React.useMemo(() => {
    switch (item.status) {
      case "not":
        return { color: '#C25705', backgroundColor: '#FFECDD', padding: 5, borderRadius: 5 };
      case "doing":
        return { color: '#076A94', backgroundColor: '#D8F3FD', padding: 5, borderRadius: 5 };
      case "done":
        return { color: '#1A7526', backgroundColor: '#D7F2DB', padding: 5, borderRadius: 5 };
      default:
        return {};
    }
  }, [item.status]);
  const statusText = React.useMemo(() => {
    switch (item.status) {
      case "not":
        return "Chưa hoàn thành";
      case "doing":
        return "Đang thực hiện";
      case "done":
        return "Đã hoàn thành";
      default:
        return "Không xác định";
    }
  }, [item.status]);
  const pinColor = React.useMemo(() => isPinned ? "red" : "grey", [isPinned])

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.leftLine}></View>
        <View style={{ gap: 8 }}>
          <View style={styles.row_between}>
            <Text style={[getStatusStyle, styles.fontWeight800]}>{statusText}</Text>
            <TouchableOpacity onPress={onPressPinned}>
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
            <Image
              style={[styles.imgWarning]}
              source={imageAssests.warning} />
          </View>
        </View>
      </View>
      <View style={styles.underline}></View>
    </View>
  )
}

export default ItemData

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    paddingEnd: 10,
    backgroundColor: "#F3F8FE"
  },
  leftLine: {
    height: '100%',
    width: 5,
    marginEnd: 5,
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
  fontWeight800: {
    fontWeight: '800'
  },
  imgPin:
  {
    width: 20,
    height: 20,
    marginRight: 10,

  },
  textID:
  {
    fontWeight: "bold",
    fontSize: 12,
    color: "#003DA0"
  },
  textDeadline: {
    fontSize: 12,
    fontWeight: '500',
    color: "#667085"
  },
  process: {
    height: 12,
    flex: 3,
    borderRadius: 15
  },
  boldProcess: {
    height: "100%",
    borderRadius: 15,
    paddingStart: 10
  },
  textProcess: {
    color: "#fff",
    fontSize: 8
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
  }

})
