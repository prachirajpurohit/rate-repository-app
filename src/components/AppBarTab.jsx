import { Pressable, Text } from "react-native";
import theme from "../theme";

const AppBarTab = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text
        style={{
          marginTop: 20,
          color: theme.appBar.textColor,
          fontSize: theme.fontSizes.subheading,
          fontWeight: theme.fontWeights.bold,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
