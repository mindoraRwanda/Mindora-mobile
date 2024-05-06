import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, ImageBackground, SafeAreaView, Image, TouchableOpacity, Button ,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Appointment() {
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [bookingModalVisible, setBookingModalVisible] = useState(false);
   const [name, setName] = useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');
    const [searchText, setSearchText] = useState('');


  const therapists = [
    { 
      name: 'Noella Nizigama', 
      location: 'Kigali', 
      job: 'Psychologist',
      image: require('../assets/team3.jpg'),
      description: '"Exploring the intricate landscapes of the mind and unraveling the complexities of behavior, I navigate the realm of psychology. My journey delves into understanding the human psyche, decoding emotions, and deciphering the unique tapestry of human thought. Passionately committed to unraveling the mysteries of cognition, emotions, and behaviors, I embrace the fascinating world of psychology, driven by a curiosity to comprehend the intricacies of the human experience."' 
    },
    { 
      name: 'Uwirora Gilbert',
      location: 'Kigali', 
      job: 'Clinical Psychologist', 
      image: require('../assets/team2.jpg'),
      description: '"Exploring the intricate landscapes of the mind and unraveling the complexities of behavior, I navigate the realm of psychology. My journey delves into understanding the human psyche, decoding emotions, and deciphering the unique tapestry of human thought. Passionately committed to unraveling the mysteries of cognition, emotions, and behaviors, I embrace the fascinating world of psychology, driven by a curiosity to comprehend the intricacies of the human experience."' 
    },
    { 
      name: 'Murenzi Patrick',
      location: 'Kigali',
      job: 'Psychologist',
      image: require('../assets/team5.jpg'),
      description: '"Exploring the intricate landscapes of the mind and unraveling the complexities of behavior, I navigate the realm of psychology. My journey delves into understanding the human psyche, decoding emotions, and deciphering the unique tapestry of human thought. Passionately committed to unraveling the mysteries of cognition, emotions, and behaviors, I embrace the fascinating world of psychology, driven by a curiosity to comprehend the intricacies of the human experience."' 
    },
    { 
      name: 'Nsengiyumva Athanaze', 
      location: 'Kigali', 
      job: 'Psychologist',
      image: require('../assets/team6.jpg'),
      description: '"Exploring the intricate landscapes of the mind and unraveling the complexities of behavior, I navigate the realm of psychology. My journey delves into understanding the human psyche, decoding emotions, and deciphering the unique tapestry of human thought. Passionately committed to unraveling the mysteries of cognition, emotions, and behaviors, I embrace the fascinating world of psychology, driven by a curiosity to comprehend the intricacies of the human experience."'
     },
  ];

  return (
    <ScrollView style={style.main}>
      <View  style={style.header}>
        <Text style={style.title}>Find Your Therapist </Text>
        <View style={style.searchSection}>
         <TextInput
          style={style.input}
          placeholder="Search therapists"
          onChangeText={searchText => setSearchText(searchText)}
        />
        <Icon style={style.searchIcon} name="search" size={20} color="#fff"/>
  </View>
      </View> 

      {therapists.map((therapist, index) => (
      <View key={index} style={style.therapy}>
       <Image source={therapist.image} style={style.avatar}/>
       <View style={style.therapy.dec}>
         <Text style={style.avatarTitle}>{therapist.name}</Text>
        <Text style={style.avatarAddress}>{therapist.location}</Text>
       <Text style={style.avatarJob}>{therapist.job}</Text>
         <View style={style.avatarButton}>
      <TouchableOpacity onPress={() => {setProfileModalVisible(true); setSelectedTherapist(therapist);}}>
        <Text style={style.avatarButtonText}>Visite</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity onPress={() => setBookingModalVisible(true)}>
        <Text style={style.avatarButtonText}>Book</Text>
       </TouchableOpacity> */}
       </View>
     </View>
    </View>
    ))}
      <Modal visible={profileModalVisible} onRequestClose={() => setProfileModalVisible(false)}>
  {selectedTherapist && (
    <View style={style.modalContent}>
      <Image source={selectedTherapist.image} style={style.avatarModel}/>
      <View style={style.box}>
      <Text style={style.title}>Doctor's Description</Text>
      <Text style={style.avatarTitle}>{selectedTherapist.name}</Text>
      <Text style={style.avatarAddress}>{selectedTherapist.location}</Text>
      <Text style={style.avatarJob}>{selectedTherapist.job}</Text>
      <Text style={style.avatarDescription}>{selectedTherapist.description}</Text>
     </View>
    </View>
  )}
   <TouchableOpacity 
    style={{
      position: 'absolute', 
      top: 10, 
      right: 10, 
      backgroundColor: 'rgba(74, 8, 135, 0.757)', 
      borderRadius: 30, 
      padding: 10
    }}
    onPress={() => setProfileModalVisible(false)}
  >
    <Icon name="times" size={24} color="white" />
  </TouchableOpacity>
  <View style={style.box}>
    <Text style={style.title}>Book an Appointment</Text>
    <TextInput
      style={style.input}
      placeholder="Your Name"
      value={name}
      onChangeText={setName}
    />
    <TextInput
      style={style.input}
      placeholder="Date (dd/mm/yyyy)"
      value={date}
      onChangeText={setDate}
    />
    <TextInput
      style={style.input}
      placeholder="Time (HH:MM)"
      value={time}
      onChangeText={setTime}
    />
    <Button title="Submit" onPress={() => {
      // Handle form submission
      setProfileModalVisible(false);
    }} />
  </View>
</Modal>


    </ScrollView>
  );
}

const style = StyleSheet.create({
  main:{

  },
  header:{
    color:'white',
    width:'100%',
    paddingLeft:20,
  },
  header1:{
    fontSize:50,
    color:'purple',
    marginTop:20,
    fontWeight:'bold'
  },
  title:{
    fontSize:30,
    color:'black',
    marginTop:10,
    fontWeight:'bold'
  },
  therapy:{
    backgroundColor:'white',
    borderColor:'rgba(74, 8, 135, 0.157)',
    width:'90%',
    height:120,
    padding:'20',
    borderRadius:10,
    marginLeft:'5%',
    marginBottom:10,
    flexDirection:'row',
    gap:20,
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
         width: 0,
         height: 1,
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5,
  },
  dec:{
    width:'60%',
    height:100,
  },
  avatar:{
    width:100,
    height:120,
    alignSelf:'center',
    borderTopLeftRadius: 10, 
    borderBottomLeftRadius: 10, 
  },
  avatarTitle:{
    fontSize:20,
    color:'black',
    fontWeight:'bold'
  },
  avatarAddress:{
    fontSize:13,
    color:'black',
    fontWeight:'bold'
  },
  avatarJob:{
    fontSize:15,
    color:'black',
    fontWeight:'bold'
  },
   avatarButton:{
  },
  avatarButtonText:{
    fontSize:18,
    width:100,
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    backgroundColor:'rgba(74, 8, 135, 0.757)',
    borderRadius:5,
    padding:5
  },
  modalContent: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
    width:'90%',
    height:'auto',
    
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  input: {
    height: 20,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  avatarDescription: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 15,
  },
  avatarModel:{
    width:'100%',
    height:300,
    alignSelf:'center',
    marginBottom:10
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 25,
    borderColor: 'gray',
  },
  searchIcon: {
    padding: 10,
    backgroundColor: '#800080', // Purple
    borderRadius: 10, // Rounded corners
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    backgroundColor: '#fff',
    color: '#424242',
  },
  box: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    
  },
})

