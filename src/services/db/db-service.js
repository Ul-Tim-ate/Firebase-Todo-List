import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import authService from "../auth/auth-service";

export class DbService {
  constructor(db) {
    this.db = db;
  }
  getAllUserTodos = async () => {
    const user = authService.getUserAuth();
    const data = await getDocs(collection(this.db, "todos"));
    let allTodos = [];
    data.forEach((doc) => {
      if (user.currentUser.uid === doc.data().userId) {
        const { name } = doc.data();
        const newElement = { id: doc.id, name };
        allTodos = [...allTodos, newElement];
      }
    });
    return allTodos;
  };
  deleteUserTodo = (todoUID) => {
    deleteDoc(doc(this.db, "todos", todoUID));
  };

  addTodo = async (name, description, finishedDate) => {
    try {
      const docRef = await addDoc(collection(this.db, "todos"), {
        name: name,
        description: description,
        finishedDate: finishedDate.format("YYYY-MM-DD"),
        userId: authService.getUserAuth().currentUser.uid,
      });
      return docRef;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  getTodoDetails = async (selectedTodo) => {
    const docRef = doc(this.db, "todos", selectedTodo);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  };
}
