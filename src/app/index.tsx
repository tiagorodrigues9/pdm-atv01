import { Image } from "expo-image";
import { View, Text, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const navigation: any = useNavigation(); // ✅ sem tipagem complexa

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: "center", padding: 32, gap: 16 }}>
        <Image
          source={{ uri: "https://github.com/tiagorodrigues9.png" }}
          style={{ width: 100, height: 100, borderRadius: 90 }}
        />

        <Text style={{ fontSize: 64 }}>Tiago de Lara Rodrigues</Text>

        <Button
          title="Abrir GitHub"
          onPress={() => navigation.navigate("githubview")}
        />
      </View>
    </ScrollView>
  );
}
