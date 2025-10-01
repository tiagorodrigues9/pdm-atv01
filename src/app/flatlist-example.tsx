import { FlatList, View } from "react-native"
import Card from '../components/Card'

const LOCAL_DATA =[
    {
        id:1, title:"Item 1", body:"Descrição do item 1"
    },
    {
        id:1, title:"Item 2", body:"Descrição do item 2"
    },
    {
        id:1, title:"Item 3", body:"Descrição do item 3"
    },
    {
        id:1, title:"Item 4", body:"Descrição do item 4"
    },
    {
        id:1, title:"Item 5", body:"Descrição do item 5"
    },
    {
        id:1, title:"Item 6", body:"Descrição do item 6"
    },
    {
        id:1, title:"Item 7", body:"Descrição do item 7"
    },
    {
        id:1, title:"Item 8", body:"Descrição do item 8"
    },
    {
        id:1, title:"Item 9", body:"Descrição do item 9"
    },
    {
        id:1, title:"Item 10", body:"Descrição do item 10"
    }
     
]

export default function FlatListExample(){
    return(
        <FlatList
            data={LOCAL_DATA}
            keyExtractor={(item) => item.id.toString()}
            
            renderItem={({item}) => (
                <View style={{padding:16}}>
                    <Card title={item.title} body={item.body} href={""}/>
                </View>
            )}
        />
    )
}