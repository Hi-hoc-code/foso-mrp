import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DataType } from '../useData'

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
  },[item.status]);

  const pinColor= React.useMemo(()=> isPinned ? "red" : "grey" , [isPinned])

   return (
    <View>
      <View style={{ flexDirection: "row", padding: 5, paddingEnd: 10, backgroundColor: "#F3F8FE" }}>
        <View style={{ height: '100%', width: 5, marginEnd: 5, borderBottomLeftRadius: 8, borderTopLeftRadius: 8, backgroundColor: "#0375F4" }}></View>
        <View>
          <View style={{ justifyContent: "space-between", flexDirection: 'row' }}>
            <Text style={[getStatusStyle, { fontWeight: '800' }]}>{item.status}</Text>
            <TouchableOpacity onPress={onPressPinned}>

              <Image source={require('../../../assets/images/PushPin.png')}
                style={{
                  width: 20,
                  height: 20,
                  marginRight: 10,
                  tintColor: pinColor
                }} />
            </TouchableOpacity>
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
              style={{ width: 16, height: 16, marginRight: 10 }}
              source={require('../../../assets/images/Warning.png')} />
          </View>
        </View>

      </View>
      <View style={{ width: '100%', height: 1, backgroundColor: '#D0D5DD', marginVertical: 5 }}></View>
    </View>
  )
}

export default ItemData

const styles = StyleSheet.create({})
