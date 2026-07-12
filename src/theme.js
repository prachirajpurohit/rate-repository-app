import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: Platform.select({
    ios: "Arial",
    android: "Roboto",
    default: "System",
  }),
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  appBar: {
    backgroundColor: "#24292e",
    textColor: "#ffffff",
  },
};

export default theme;
