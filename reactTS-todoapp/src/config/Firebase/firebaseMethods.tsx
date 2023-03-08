import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
  DataSnapshot,
} from "firebase/database";
import app from "./firebaseConfig";

const database = getDatabase(app); //initializing DB
const auth = getAuth(app); //initializing auth

//===========interface start===========//

interface userObj {
  //interface for createUser function
  email: string;
  password: string;
  username: string;
  uid?: string;
}

interface data {
  //database object interface
  [key: string]: any;
}
//===========interface end============//

//===============DataBase Functions===============//

const writeDataToDatabase = (data: data, nodeName: string, id?: string) => {
  //id is optional if we don't pass id then it'll automatically generate id with the help of push method from firebase //
  const reference = ref(database, `${nodeName}/${id || ""}`);
  if (!id) {
    const key = push(reference).key;
    data.id = key;
    const newRef = ref(database, `${nodeName}/${data.id}`);
    return set(newRef, data);
  }

  return set(reference, data);
};

const getDataFromDatabase = (nodeName: string, id?: string) => {
  //by default it'll get all the data in the form of object if want single data then pass id(2nd argument) //

  return new Promise<void>((resolve, reject) => {
    const reference = ref(database, `${nodeName}/${id || ""}`);

    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        resolve(data);
      } else {
        reject("DATA NOT FOUND");
      }
    });
  });
};

//============Authentication Functions==========//
const createUser = (userObj: userObj) => {
  return new Promise<string>((resolve, reject) => {
    createUserWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const { uid } = user;
        userObj.uid = uid;
        writeDataToDatabase(userObj, "users", uid);
        resolve("Successfully Created User");
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export { createUser, writeDataToDatabase, getDataFromDatabase };
