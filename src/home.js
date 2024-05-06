import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { questionAnswerMap } from './questionAnswerMap';
import { useRef, useEffect } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{ text: 'Welcome! Am Mindora AI, How can I assist you today?', sender: 'ai' }]);
  const isMounted = useRef(true);
  
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const sendMessage = () => {
    if (message) {
      setMessages(prevMessages => [...prevMessages, { text: message, sender: 'me' }]);
  
      const response = questionAnswerMap[message] || "I'm sorry, I don't have knowledge about that.";
      setTimeout(() => {
        if (isMounted.current) {
          setMessages(prevMessages => [...prevMessages, { text: response, sender: 'ai' }]);
        }
      }, 2000);
  
      setMessage('');
    }
  };
  return (
    <View style={{flex:1,
    height:'100%'}}>
      <View style={{ backgroundColor: '#4b08893f', padding: 10, flex:1 , justifyContent:'center',
    alignItems:'center'}}>
        
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white',  }}>Mindora AI Chat</Text>
      </View>
    <SafeAreaView style={{ flex: 7}}>
      <ScrollView style={{ flex: 1, padding: 10 }}>
        {messages.map((message, index) => (
          <View key={index} style={{ alignSelf: message.sender === 'me' ? 'flex-end' : 'flex-start' }}>
            <Text style={{ padding: 10, margin: 5, borderRadius: 10, maxWidth: '70%', backgroundColor: message.sender === 'me' ? '#4b08893f' : '#4b08893f' }}>
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#4b08893f' }}>
        <TextInput
          style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 25 }}
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={{ marginLeft: 10 }}>
        <Ionicons name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </View>
  );
}
