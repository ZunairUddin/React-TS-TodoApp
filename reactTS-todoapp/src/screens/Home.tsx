import { Button } from "@mui/material";
import {
  createUser,
  writeDataToDatabase,
  getDataFromDatabase,
} from "../config/Firebase/firebaseMethods";

function Home() {
  const sendData = () => {
    // const obj = {
    //   name: "zunair",
    //   password: "123123",
    //   comment: "loremmmmmasldmqwoep2o3 0q-we-kalsac xlcm ",
    // };
    // writeDataToDatabase(obj, "testing", "TestingWithID");
    createUser({
      email: "zunair123@gmail.com",
      password: "123456",
      username: "zunair",
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const getData = async () => {
    const data = await getDataFromDatabase("users");
    console.log(data);
  };
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={sendData}>SEND DATA</Button>
      <Button onClick={getData}>Get DATA</Button>
    </div>
  );
}

export default Home;
