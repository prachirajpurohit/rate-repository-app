import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.backgroundColor,
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab title="Repositories" onPress={() => console.log("Pressed")} />
      {/* <AppBarTab title="SignIn" onPress={() => console.log("Pressed")} /> */}
    </View>
  );
};

export default AppBar;
