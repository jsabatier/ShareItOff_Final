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
    margin: 10,
  },
  screen: {
    flex: 1,
    margin: 30,
  },
  containerItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    padding:5,
    marginBottom: 10,
  },
  padding: {
    margin: 5,
    padding:5,
    marginLeft:0,
    paddingLeft:0,
  },
  padding2: {
    margin: 5,
    padding:5,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  tinytext: {
    marginLeft: 10,
    fontSize: 12,
  },
  titre: {
    marginLeft: 18,
    fontWeight: "700",
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
  songContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "white",
    borderRadius: 30,
    padding: 5,
    borderBottomWidth: 1,
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  containerAuth: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e41b23",
  },
  formImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signInButton: {
    backgroundColor: "#696969",
  },
  loginText: {
    color: "white",
  },
});

export default styles;