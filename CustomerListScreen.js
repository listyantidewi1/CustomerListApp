// CustomerListScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

const CustomerListScreen = ({ navigation }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('https://retoolapi.dev/yZjtsj/customers')
      .then(response => setCustomers(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CustomerDetail', { customer: item })}>
      <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.customer_name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={customers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CustomerListScreen;
