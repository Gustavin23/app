import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {
  return (
    <View>
      <ScrollView>
      <Header />
      <Content />
      <Footer />
      </ScrollView>
    </View>
  );
}

