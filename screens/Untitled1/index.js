import { Pressable } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { View } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <Pressable>
        <View style={styles.JeZRMVJL}>
          <Text style={styles.lUHFSYXt}>Calc Weight</Text>
        </View>
      </Pressable>
      <TextInput style={styles.rXKVsyyG} placeholder="after egestion"></TextInput>
      <TextInput style={styles.MUBRWuvA} placeholder="coffee drank"></TextInput>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  JeZRMVJL: {
    height: 60,
    width: 215,
    backgroundColor: "#6d76eb",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 71,
    top: 353
  },
  rXKVsyyG: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 95,
    top: 194
  },
  MUBRWuvA: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 93,
    top: 115
  },
  lUHFSYXt: {
    width: 170,
    height: 58,
    lineHeight: 60,
    fontSize: 16,
    borderRadius: 0,
    position: "absolute",
    left: 22.5,
    top: 0,
    textAlign: "center",
    color: "#ffffff"
  }
});
export default Untitled1;