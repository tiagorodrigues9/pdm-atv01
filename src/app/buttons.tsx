import { Button, View, StyleSheet, TouchableOpacity, Text, Pressable} from "react-native";

export default function Buttons(){
    return(
        <View style={styles.container}>
            <Button title="Botão Padrão"/>

        {/* Touchable Opacity */}
        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text>Touchable Opacity</Text>
        </TouchableOpacity>

        {/*Pressable - maior copntrole e funcionalidades */}
        <Pressable onPress={() => console.log("Clicou no botão")}>

        </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        padding:32,
        gap:16,
        backgroundColor:"#f0f0f0"
    },
     button:{
        backgroundColor:"#1d1d1d",
        alignItems: "center",
        borderRadius:8
     },
     text:{
        color:"#dfdfdf",
        fontSize:16,
        fontWeight:'bold'
     },
     backLink:{
        textAlign:'center',
        color:'#333',
        marginTop: 16
     }
})