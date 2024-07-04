import { Tabs } from 'expo-router';
import React, { useEffect } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { useDispatch, useSelector } from "react-redux";
import { check } from "@/api/userAPI";


export default function TabLayout() {
  const colorScheme = useColorScheme();

  const dispatch = useDispatch();
  
  useEffect(() => {
    check()
        .then((data) => {
            console.log('dev', data)
            if (data) {
                dispatch({ type: "AUTH", payload: true });
                dispatch({ type: "USER", payload: data });
            }
        
        })
        .catch((error) => {
            console.log('dev', error);
            // if(error.response && error.response.data){
            //     alert(`${error.response.data.message} - (${error.response.status})`);
            // }else{
            //     console.log('dev', error);
            //     alert('Ошибка 103 - Обратитесь к администратору!');
            // }
        })
}, []);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Товары',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cube' : 'cube-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: 'Контакты',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information' : 'information-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
          name="basket"
          options={{
            title: 'Карзина',
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon name={focused ? 'basket' : 'basket-outline'} color={color} />
            ),
          }}
        />
      <Tabs.Screen
        name="login"
        options={{
          title: 'Вход',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'enter' : 'enter-outline'} color={color} />
          ),
        }}
      />

        <Tabs.Screen
        name="goods/cards"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
