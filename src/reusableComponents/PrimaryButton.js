import React from 'react';
import { View,TouchableHighlight,StyleSheet ,Text, Dimensions} from 'react-native';
import * as Animatable from 'react-native-animatable';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const PrimaryButton = (props) => {
    return (
        <View style={props.buttonType == 'Outline' ? styles.outlineContainer: styles.container}>
            <TouchableHighlight onPress={() => props.onPress()} underlayColor="#141414" 
            style={[props.buttonType == 'Outline' ? styles.outlineButtonContainer : styles.buttonContainer,props.overideTouchStyle]} >
                <Text style={[styles.text, props.overideTextStyle]}>{props.name}</Text>
            </TouchableHighlight>
        </View>
        // <Animatable.View
        //     duration={300}
        //     transition='backgroundColor'
        //     style={
        //         props.isActive ? styles.animationStyleActive : styles.animationStyle
        //     // height: 49,
        //     // backgroundColor: props.isActive ? '#F1F1F1' : '#000000',
        //     // flexDirection: 'row',
        //     // alignItems: "center",
        //     // justifyContent: "space-between",
        //     // height: 48, borderRadius: 15, width: width - 88, borderColor: "#FFBE2C", borderWidth: 4
        //     }>
        //     <TouchableHighlight underlayColor="#141414" onPress={() => props.onPress()} style={styles.offerTouchable} >
        //     <Text style={props.isActive ? styles.offerTouchableTextActive : styles.offerTouchableText } >{props.name}</Text>
        //     </TouchableHighlight>
        // </Animatable.View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginVertical:10,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20
    },
    outlineContainer: {
        marginVertical:10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        width: 200,
        marginTop: 20,
        marginLeft: 20
    },
    buttonContainer: {
         backgroundColor: '#6D22E9', 
         height: 40,
         width: 200,
         display:'flex',
         justifyContent:'center'
      },
    outlineButtonContainer: {
        height: 40, 
        borderRadius: 0, 
        width: 198,
        display:'flex',
        justifyContent:'center',
     },
    text: {
        color: '#fff',
         textAlign: 'center', 
         fontSize: 16,
         alignSelf:'center'
      },
      offerTouchable: {
        marginTop: 30, marginBottom: 30, backgroundColor: '#000000', height: 40, 
        borderRadius: 15, width: width - 94, 
    },
    animationStyle: {
        backgroundColor: '#F1F1F1',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        height: 40, borderRadius: 15, width: width - 94, borderColor: "#ffffff", borderWidth: 0, marginBottom:30
    },
    animationStyleActive: {
        backgroundColor: '#000000',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        height: 44, borderRadius: 15, width: width - 90, borderColor: "#FFBE2C", borderWidth: 2, marginBottom:30
    },
    offerTouchableText: {
        color: '#ffbfc5' , 
        textAlign: 'center', fontSize: 16, paddingTop: 8, paddingBottom: 8, lineHeight: 25, fontWeight: '700'
    },
    offerTouchableTextActive: {
        color: '#ffffff', 
        textAlign: 'center', fontSize: 16, paddingTop: 8, paddingBottom: 8, lineHeight: 25, fontWeight: '700'
    }
})
export default PrimaryButton;