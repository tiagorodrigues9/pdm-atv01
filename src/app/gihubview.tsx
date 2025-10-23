import { View } from "react-native";
import { WebView } from "react-native-webview";

export default function GitHubView() {
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: "https://github.com/tiagorodrigues9" }} />
    </View>
  );
}
