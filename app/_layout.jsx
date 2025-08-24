import { Stack } from "expo-router";
import GlobalStyles from "../src/common/GlobalStyles";

const RootLayout = () => {
  const isLoggedIn = false;

  return (
    <GlobalStyles>
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="modal" />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen options={{ headerShown: false }} name="login" />
          <Stack.Screen name="register" />
        </Stack.Protected>
      </Stack>
    </GlobalStyles>
  );
};

export default RootLayout;
