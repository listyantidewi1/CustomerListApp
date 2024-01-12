import { Button, Text, View, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Implement any additional logout logic if needed
    navigation.navigate("Login");
  };
  return (
    <View>
      <Button
        title="Go to my profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <Button
        title="Go to my customer's list"
        onPress={() => navigation.navigate("CustomerList")}
      ></Button>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default HomeScreen;
