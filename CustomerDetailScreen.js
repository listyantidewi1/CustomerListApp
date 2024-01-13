// CustomerDetailScreen.js
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CustomerDetailScreen = ({ route }) => {
  const { customer } = route.params;
  const imageUrl = "https://placekitten.com/300/201";

  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>Name: {customer.name}</Text>
        <Text style={styles.description}>Email: {customer.email}</Text>
        <Text style={styles.description}>Address:</Text>
        <Text style={styles.indentedText}>{customer.address.street}</Text>
        <Text style={styles.indentedText}>{customer.address.suite}</Text>
        <Text style={styles.indentedText}>{customer.address.city}</Text>
        <Text style={styles.indentedText}>{customer.address.zipcode}</Text>
        <Text style={styles.description}>Phone Number: {customer.phone}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    marginVertical: 10,
    elevation: 3,
    padding: 6,
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#555",
  },
  indentedText: {
    marginLeft: 20, // Adjust the value based on your preferred indentation
  },
});

export default CustomerDetailScreen;
