import { db } from "../FirebaseConfig";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollections = collection(db, "users");

class UserData {
  addUsers = (newUser) => {
    return addDoc(userCollections, newUser);
  };

  getAllBooks = () => {
    return getDocs(userCollections);
  };
}

export default new UserData();
