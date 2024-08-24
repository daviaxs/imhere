import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#222222',
    borderRadius: 12,
    height: 50,
    width: '100%',
    overflow: 'hidden',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,

    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: "#dd3948",
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold',
  }
})