1) Перед постройкой APK
https://github.com/react-native-community/cli/issues/2279

      https://stackoverflow.com/questions/77515577/expo-how-to-create-a-development-build-for-android-and-how-to-create-a-apk-file

      https://docs.expo.dev/build-reference/apk/

      - eas build -p android --profile preview

2) 
      <SafeAreaView>  - реально важно ! чтобы приложение не заходило за технические данные
      <ScrollView style={styles.scrollView}> - ВАЖНО - без этого элемента не отображается текст и кнопки
      <View style={styles.container}> - - ВАЖНО - без этого элемента не отображается текст и кнопки