import React from 'react';
import {Text,StyleSheet} from 'react-native';
const Label = (props) => {
    return ( 
        <Text style={[styles.text,props.style]}>{props.label?props.label:'Label'}</Text>
     );
}
const styles = StyleSheet.create({
    text: {
       color:'black',
       fontSize:16,
       fontWeight:'bold'
    },
});
export default Label;