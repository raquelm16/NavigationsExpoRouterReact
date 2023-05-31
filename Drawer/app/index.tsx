import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from "expo-router";
import 'react-native-gesture-handler';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home</Text>
      <Link href="/telaA">Ir para Tela A</Link>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
