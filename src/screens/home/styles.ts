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
    marginTop: 20,
    width: '85%',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  helloText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24
  },
  input: {
    marginTop: 10,
    height: 50,
    width: '100%',
    backgroundColor: "#222222",
    borderRadius: 12,
    color: "#fff",
    padding: 10,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 12,
    backgroundColor: "#dd3948",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold'
  }
})