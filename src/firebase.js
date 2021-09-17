import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBSL7DxQPU4jB5UkfN29PjWz6IX1r1QlX0",
  authDomain: "payroll-hrm-a0643.firebaseapp.com",
  databaseURL: "https://payroll-hrm-a0643-default-rtdb.firebaseio.com",
  projectId: "payroll-hrm-a0643",
  storageBucket: "payroll-hrm-a0643.appspot.com",
  messagingSenderId: "796952119354",
  appId: "1:796952119354:web:26a3fafa1d45aecee4cd03"
};

firebase.initializeApp(firebaseConfig)

export default firebase;