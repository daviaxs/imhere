import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Participant } from "../../shared/components/participant/Participant";

export default function Home() {
  const [name, setName] = useState('')
  const [participants, setParticipants] = useState<string[]>([])

  function handleAddParticipant(name: string) {
    if (!name) {
      Alert.alert("Erro", "Informe o nome do participante")
      return
    }

    if (participants.includes(name)) {
      Alert.alert("Erro", "Já existe um participante com esse nome.")
      return
    }

    setParticipants([name, ...participants])
    setName('')
  }

  function handleDeleteParticipant({name, index}: {name: string, index: number}) {
    Alert.alert("Remover participante", `Deseja remover o participante "${name}"?`, [
      {
        text: "Cancelar",
        style: "cancel"
      },
      {
        text: "Remover",
        onPress: () => {
          const newParticipants = participants.filter((_, i) => i !== index)
          setParticipants(newParticipants)
        }
      }
    ])
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

        <TouchableOpacity style={styles.button} onPress={() => handleAddParticipant(name)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={styles.participantsContainer}
        renderItem={({item, index}) => (
          <Participant key={item} name={item} deleteParticipant={() => handleDeleteParticipant({name: item, index})} />

        )}
      />
    </View>
  )
}