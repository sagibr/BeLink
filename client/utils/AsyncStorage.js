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
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // We have data!!
        return value
      }
    } catch (error) {
      // Error retrieving data
      console.log("Error get data");
    }
  };