import { View, StyleSheet, Pressable, Text, ScrollView } from "react-native";
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
      <ScrollView horizontal contentContainerStyle={{ gap: 20 }}>
        <AppBarTab to="/" title="Repositories" />
        <AppBarTab to="/signin" title="Sign In" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
