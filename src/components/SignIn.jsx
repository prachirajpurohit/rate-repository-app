import * as yup from "yup";
import { Formik } from "formik";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import useSignIn from "../hooks/useSignIn";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: "#d73a4a",
    marginBottom: 10,
  },
});

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
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={onSubmit}
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
        <View style={styles.container}>
          <TextInput
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
            placeholder="Username"
            style={styles.input}
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
            style={styles.input}
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <Button onPress={handleSubmit} title="Sign In" />
        </View>
      )}
    </Formik>
  );
};

export default SignIn;
