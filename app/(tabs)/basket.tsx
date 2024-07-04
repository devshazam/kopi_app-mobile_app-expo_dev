import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View,  } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { useDispatch, useSelector } from "react-redux";



export default function TabThreeScreen() {
  const stateUser = useSelector((state:any) => state.user);

  const Separator = () => <View style={styles.separator} />;
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#F35858', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/logo2.png')}
          style={styles.reactLogo}
        />
      }>
      
      <ThemedText type="title">В разработке!...</ThemedText>
{/* {stateUser.isAuth ? 
<>
<ThemedText type="title">Корзина</ThemedText>
<Separator/>
</>
:
<>
<ThemedText type="title">Войдите в систему</ThemedText>
</>} */}

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
