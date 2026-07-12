import * as yup from "yup";
import { Formik } from "formik";
import { View, TextInput, Button, Text } from "react-native";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Minimum 3 characters are required")
    .required("Username is required"),

  password: yup
    .string()
    .min(5, "Minimum 5 characters are required")
    .required("Password is required"),
});

const SignIn = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={validationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View>
          <TextInput
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
            placeholder="Username"
          />
          {touched.username && errors.username && (
            <Text style={{ color: "#d73a4a" }}>{errors.username}</Text>
          )}

          <TextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <Text style={{ color: "#d73a4a" }}>{errors.password}</Text>
          )}

          <Button onPress={handleSubmit} title="Sign In" />
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
