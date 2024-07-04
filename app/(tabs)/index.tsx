import { Image, StyleSheet, Platform } from 'react-native';
import { Link } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Collapsible } from '@/components/Collapsible';

import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#63B03E', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo2.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Товары</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
          <Link href="/goods/cards"  style={styles.link}>
            <Ionicons size={20}  name='id-card-outline'/>
            <ThemedText style={styles.titlelink}> Визитки</ThemedText>
          </Link>
          {/* <Link href="/goods/cards"  style={styles.link}>
            <Ionicons size={20}  name='beaker-outline'/>
            <ThemedText style={styles.titlelink}> Самоклейки</ThemedText>
          </Link>
          <Link href="/goods/cards"  style={styles.link}>
            <Ionicons size={20}  name='clipboard-outline'/>
            <ThemedText style={styles.titlelink}> Баннеры</ThemedText>
          </Link> */}
        {/* <Collapsible title="Визитки" >
        </Collapsible>
        <Collapsible title="Баннеры">
          <Link href="/goods/cards" style={styles.link}>Калькулятор баннеров</Link>
        </Collapsible> */}
        <Collapsible title="Визитки">
          <Link href="/goods/cards" style={styles.link}>Калькулятор визиток</Link>
        </Collapsible>
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
  link:{
    color: '#0d6efd',
  },
  titlelink:{
    lineHeight: 28,
    fontSize: 24,
    color: '#0d6efd',
  }
});
