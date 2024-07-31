import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { RootStackNavigator } from "./navigation/RootStackNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <RootStackNavigator />
      </QueryClientProvider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
