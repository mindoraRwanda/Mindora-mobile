import React, { useState } from 'react';
import { SafeAreaView, View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';

// Question and Answer Object
const questionAnswerMap = {
  '0': 'Welcome! How can I assist you today?',
  'How are you?': 'I am an AI, I do not have feelings, but thank you for asking!',
  'What is your name?': 'My name is AI Bot.',
  'What is your purpose?': 'My purpose is to assist you.'
};

const Home = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, { text: message, sender: 'me' }]);

      const response = questionAnswerMap[message] || "I'm sorry, I don't have knowledge about that.";
      setMessages(prevMessages => [...prevMessages, { text: response, sender: 'ai' }]);

      setMessage('');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {messages.map((message, index) => (
          <View key={index}>
            <Text style={{ alignSelf: message.sender === 'me' ? 'flex-end' : 'flex-start' }}>
              {message.text}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 25 }}
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={{ marginLeft: 10 }}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
