import {  StyleSheet, Platform,  View, ScrollView, Text, TextInput, Button, Image, Alert,  } from 'react-native';
import React, { useState, useEffect , useRef} from 'react';

import { StatusBar } from 'expo-status-bar';

import { login } from "@/api/userAPI";
import { useDispatch, useSelector } from "react-redux";

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { removeItem } from "@/utils/AsyncStorage";


import {
  SafeAreaView,
} from 'react-native-safe-area-context';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
// console.log(email, password)

  const stateUser = useSelector((state:any) => state.user);
  const dispatch = useDispatch();

  const makeLogin = () => {
    if (!email || !password) {
      Alert.alert('Введите логин и пароль!')
        return;
    }
    if (email.split("").length > 200 || password.split("").length > 200) {
      Alert.alert('Не корректные значения!')
        return;
    } 

    login(email, password)
        .then((data) => {
          console.log(data)
          Alert.alert('Успешный вход в систему!')


          dispatch({type: "AUTH", payload: true})
          dispatch({type: "USER", payload: data})
        })
        .catch((error) => {
          console.log(error)
            if (error && error.response && error.response.data) {
              Alert.alert(`${error.response.data.message}`)
            } else {
              Alert.alert(`Системная ошибка, обратитесь к администратору`)
            }
        });
    };

    const logOut = async () => {
      dispatch({type: "AUTH", payload: false})
      dispatch({type: "USER", payload: {}})
      await removeItem('token');
    };

  return (

    <>
        <ParallaxScrollView
      headerBackgroundColor={{ light: '#66A4FF', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo2.png')}
          style={styles.reactLogo}
        />
      }>
        <SafeAreaView>
        <ScrollView style={styles.scrollView}>
           <View style={styles.container}>
            {stateUser.isAuth ? 
              <>
                <Text  style={styles.mail}>{stateUser.user.email}</Text>
                  <Button
                      // style={styles.button}
                      color={'#F35858'}
                      title="Выход"
                      onPress={logOut}
                      
                  />
              </>
              :
              <>
                  <Text>Войдите в систему!</Text>
                  <StatusBar style="auto" />
                  <TextInput
                  
                    style={styles.input}
                    onChangeText={newText => setEmail(newText)}
                    value={email}
                    placeholder='Введите почту!'
                  />
                  <TextInput
                    style={styles.input}
                    onChangeText={newText => setPassword(newText)}
                    value={password}
                    secureTextEntry={true}
                    placeholder='Введите пароль!'
                  />
                  <Button
                      // style={styles.button}
                      title="Вход"
                      onPress={makeLogin}
                      
                  />
              </>
            } 
          </View>
          </ScrollView>
    </SafeAreaView>
    </ParallaxScrollView>





     </>

  );
}

const styles = StyleSheet.create({
  mail:{
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  viewContainer: {
    width: '100%',
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    marginHorizontal: 16,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

