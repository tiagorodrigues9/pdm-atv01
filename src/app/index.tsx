import { Image } from "expo-image";
import { View, Text, Button, Alert, ScrollView} from "react-native";
import Card from "../components/Card";

export default function Index(){
    return(
        <ScrollView>
            <View style={{flex:1, justifyContent:"center", padding:32, gap:16}}>
                <Image source={"https://github.com/tiagorodrigues9.png"} style={{width:100, height:100, borderRadius:90}}/>
            
                <Text style={{fontSize:64}}>
                    Olá mundo
                </Text>
                <Button title="Clique aqui" onPress={ () => Alert.alert("Teste")}/>

                <Card title="Primeiro Card" body="Corpo do Card" href={"/buttons"}></Card>
                <Card title="Flatlist Fetch" body="Flatlist Exemplo" href={"/flatlist-fetch"}></Card>
                <Card title="Flashlist" body="Flatlist Exemplo" href={"/flashlist"}></Card>
                <Card title="inputs" body="Inputs" href={"/inputs"}></Card>
            </View>
        </ScrollView>
    )
}