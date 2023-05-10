import { Pressable } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, SafeAreaView } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
      
    <TextInput style={styles.mbCEVYYz}></TextInput><TextInput style={styles.vZtwsLcB}></TextInput><TextInput style={styles.DWmPpOOH}></TextInput><Pressable><View style={styles.UHqLMmfR}></View></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  mbCEVYYz: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 103.5,
    top: 100
  },
  vZtwsLcB: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    left: 103.5,
    top: 150,
    flexDirection: "row",
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  },
  DWmPpOOH: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    position: "absolute",
    flexDirection: "row",
    flex: 1,
    top: 50,
    left: 103.5
  },
  UHqLMmfR: {
    height: 35,
    width: 142,
    backgroundColor: "#7eace8",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 107.5,
    top: 253
  }
});
export default Untitled4;