import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Participant } from "../../shared/components/participant/Participant";

export default function Home() {
  const [name, setName] = useState('')
  const [participants, setParticipants] = useState<string[]>([])

  function handleAddParticipant() {
    setParticipants([name, ...participants])
    setName('')
  }

  function handleDeleteParticipant(index: number) {
    const newParticipants = participants.filter((_, i) => i !== index)
    setParticipants(newParticipants)
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
        {participants.map((participants, index) => (
          <Participant key={index} name={participants} deleteParticipant={() => handleDeleteParticipant(index)} />
        ))}
      </View>
    </View>
  )
}