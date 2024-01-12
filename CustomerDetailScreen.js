// CustomerDetailScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const CustomerDetailScreen = ({ route }) => {
  const { customer } = route.params;

  return (
    <View style={{ padding: 16 }}>
      <Text>Name: {customer.customer_name}</Text>
      <Text>Email: {customer.email}</Text>
      <Text>Address: {customer.address}</Text>
      <Text>Phone Number: {customer.phone_number}</Text>
    </View>
  );
};

export default CustomerDetailScreen;
