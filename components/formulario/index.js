import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Formulario() {
    return(
        <View>
            <Text>Novo Componente</Text>
        </View>
    ) 

    /*const [cep, onChangeCep] = useState('')

    const [cidade, onChangeCidade] = useState('')

    const handleConsultar = () => {

        const url = "https://viacep.com.br/ws/" + cep + "/json/"
        fetch(url,{
            method: 'GET', 
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            response.json().then(function(data) {
                onChangeCidade(data['localidade'])
            })
        })
    }*/
 }