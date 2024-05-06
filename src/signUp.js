import React from 'react'
import { Text, View, StyleSheet, TextInput, Pressable, Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native'
import { useState } from 'react'
import { Image } from 'react-native' 
import { addUser } from './userDatabase'

export default function SignUp ()  {
    const navigation = useNavigation();
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const onPressSingIn = () => {
      if (!email || !phone || !password) {
        alert('Please fill in all fields');
        return;
      }
      const user = {
        email: email,
        phone: phone,
        password: password,
      };
      addUser(user);
      navigation.navigate('Main', { screen: 'Home' });
    }
    const onPressHaveAccount =()=>{
        navigation.goBack()
    }    
  return (
    <View style={style.LogIn}>
         <ImageBackground source={require('../assets/signUp.jpg')} style={style.header} >

           <Text style={style.header1}>MINDORA</Text>
           <Image
          style={{width: 100, height: 100, borderRadius: 50}}
          source={require('../assets/user.jpg')}
          />
           <Text style={style.header2}>Welcome, please fill this form for account</Text>
        
       
     <View style={style.inputArea}>
        <View style={style.subInputArea}>
        <Text style={style.text}>
          Names
        </Text>
        <TextInput style={style.input} placeholder='Enter your Names'
        onChangeText={(name) => setName(name)}/>
        </View> 
        <View style={style.subInputArea}>
        <Text style={style.text}>
          Email
        </Text>
        <TextInput style={style.input} placeholder='Enter your Email'
        onChangeText={(userEmail) => setEmail(userEmail)}/>
        </View> 
        <View style={style.subInputArea}>
        <Text style={style.text}>
          Phone Number
        </Text>
        <TextInput style={style.input} placeholder='Enter your Phone Number'
        onChangeText={(userPhone) => setPhone(userPhone)}/>
        </View> 
        <View style={style.subInputArea}>
        <Text style={style.text}>
          PassWord
        </Text>
        <TextInput style={style.input} 
        placeholder='Enter your Password'
        secureTextEntry={true} 
        onChangeText={(userPassword) => setPassword(userPassword)}/>
        </View> 

        <TouchableOpacity style={style.button} 
        onPress={onPressSingIn}>
            <Text style={style.buttonText}>Sign Up</Text>
        </TouchableOpacity>
       
        <Pressable style={style.Pressable} onPress={onPressHaveAccount}>  
        <Text style={style.linkText}>Already Has an Account? Sign In</Text> 
        </Pressable>  
     </View>
     </ImageBackground>  
    </View>
  )
};

const style = StyleSheet.create({
   LogIn:{
    backgroundColor: 'rgba(74, 8, 135, 0.157)',
    flex:1,
    alignItems:'center'
   },
   header:{
    color:'white',
    textAlign:'center',
    height:'100%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:20,
   },
   header1:{
    textAlign:'center',
    fontSize:60,
    color:'purple',
    fontWeight:'bold'
   },
   header2:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
   },
   inputArea:{
    backgroundColor:'white',
    width:'90%',
    height:'auto',
    padding:'20',
    borderRadius:10,
   },
   text:{
    fontSize:18,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 3, 
   },
   input:{
   height:40,
   marginLeft: 10,
   marginBottom:5,
   borderWidth: 1,
   width:'90%',
   borderColor:'rgba(74, 8, 135, 0.157)',
   borderRadius:3,
   padding: 10,
   shadowColor: "#000",
   shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 1,
   },
   subInputArea:{
    marginBottom: 3,
   },
   button:{
    backgroundColor:'purple',
    borderRadius:5,
    width:'80%',
    marginLeft:30,
    marginTop:30,
    margin:20,
   },
   buttonText:{
    color:'white',
    fontSize: 25,
    textAlign:'center',
    padding:10,
    fontWeight:'bold'
   },
   linkText:{
    color:'purple',
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold'
   },
   Pressable:{
    marginTop:20,
    marginBottom:30,
   },
})

