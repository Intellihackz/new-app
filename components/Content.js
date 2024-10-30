import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const ContentItem = ({ icon, title }) => (
  <Pressable style={({ pressed }) => [
    styles.contentItem,
    pressed && styles.contentItemPressed
  ]}>
    <View style={styles.leftSection}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
    <Text style={styles.arrow}>›</Text>
  </Pressable>
);

const Content = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Content</Text>
      <View style={styles.itemsContainer}>
        <ContentItem icon="+" title="Favourites" />
        <ContentItem icon="↓" title="Downloads" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  header: {
    fontSize: 20,
    fontWeight: '300',
    marginBottom: 16,
    color: '#1a1a1a',
  },
  itemsContainer: {
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
  contentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  contentItemPressed: {
    backgroundColor: '#f8f8f8',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
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
    fontSize: 20,
    color: '#404040',
  },
  title: {
    fontSize: 18,
    marginLeft: 16,
    fontWeight: '500',
    color: '#404040',
  },
  arrow: {
    fontSize: 24,
    color: '#808080',
    marginRight: 8,
  },
});

export default Content;
