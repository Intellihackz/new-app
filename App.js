import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import Profile from './components/Profile';
import Content from './components/Content';
import Preferences from './components/Preferences';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable 
          style={({ pressed }) => [
            styles.headerButton,
            pressed && styles.headerButtonPressed
          ]}
        >
          <Text style={styles.backButton}>‹</Text>
        </Pressable>
        
        <Pressable 
          style={({ pressed }) => [
            styles.headerButton,
            pressed && styles.headerButtonPressed
          ]}
        >
          <Text style={styles.logoutButton}>Logout</Text>
        </Pressable>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Profile />
        <Content />
        <Preferences />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 24,
    paddingTop: 0,
  },
  header: {
    padding: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 1,
  },
  headerButton: {
    padding: 8,
    borderRadius: 20,
  },
  headerButtonPressed: {
    backgroundColor: '#f0f0f0',
  },
  backButton: {
    fontSize: 32,
    color: '#404040',
    marginTop: -4,
  },
  logoutButton: {
    fontSize: 16,
    fontWeight: '500',
    color: '#235cb2',
  },
  preferences: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
