import { TextInput, StyleSheet, View } from "react-native";

export default function Inputs(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Digite algo aqui"/>
            <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry={true}/>
            <TextInput style={styles.input} placeholder="Número" keyboardType="number-pad"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: "center",
        padding: 16
    },
    input:{
        width: "100%",
        height:64,
        borderColor:"#ccc",
        borderWidth:1,
        borderRadius:8,
        padding:16,
        backgroundColor:"#fff"
    }
})