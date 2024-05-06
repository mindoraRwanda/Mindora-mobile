import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const users = [
  {
     name: 'Noella Nizigama', 
     image: require('../assets/team3.jpg'),
     lastSeen: 'Online', 
    },
  {
    name: 'Uwirora Gilbert',
    image: require('../assets/team2.jpg'),
    lastSeen: 'Last seen yesterday',
  },
  {
    name: 'Murenzi Patrick', 
    image: require('../assets/team5.jpg'),
    lastSeen: 'Last seen 2 hours ago', 
   },
   {
    name: 'Uwirora Gilbert',
    image: require('../assets/team2.jpg'),
    lastSeen: 'Online',
  },
   {
    name: 'Noella Nizigama', 
    image: require('../assets/team3.jpg'),
    lastSeen: 'Online', 
   },
   {
    name: 'Uwirora Gilbert',
    image: require('../assets/team2.jpg'),
    lastSeen: 'Online',
  },
   {
    name: 'Noella Nizigama', 
    image: require('../assets/team3.jpg'),
    lastSeen: 'Last seen Monday', 
   },
   {
    name: 'Uwirora Gilbert',
    image: require('../assets/team2.jpg'),
  },
];

export default function Chat() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, { text: message, sender: 'me' }]);
      setMessage('');
    }
  };

  return (
    <ScrollView>
      {users.map((user, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.chat} 
          onPress={() => setSelectedUser(user)}
        >
          <Image style={styles.avatar} source={user.image} />
          <Text style={styles.avatarName}>{user.name}{'\n'}<Text style={styles.timeStamp}> Start conversition {'\n'}
          {user.lastSeen}</Text></Text>
        </TouchableOpacity>
      ))}

     {selectedUser && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={!!selectedUser}
          onRequestClose={() => setSelectedUser(null)}
        >
           
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedUser(null)}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Image style={styles.avatar} source={selectedUser.image} />
            <Text style={styles.modalText}>{selectedUser.name}</Text>
          </View>
          <ScrollView style={styles.chatContainer}>
            {messages.map((message, index) => (
              <Text 
                key={index} 
                style={[
                  styles.chatMessage, 
                  message.sender === 'me' ? styles.myMessage : styles.theirMessage
                ]}
              >
                {message.text}
              </Text>
            ))}
          </ScrollView>
          {/* Dummy chat messages */}
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input} 
              placeholder="Type a message" 
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Ionicons name="send" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </Modal>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:0
  },
  chat:{
    flexDirection:'row',
    alignItems: 'center',
    gap:12,
    padding:10
  },
  avatar:{
    height:80,
    width:80,
    borderRadius:50,
  },
  avatarName:{
    fontSize:25,
    fontWeight: 'bold'
  },
  timeStamp:{
    fontSize:15,
    fontWeight: 'normal',
    color:'grey'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton: {
    backgroundColor: '#f3f3f3',
    padding: 10,
    marginTop: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#333',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
  },
  closeButton: {
    marginRight: 10,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  chatMessage: {
    padding: 10,
    margin: 5,
    backgroundColor: 'rgba(74, 8, 135, 0.457)',
    borderRadius: 10,
    maxWidth: '70%',
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  sendButton: {
    marginLeft: 10,
  },
  
  chatMessage: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    maxWidth: '70%',
  },
  myMessage: {
    backgroundColor: 'rgba(74, 8, 135, 0.857)',
    alignSelf: 'flex-end',
    color: 'white',
  },
  theirMessage: {
    backgroundColor: 'rgba(74, 8, 135, 0.457)',
    alignSelf: 'flex-start',
  },
});





