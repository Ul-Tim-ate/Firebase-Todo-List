import { listAll, ref, uploadBytes } from "firebase/storage";
import authService from "../auth/auth-service.js";

export class StorageService {
  constructor(storage) {
    this.storage = storage;
  }
  uploadFiles = (files, todoId) => {
    Array.from(files).forEach((file) => {
      const fileName = file.name;
      const userId = authService.getUserAuth().currentUser.uid;
      const path = userId + "/" + todoId + "/" + fileName;
      const storageRef = ref(this.storage, path);

      uploadBytes(storageRef, file).then((snapshot) => {
        console.log(snapshot);
        console.log("download");
      });
    });
  };

  getTodoListFiles = async (selectedTodo) => {
    const listRef = ref(
      this.storage,
      `${authService.getUserAuth().currentUser.uid}/${selectedTodo}`
    );
    const files = [];
    const res = await listAll(listRef);
    res.items.forEach((itemRef) => {
      files.push(itemRef);
    });
    return files;
  };
}
