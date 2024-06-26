import React, { useState } from "react";
import { View, Text, TextInput,Button} from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [message, setMessage] = useState("preencha o peso e altura");
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular ")

     function imcCalcular(){
        return setImc((weight/(height*height)).toFixed(2))
     }
     function validationImc(){
        if(weight != null && height != null){
            imcCalcular()
            setHeight(null)
            setWeight(null)
            setMessage("seu IMC é = ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessage("Preencha o peso e altura ")
     }

    return (
        <View>

            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex.1.75"
                KeyboardType="numeric"
                />
                <Text>Peso</Text>
                <TextInput
                placeholder="75.865"
                keyboardType="numeric"
                />


                <Button
                onPress={() => validationImc()}
                 title={textButton}
                 color="#61dafb"
                
                />
                
           </View>
           <ResultImc messageResultImc={message} ResultImc={imc}/>
        </View>
    );
}