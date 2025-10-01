import { FlatList, View, Text } from "react-native"
import { useState, useEffect } from "react"


const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=2000'

export default function FlatListFetch(){

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch(API_URL)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false))
    })

    return(
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            
            renderItem={({item}) => (
                <View style={{padding:16}}>
                    <Text numberOfLines={2}>
                        {item.id}:{item.title}
                    </Text>
                </View>
            )}
        />
    )
}