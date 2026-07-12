import { Pressable, Text } from "react-native";
import theme from "../theme";
import { Link } from "react-router-native";

const AppBarTab = ({ title, to }) => {
  return (
    <Link to={to} component={Pressable}>
      <Text
        style={{
          marginTop: 12,
          color: theme.appBar.textColor,
          fontSize: theme.fontSizes.subheading,
          fontWeight: theme.fontWeights.bold,
        }}
      >
        {title}
      </Text>
    </Link>
  );
};

export default AppBarTab;
