import React from 'react';
import { View, ScrollView, Text, StyleSheet} from 'react-native';
import { CategoryChips } from '../components/CategoryChips';

export function CategoryScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Danh mục</Text>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>
          Chọn danh mục sách
        </Text>

        <CategoryChips />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  title: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },

  scroll: {
    flex: 1,
  },

  content: {
    padding: 16,
    paddingBottom: 100,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
});