import React, { useState, useEffect, useRef } from "react";
import {  StyleSheet, Platform,  View, ScrollView, Text, TextInput, Button, Image,  } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { Link } from 'expo-router';

import { fetchPriceOfProduce } from "@/api/jsonAPI";
import SendToBasket from "@/components/custom/SaveToBacket";
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';


// import { Text, Card } from '@rneui/themed';
// import { Center,} from "native-base";




export default function Cards() {

  const [selectedLanguage, setSelectedLanguage] = useState(); 
  const [vizit, setVizit] = useState([]);
  const [value, setValue] = useState(0);
  const [side, setSide] = useState("0");
  const [vid, setVid] = useState("0");
  const [lam, setLam] = useState("0");
  const [num, setNum] = useState("0");
  const [description, setDescription] = useState(""); // Телефон
  const name = "Визитки";
  const goodsId = "0";
  const vizSize = ["односторонние", "двусторонние"];
  const vizVid = ["матовая", "глянцевая", "дизайнерская"];
  const vizLam = ["без ламинации", "глянцевая", "матовая"];
  const vizNum = ["96", "200", "500", "1000"];

    useEffect(() => {
        fetchPriceOfProduce({ jsonId: 2 })
            .then((data) => {
                setVizit(JSON.parse(data.value));
            })
            .catch((error) => {
                if (error.response.data) {
                    alert(
                        `${error.response.data.message}${error.response.status}`
                    );
                } else {
                    console.log("dev", error);
                    alert("Ошибка 153 - Обратитесь к администратору!");
                }
            });
    }, []);


    useEffect(() => {
      if (vizit.length == 0) return;
      setValue(vizit[+side][+vid][+lam][+num]);
      setDescription(
          `Наименование: ${name}; Цена: ${value} рублей; Кол-во сторон печати: ${
              vizSize[+side]
          }; Бумага: ${vizVid[+vid]}; Ламинация: ${vizLam[+lam]}; Кол-во: ${
              vizNum[+num]
          };`
      );
  }, [value, side, num, lam, vid, vizit]); // <- add the count variable here





  return (
    <SafeAreaView>
    <ScrollView style={styles.scrollView}>
       <View style={styles.container}>






  
          <Image
          source={require('@/assets/images/vizitki.jpg')}
          style={styles.mainImage}
        />
          <Text style={{ fontSize: 28, marginVertical: 10 }}>
          Цена: {value} p.
            </Text>



          <Picker  style={styles.Picker}
            selectedValue={side}
            onValueChange={(itemValue:any, itemIndex:any) =>
              setSide(itemValue)
            }>
            <Picker.Item label="Односторонние" value="0" />
            <Picker.Item label="Двусторонние" value="1" />
          </Picker>

          <Picker  style={styles.Picker}
            selectedValue={vid}
            onValueChange={(itemValue:any, itemIndex:any) =>
              setVid(itemValue)
            }>
            <Picker.Item label="Матовая бумага" value="0" />
            <Picker.Item label="Глянцевая бумага" value="1" />
            <Picker.Item label="Дизайнерская бумага" value="2" />
          </Picker>
          <Picker  style={styles.Picker}
            selectedValue={lam}
            onValueChange={(itemValue:any, itemIndex:any) =>
              setLam(itemValue)
            }>
            <Picker.Item label="Без ламинации" value="0" />
            <Picker.Item label="Глянцевая ламинация" value="1" />
            <Picker.Item label="Дизайнерская ламинация" value="2" />
          </Picker>
          <Picker  style={styles.Picker}
            selectedValue={num}
            onValueChange={(itemValue:any, itemIndex:any) =>
              setNum(itemValue)
            }>
            <Picker.Item label="96 шт." value="0" />
            <Picker.Item label="200 шт." value="1" /> 
            <Picker.Item label="500 шт." value="2" /> 
            <Picker.Item label="1000 шт." value="3" />
          </Picker>
          
        
            <SendToBasket value={`${value}`} description={description} name={name} id={goodsId} />
            <Text style={{fontSize: 12, textAlign: 'left'}}>
                ** - данные цены действуют только на сайте!
            </Text>





       </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainImage: {
    width: '100%',
    height: 300,
    borderWidth: 1,
    borderColor: '#b7b7b7',
    borderRadius: 4,
  },
  Picker: {
    marginTop: 7,
    marginBottom: 7,
    padding: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#b7b7b7',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
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
    marginVertical: 50,
    marginHorizontal: 16,

  },
  scrollView: {
    marginHorizontal: 20,
  },

});

