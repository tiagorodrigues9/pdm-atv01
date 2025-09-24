import { Image } from "expo-image";
import { View, Text, Button, Alert, ScrollView} from "react-native";

export default function Index(){
    return(
        <ScrollView>
            <View style={{flex:1, justifyContent:"center", padding:32, gap:16}}>
                <Image source={"https://github.com/tiagorodrigues9.png"} style={{width:100, height:100, borderRadius:90}}/>
            
                <Text style={{fontSize:64}}>
                    Olá mundo
                </Text>
                <Button title="Clique aqui" onPress={ () => Alert.alert("Teste")}/>

                <View style={{borderWidth:1, padding:16, borderRadius:8, gap:8}}>
                    <Text style={{fontSize:32}}>
                        Primeiro Card
                    </Text>
                    <Text>
                        Texto card
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}