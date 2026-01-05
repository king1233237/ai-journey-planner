import { Link } from 'expo-router';
import { View, Button } from 'react-native';

export default function login() {
  return (
    <View style={{height: 300 ,alignItems: "center", justifyContent: "center"}}>
        <Link href="/login" push asChild>
          <Button title="login"></Button>
        </Link>
        </View>
  );
}
