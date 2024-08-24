import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Participant } from "../../shared/components/participant/Participant";

export default function Home() {
  const [name, setName] = useState('')

  function handleAddParticipant() {
    console.log(`Adicionado o participante: ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Nome do evento</Text>

      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Nome do participante" 
          placeholderTextColor="#828282"
          value={name}
          onChangeText={setName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.participantsContainer}>
        <Participant />
      </View>
    </View>
  )
}