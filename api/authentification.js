// Available users
const users = [
    { mail: "test@test.fr", password: "test", nickName: "test" },
    { mail: "admin@test.fr", password: "admin", nickName: "admin" },
    { mail: "", password: "", nickName: "" },
  ];
  
  // Return null or the authenticated user if login is successful
  export default authenticateUser = (mail, password) => {
    return (
      // Search for the first user matching login and password
      users.find((u) => u.mail === mail && u.password === password) || null
    );
  };