import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Linking } from 'react-native';


export default function LoginbyPasport() {
  const authGithib =()=>{
    Linking.openURL('http://localhost:4000/authPassport/github')
  }
  const logout = ()=>{
    Linking.openURL("http://localhost:4000/authPassport/logout")
    
  }
  return (
    <View>
      <Button title="auth github" onPress={authGithib} />
      <Button title="logout" onPress={logout} />
    </View>
  );
}