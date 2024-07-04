import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ExternalLink } from '@/components/ExternalLink';

import * as Linking from 'expo-linking';

export default function Contacts() {

const sendWhatsapp = async () => {
  Linking.openURL('whatsapp://send?text=FromApp&phone=+79093802519').then(() => {
    console.log('WhatsApp Opened');
  }).catch((e) => {
    console.log(e)
  })


} 


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFDD33', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo2.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Контакты</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Мессенджеры</ThemedText>

        <Button
                      // style={styles.button}
                      title="Телеграм"
                      onPress={sendWhatsapp}
                      
                  />
                          <ExternalLink href="https://t.me/+79093802519">
          <ThemedText type="link">Ссылка на телеграмм</ThemedText>
        </ExternalLink>

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Телефоны</ThemedText>
        <ExternalLink href="tel: +79093802519">
          <ThemedText type="link">+7 (909) 380-25-19</ThemedText>
        </ExternalLink>
        <ExternalLink href="tel: +78442599161">
          <ThemedText type="link">+7 (8442) 59-91-61</ThemedText>
        </ExternalLink>
        <ExternalLink href="mailto: info@kopi34.ru">
          <ThemedText type="link">kopi34@yandex.ru</ThemedText>
        </ExternalLink>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Адреса</ThemedText>
        <ThemedText>
          Волгоград, ул. Петропавловская 87
        </ThemedText>
        <ThemedText>
          Волгоград, ул. Казахская 25
        </ThemedText>
        <ThemedText>
          Волгоград, ул. 2-я Динамовская д. 6 (производство)
        </ThemedText>
        <ExternalLink href="https://kopi34.ru/">
          <ThemedText type="link">www.kopi34.ru</ThemedText>
        </ExternalLink>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
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
});
