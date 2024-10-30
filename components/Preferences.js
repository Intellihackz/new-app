import React from 'react';
import { View, Text, StyleSheet, Switch, Pressable } from 'react-native';

const PreferenceItem = ({ icon, label, value }) => (
  <Pressable style={({ pressed }) => [
    styles.preferenceItem,
    pressed && styles.preferenceItemPressed
  ]}>
    <View style={styles.leftSection}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
    <View style={styles.rightSection}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.arrow}>›</Text>
    </View>
  </Pressable>
);

const TogglePreferenceItem = ({ icon, label, value, onValueChange }) => (
  <View style={styles.preferenceItem}>
    <View style={styles.leftSection}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
    <Switch 
      value={value} 
      onValueChange={onValueChange}
      trackColor={{ false: '#e0e0e0', true: '#235cb2' }}
      thumbColor={'#ffffff'}
      ios_backgroundColor="#e0e0e0"
    />
  </View>
);

const Preferences = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Preferences</Text>
      <View style={styles.preferencesContainer}>
        <PreferenceItem 
          icon="🇬🇧"
          label="Language"
          value="English"
        />
        <PreferenceItem 
          icon="🔔"
          label="Notifications"
          value="Enabled"
        />
        <PreferenceItem 
          icon="🌙"
          label="Theme"
          value="Dark"
        />
        <TogglePreferenceItem 
          icon="🎧"
          label="Background Play"
          value={true}
          onValueChange={() => {}}
        />
        <TogglePreferenceItem 
          icon="📶"
          label="Download over Wi-Fi only"
          value={false}
          onValueChange={() => {}}
        />
        <TogglePreferenceItem
          icon="🔄"
          label="Autoplay"
          value={true}
          onValueChange={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginBottom: 32,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#1a1a1a',
  },
  preferencesContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  preferenceItemPressed: {
    backgroundColor: '#f8f8f8',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  icon: {
    fontSize: 18,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#404040',
  },
  value: {
    fontSize: 16,
    fontWeight: '400',
    color: '#666',
  },
  arrow: {
    fontSize: 20,
    fontWeight: '400',
    color: '#808080',
  },
});

export default Preferences; 