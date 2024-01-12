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
        <Text style={styles.title}>Name: {customer.customer_name}</Text>
        <Text style={styles.description}>Email: {customer.email}</Text>
        <Text style={styles.description}>Address: {customer.address}</Text>
        <Text style={styles.description}>
          Phone Number: {customer.phone_number}
        </Text>
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
});

export default CustomerDetailScreen;
