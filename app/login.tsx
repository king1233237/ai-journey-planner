import { TextInput, Text, View, StyleSheet } from 'react-native';
import { KeyboardAwareScrollView, KeyboardToolbar } from 'react-native-keyboard-controller';

export default function FormScreen() {
  return (
    <>
      <KeyboardAwareScrollView bottomOffset={62} contentContainerStyle={styles.container}>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 30 , fontWeight: "bold" }}>AI Journey Planner</Text>
          </View>
          <Text></Text>
          <Text></Text>
          <View style={{justifyContent: 'center'}}>
          <Text>Name :</Text>
          <Text></Text>
          <TextInput placeholder="" style={styles.textInput} />
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <View>
          <Text>Password :</Text>
          <Text></Text>
          <TextInput placeholder="" style={styles.textInput} />
          </View>
          </View>
      </KeyboardAwareScrollView>
      <KeyboardToolbar />
    </>
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
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#d8d8d8',
    backgroundColor: '#fff',
    padding: 8,
    marginBottom: 8,
  },
});
