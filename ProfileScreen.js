import { Button, Text, View, StyleSheet, Image } from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  const imageUrl = "https://placekitten.com/300/200";
  return (
    <View>
      <View style={styles.titleArea}>
        <Text style={styles.title}>
          Welcome to {route.params.name}'s profile
        </Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>Name: {route.params.name}</Text>
          <Text style={styles.description}>
            Email: dewi@smkn12malang.sch.id
          </Text>
          <Text style={styles.description}>
            Address: Perumahan Bumi Banjararum Asri Blok AE-20
          </Text>
          <Text style={styles.description}>Phone Number: 087737439614</Text>
        </View>
      </View>
      <Text>Tulis bio di sini</Text>
      <Text>Tampilkan portofolio di sini</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontsize: 40,
  },
  titleArea: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
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
export default ProfileScreen;
