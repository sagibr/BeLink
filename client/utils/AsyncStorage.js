import AsyncStorage from "@react-native-async-storage/async-storage";


export const setDataUser = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('user', jsonValue)
    
  } catch(e) {
    // save error
    console.log(e);
  }
  };

  export const getDataUser = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
      console.log(jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
      // read error
      console.log(e);
    }
  };