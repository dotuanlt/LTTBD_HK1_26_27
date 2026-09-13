import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { Header } from "../components/Header";
import { CategoryChips } from "../components/CategoryChips";
import { BookGrid } from "../components/BookGrid";
import { FloatingCartButton } from "../components/FloatingCartButton";
import { BOOKS } from "../../data";
import { DiscountBadge } from "../components/DiscountBadge";
import { useState } from "react";

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const handlePressBook = (id: number) => {
    console.log("Book ID:", id);
  };

  const handleCartPress = () => {
    console.log("Mở giỏ hàng");
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <View style={styles.screen}>
      <Header />

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Khám phá sách</Text>
          <Text style={styles.subtitle}>
            {" "}
            Tìm những cuốn sách yêu thích của bạn{" "}
          </Text>
        </View>

        <View style={styles.categorySection}>
          <Text style={styles.sectionTitle}>Danh mục</Text>
          <CategoryChips />
        </View>

        <View style={styles.bookSection}>
          <View style={styles.bookHeader}>
            <Text style={styles.sectionTitle}> Sách nổi bật </Text>
            <Text style={styles.bookCount}> {BOOKS.length} sách </Text>
          </View>
          <BookGrid books={BOOKS} onPressBook={handlePressBook} />
        </View>

        <Pressable style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}> + Thêm sách vào giỏ </Text>
        </Pressable>
      </ScrollView>

      <FloatingCartButton count={cartCount} onPress={handleCartPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },

  content: {
    padding: 16,
    paddingBottom: 100,
  },

  titleSection: {
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: "#6B7280",
  },

  categorySection: {
    marginBottom: 24,
  },

  sectionTitle: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },

  bookSection: {
    marginBottom: 20,
  },

  bookHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  bookCount: {
    fontSize: 13,
    color: "#6B7280",
  },

  addButton: {
    marginTop: 10,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#4338CA",
    alignItems: "center",
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});
