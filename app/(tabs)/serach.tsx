import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

const localHtmlFile = require('./map.html'); 


export default function MAP() {
  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']} 
      source={localHtmlFile}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
