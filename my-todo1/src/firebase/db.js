import firebase from 'firebase/app'; // 파이어베이스 기능 불러오기
import 'firebase/firestore'; // 파이어베이스의 파이어스토어 기능 불러오기

const firebaseConfig = {
    apiKey: "AIzaSyDeyDHJRKaIT6u1FXTIhKdCGfOh4kROifw",
    authDomain: "my-todo1-de2f0.firebaseapp.com",
    projectId: "my-todo1-de2f0",
    storageBucket: "my-todo1-de2f0.appspot.com",
    messagingSenderId: "278005481356",
    appId: "1:278005481356:web:3a9bc650efbf7d19f0a0a9"
  };

export const db = firebase.initializeApp(firebaseConfig).firestore();
  