import "@/global.css";
import { Link } from 'expo-router';
import { Pressable, Text, View } from "react-native";


export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" asChild>
        <Pressable className="mt-4 rounded bg-primary p-4">
          <Text className="text-white">Go to Onboarding</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/sign-in" asChild>
        <Pressable className="mt-4 rounded bg-primary p-4">
          <Text className="text-white">Go tt in</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/sign-up" asChild>
        <Pressable className="mt-4 rounded bg-primary p-4">
          <Text className="text-white">Go to Up</Text>
        </Pressable>
      </Link>


      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "claude" },
      }} asChild>
        <Pressable className="mt-4 rounded bg-primary p-4">
          <Text className="text-white">Claude subscription</Text>
        </Pressable>
      </Link>

    </View>
  );
}