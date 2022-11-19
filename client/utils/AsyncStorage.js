import AsyncStorage from "@react-native-async-storage/async-storage";


// storing data
export const storeUser = async (value) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

// getting data
export const getUser = async () => {
  try {
    const userData = JSON.parse(await AsyncStorage.getItem("user"))
  } catch (error) {
   console.log(error); 
  }
};