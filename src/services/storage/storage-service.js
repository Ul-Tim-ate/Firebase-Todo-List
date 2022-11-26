import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";
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

      uploadBytes(storageRef, file);
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
  downloadFile = (path) => {
    getDownloadURL(ref(this.storage, path)).then((url) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        // const blob = xhr.response;
        // файл скачивается, в preview видно, что это тот файл
        // a с атрибутом download не работает, наверное потому что длинная ссылка
      };
      xhr.open("GET", url);
      xhr.send();
    });
  };
  deleteFile = (todoUID, fileName) => {
    const path =
      authService.getUserAuth().currentUser.uid +
      "/" +
      todoUID +
      "/" +
      fileName;
    const desertRef = ref(this.storage, path);
    deleteObject(desertRef);
  };
}
