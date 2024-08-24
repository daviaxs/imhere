import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  formContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    gap: 10,
  },
  participantsContainer: {
    width: '100%',
    marginVertical: 30
  },
  helloText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24
  },
  input: {
    height: 50,
    flex: 1,
    backgroundColor: "#222222",
    borderRadius: 12,
    color: "#fff",
    padding: 10,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 12,
    backgroundColor: "#651090",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold'
  }
})