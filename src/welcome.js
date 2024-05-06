import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Welcome() {
    const navigation = useNavigation();
    const onPressHandler = () => {
        navigation.navigate('Login');
        }
    return (
    <SafeAreaView>
      <Text style={styles.welcome}>
          Welcome to Mindora
        </Text>
      <Image source={require('../assets/welcome.jpg')} style={styles.Image} />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Icon name="robot" size={40} color="#fff" />
          <Text style={styles.text1}>
            Chat With AI assistant{'\n'}
            This AI assistant will help you to find the best solution for your problem.
          </Text>
        </View>
        <View style={styles.button}>
          <Icon name="hand-holding-medical" size={40} color="#fff" />
          <Text style={styles.text1}>
            Appointments{'\n'}
            You can book your appointment with the doctor.</Text>
        </View>
        <View 
        style={styles.button} 
        onPress={() => console.log('Button 4 pressed')}>
          <Icon name="sms" size={30} color="#fff" />
          <Text style={styles.text1}>
            Community{'\n'}
            You can join the community of people who are facing the same problem as you.</Text>
        </View>
      </View>
      <TouchableOpacity 
      style={styles.bottomView} 
      onPress={onPressHandler}>
        <Text style={styles.textBottom}>Getting started</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      height:'100%',
    },
    welcome: {
      color: '#800080',
      textAlign: 'center',
      marginTop: 10,
      fontFamily: 'sans-serif',
      fontSize: 40,
    },
    Image: {
      width: '100%',
      height: 300,
      resizeMode: 'contain',
    },
    text:{
      color: '#800080',
      textAlign: 'center',
      marginTop: 10,
      fontFamily: 'sans-serif',
    },
    
    buttons: {
      alignItems: 'center',
      marginTop: 20,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#800080',
      color: '#fff',
      padding: 18,
      borderRadius: 20,
      margin: 10,
      width: '90%',
    },
    text1: {
      color: '#fff',
      textAlign: 'left',
      fontFamily: 'sans-serif',
      marginLeft: 10,
    },
    bottomView: {
      backgroundColor: 'rgba(89, 0, 255, 0.744)',
      color: '#fff',
      padding: 18,
      borderRadius: 50,
      marginTop: 40,
      marginHorizontal: 20,
      marginBottom: 20,
      textAlign: 'center',
      bottom:0,
    },
    textBottom: {
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      
    },
  });
  