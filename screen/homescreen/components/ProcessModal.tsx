import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { imageAssests } from '@/assets/images/image'
import Modal from 'react-native-modal'

type ProgressModalProps = {
    visibleProcessModal: boolean,
    changeVisible: () => void
}

const ProcessModal = ({ visibleProcessModal, changeVisible }: ProgressModalProps) => {
    return (
        <Modal
            isVisible={visibleProcessModal}
            onBackdropPress={changeVisible}
            animationIn={'fadeInUp'}
            animationOut={'fadeOutDown'}
            backdropTransitionOutTiming={0}
            style={styles.modalContainer}
        >
            <View style={styles.modalContent}>
                <View style={styles.innerContainer}>
                    <View style={styles.rowBetweenAlign}>
                        <View style={[styles.processBar, styles.bgLightOrange]}>
                            <View style={[styles.progress, styles.bgOrange, styles.width40]}>
                                <Text style={[
                                    styles.textProcessPer,
                                ]}>40%</Text>
                            </View>
                        </View>
                        <View style={[styles.processBar, styles.bgLightBlue, styles.marginHorizontal10]}>
                            <View style={[styles.progress, styles.bgBlue, styles.width60]}>
                                <Text style={[
                                    styles.textProcessPer,
                                ]}>60%</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Image style={styles.imgWarning} source={imageAssests.warning} />
                        </TouchableOpacity>
                    </View>
                    <Image source={imageAssests.caretUp} style={styles.caretUp} />
                </View>
                <View style={styles.tooltipContent}>
                    <View style={styles.rowBetween}>
                        <View style={[styles.circle, styles.bgYellow]}></View>
                        <Text style={styles.textProcess}>Tiến độ Kế hoạch Nguyên liệu</Text>
                        <Text style={styles.textProcess}>50%</Text>
                    </View>
                    <View style={styles.rowBetween}>
                        <View style={[styles.circle, styles.bgBlue]}></View>
                        <Text style={styles.textProcess}>Tiến độ Nhập kho Thành phần</Text>
                        <Text style={styles.textProcess}>60%</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ProcessModal

const styles = StyleSheet.create({
    modalContainer: {
        position: 'relative',
        bottom: 0,
        top: 100,
        right: 0
    },
    modalContent: {
        width: '76%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    innerContainer: {
        width: '100%',
        paddingHorizontal: 12,
        paddingTop: 13,
        paddingBottom: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8
    },
    rowBetweenAlign: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowBetween: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    processBar: {
        height: 12,
        flex: 3,
        borderRadius: 100
    },
    progress: {
        height: '100%',
        borderRadius: 100,
        paddingStart: 10,
        justifyContent: 'center',
    },
    textProcess: {
        fontSize: 10,
        fontFamily: 'LexendDeca_Medium',
        fontWeight: '500',
        color: '#3A3E4C',
    },
    imgWarning: {
        width: 12,
        height: 12,
        marginRight: 10
    },
    textProcessPer: {
        fontSize: 8,
        fontFamily: 'LexendDeca_Medium',
        fontWeight: '500',
        color: '#FFF',
    },
    caretUp: {
        position: 'absolute',
        width: 28,
        height: 8,
        top: 28,
        right: 12,
        tintColor: '#fff',
        zIndex: 999,
        borderColor: '#F3F4F6'
    },
    tooltipContent: {
        flexDirection: 'column',
        gap: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: '#fff',
        marginTop: 5,
        borderColor: '#CCCCCC',
        borderWidth: 1,

    },
    circle: {
        borderRadius: 100,
        width: 13,
        height: 13
    },
    bgYellow: {
        backgroundColor: '#FF8F0D',
    },
    bgBlue: {
        backgroundColor: '#0375F3'
    },
    bgLightOrange: {
        backgroundColor: '#FDE8D6'
    },
    bgLightBlue: {
        backgroundColor: '#C5DBF2'
    },
    bgOrange: {
        backgroundColor: '#FF9432'
    },
    width40: {
        width: '40%'
    },
    width60: {
        width: '60%'
    },
    marginHorizontal10: {
        marginHorizontal: 10
    }, whiteColor: {
        color: '#FFFFF'
    }
});