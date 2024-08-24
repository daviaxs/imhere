import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface ParticipantProps {
  name: string;
  deleteParticipant: () => void;
}

export function Participant({name, deleteParticipant}: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={deleteParticipant}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
    </View>
  )
}