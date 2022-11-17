import AsyncStorage from "@react-native-async-storage/async-storage";


export const setDataUser = async (data) => {
    try {
      await AsyncStorage.setItem(
        'user',
        data
      );
    } catch (error) {
      // Error saving data
      console.log("Error saving data");
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