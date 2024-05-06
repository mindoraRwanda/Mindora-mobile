import AsyncStorage from '@react-native-async-storage/async-storage';

async function addUser(user) {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem(`@storage_Key:${user.email}`, jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
}

async function getUser(email) {
  try {
    const jsonValue = await AsyncStorage.getItem(`@storage_Key:${email}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // reading error
    console.log(e);
  }
}
async function logUser(email) {
    const user = await getUser(email);
    console.log(user);
  }

export { addUser, getUser };