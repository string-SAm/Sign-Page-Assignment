import React, { useState } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from "react-native";

const About = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [username, setUsername] = useState("");

  const [phone, setPhone] = useState("");

  const handleSignIn = () => {
    if (!name || !email || !phone || !dob) {
      Alert.alert("Plzz fill all the fields");
    } else {
      Alert.alert(`Thank You ${name}`);
    }
  };

  return (
    <View>
      <Text style={{}}>SignIn</Text>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          }}
        />

        <Text>Swayam_Soni</Text>
      </View>
      <View>
        <Text style={styles.mainHeader}>Personal Information </Text>

        <TextInput
          style={styles.input}
          placeholder={"Full Name"}
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder={"Email Address"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder={"DOB"}
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />

        <TextInput
          style={styles.input}
          placeholder={"Country"}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={"Phone Number*"}
          secureTextEntry={true}
          value={dob}
          onChangeText={(text) => setDob(text)}
        />
        <Button style={styles.button} title="Sign In" onPress={handleSignIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },

  mainHeader: {
    fontSize: 13,
    color: "black",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
  },

  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default About;
