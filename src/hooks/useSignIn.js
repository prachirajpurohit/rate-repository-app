import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const authenticate = gql`
  mutation authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

const useSignIn = () => {
  const [mutate, result] = useMutation(authenticate);
  const signIn = async ({ username, password }) => {
    return await mutate({
      variables: {
        credentials: { username, password },
      },
    });
  };

  return [signIn, result];
};

export default useSignIn;
