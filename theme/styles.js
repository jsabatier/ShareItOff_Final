import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
    justifyContent: "center",
  },
  auth: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    margin: 30,
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  description: {
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;