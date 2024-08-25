import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Participant } from "../../shared/components/participant/Participant";

export default function Home() {
  const [name, setName] = useState('')
  const [participants, setParticipants] = useState<string[]>([])

  function handleAddParticipant(newParticipantName: string) {
    if (!newParticipantName) {
      Alert.alert("Erro", "Informe o nome do participante.")
      return
    }

    if (participants.includes(newParticipantName)) {
      Alert.alert("Erro", "Já existe um participante com esse nome.")
      return
    }

    setParticipants([newParticipantName, ...participants])
    setName('')
  }

  function handleDeleteParticipant({participantName, index}: {participantName: string, index: number}) {
    Alert.alert("Remover participante", `Deseja remover o participante "${participantName}"?`, [
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
        ListEmptyComponent={() => (
          <Text style={{color: '#fff', textAlign: 'center'}}>Nenhum participante cadastrado</Text>
        )}
        renderItem={({item, index}) => (
          <Participant key={item} name={item} deleteParticipant={() => handleDeleteParticipant({participantName: item, index})} />

        )}
      />
    </View>
  )
}