import React from 'react'
import { View,StyleSheet } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import { Text } from 'react-native';


export default function Radio(props) {
    const [selectedValue, setSelectedValue] = useState('option0');
  return (
    
        <View style={styles.radioGroup}> 
           <View style={styles.radioButton}> 
           <Text style={styles.radioLabel}>{props.name}</Text> 
            <RadioButton.Android 
                value="option1"
                status={selectedValue === 'option1' ?  
                'checked' : 'unchecked'} 
                onPress={() => setSelectedValue('option1')} 
                color="rgba(74, 8, 135, 0.557)"/> 
            
         </View>
        </View>  
  )
}

const styles = StyleSheet.create({
   
    radioButton: { 
        flexDirection: 'row', 
        alignItems: 'center', 
    }, 
    radioLabel: { 
        marginLeft: 8, 
        fontSize: 16, 
        color: '#333', 
    }, 
})
