import { Stack } from "expo-router";
import GlobalStyles from "../src/common/GlobalStyles";

const RootLayout = () => {
  const isLoggedIn = true; // Por enquanto, sem autenticação

  return (
    <GlobalStyles>
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
          <Stack.Screen options={{ headerShown: false }} name="modal" />
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
