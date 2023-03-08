import { Button } from "@mui/material";
import {
  createUser,
  writeDataToDatabase,
  getDataFromDatabase,
  loginUser,
  getCurrentUser,
  signOutUser,
} from "../config/Firebase/firebaseMethods";

function Home() {
  //CHECKING FUNCTIONS
  const sendData = () => {
    const obj = {
      name: "zunair",
      password: "123123",
      comment: "loremmmmmasldmqwoep2o3 0q-we-kalsac xlcm ",
    };
    writeDataToDatabase(obj, "testing");
  };
  const getData = async () => {
    const data: any = await getDataFromDatabase();
    console.log(data);
  };

  const login = () => {
    loginUser({
      email: "zunair123@gmail.com",
      password: "123456",
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err.message));
  };

  const getUser = async () => {
    try {
      const user = await getCurrentUser();
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  };

  const signout = () => {
    signOutUser()
      .then(() => console.log(`SIGNED OUT SUCCESSFULLY`))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={sendData}>SEND DATA</Button>
      <Button onClick={getData}>Get DATA</Button>
      <Button onClick={login}>LoginCHECKING</Button>
      <Button onClick={getUser}>GET CURRENT USER</Button>
      <Button onClick={signout}>LOG OUT CURRENT USER</Button>
    </div>
  );
}

export default Home;
