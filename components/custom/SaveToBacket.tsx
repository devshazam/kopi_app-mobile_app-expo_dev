import { useState, useRef } from 'react';
import {  StyleSheet, Platform,  View, ScrollView, Text, TextInput, Button, Image, Alert } from 'react-native';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import {Picker} from '@react-native-picker/picker';
import { Ionicons } from "@expo/vector-icons";

import { useDispatch, useSelector } from "react-redux";

import { createDeviceApp } from "@/api/deviceAPI";




export default function SendToBasket(props:any) {
    const [spinner, setSpinner] = useState(false); // Запускает спиннер клика по купить
    const [file, setFile] = useState<any>(null); // Файл
    const [descriptionText, setDescriptionText] = useState(""); // Файл
    const [cargo, setCargo] = useState("0");
    const [address, setAddress] = useState("");
    const deliveryType = [
        "Петропавловская 87",
        "Казахская 25",
        "СДЕК (до пункта выдачи)",
        "СДЕК (до вашего адреса)",
        "Почта (до пункта выдачи)",
        "Почта (до вашего адреса)",
    ];
   
    const stateUser = useSelector((state:any) => state.user);


    const  countPrice =  async() => {

        if (!stateUser.isAuth) {
          Alert.alert('Вы не вошли в систему!')
          return;
        }
        if (descriptionText.split("").length > 1000) {
            Alert.alert('Вы ввели не корректное значение!')
            return;
        }
        if (props.value == "0" || isNaN(props.value)) {
             Alert.alert('Цена не сформирована!')
            return;
        }
        if (!file) {
            Alert.alert('Файл не загружен!')
            return;
        }

        const formData = new FormData();
        formData.append("value", `${props.value}`);
        formData.append("name", `${props.name}`);
        formData.append(
            "description",
            `${props.description}. Доставка: ${
                deliveryType[+cargo]
            }, ${address}`
        );
        formData.append("descriptionText", `${descriptionText}`);
        formData.append("image", file);
        formData.append("userId", `${stateUser.user.id}`);
        // formData.append("goodId", `${props.id}`);


        createDeviceApp(formData)
            .then((data) => {
              Alert.alert('Заказ добавлен в корзину!')
            })
            .catch((error:any) => {
                if (error.response.data) {
                  Alert.alert(`${error.response.data.message}`)
                } else {
                  Alert.alert("Ошибка 107 - Обратитесь к администратору!");   
                }
            }).finally(() => {
                setSpinner(true);
            });
    };




  const [image, setImage] = useState<any>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
      base64: true, 
      exif: true
    });

    console.log(result);

    if (!result.canceled) {
        setImage(result.assets[0].uri);
        setFile(result.assets[0].base64);
    }
  };

  return (
    <>



      <TextInput
        style={styles.input}
        onChangeText={setDescriptionText}
        placeholder="Описание (условия, ссылки):"
        value={descriptionText}
      />
              <Picker  style={styles.Picker}
              selectedValue={cargo}
              onValueChange={(itemValue, itemIndex) =>
                setCargo(itemValue)
              }>
              <Picker.Item label="Самовывоз: Петропавловская 87" value="0" />
              <Picker.Item label="Самовывоз: Казахская 25" value="1" /> 
            </Picker>
            
      {image ?
            <Image source={{ uri: image }} style={styles.image} />
            :
            <View style={{marginTop: 7}}>

              <Button color={'#F35858'} title="Загрузить" onPress={pickImage} />
            </View>
        
         }
         <View style={{marginTop: 7}}>
            <Button title="В корзину" onPress={countPrice} disabled={spinner} />
         </View>


    </>
  );
}

const styles = StyleSheet.create({
    Picker: {
        marginTop: 7,
        marginBottom: 7,
        padding: 12,
        // border: '1px solid #b7b7b7',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#b7b7b7',
        borderRadius: 4,
        backgroundColor: 'white',
      },
      button: {
        marginBottom: 7,
      },
      input: {
        marginTop: 7,
        marginBottom: 7,
        padding: 12,
        // border: '1px solid #b7b7b7',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#b7b7b7',
        borderRadius: 4,
        backgroundColor: 'white',
      },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 7,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});