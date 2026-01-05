import { StyleSheet, TextInput, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';


export default function HomeScreen() {
  const router = useRouter();
  return (
    <View>
      <View style={{height:300 ,alignItems: 'center', justifyContent: "center"}}>
        <Text style={{fontSize: 30 , color: 'red', fontWeight: "bold" }}>AI Journey Planner</Text>
        <Text style={{fontSize: 16 ,justifyContent: "center"}}>Provide by Google Gemini</Text>
      </View>
        <>
        <KeyboardAwareScrollView bottomOffset={62} contentContainerStyle={styles.container}>
        <Text style={{fontSize: 20,justifyContent:'center'}}>Tell us where do you want to go now ^V^</Text>
        <View>
          <TextInput placeholder="Type a message..." style={styles.textInput} />
        </View>
      </KeyboardAwareScrollView>
        </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  listStyle: {
    padding: 16,
    gap: 16,
  },
  textInput: {
    width: 'auto',
    flexGrow: 1,
    flexShrink: 1,
    height: 200,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#d8d8d8',
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 8,
  },
});