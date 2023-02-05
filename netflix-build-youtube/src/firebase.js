import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBRMa2zoL_FtYWRzC4JZ_iCFYYyduNvX_U",
    authDomain: "netflix-clone-7fce4.firebaseapp.com",
    projectId: "netflix-clone-7fce4",
    storageBucket: "netflix-clone-7fce4.appspot.com",
    messagingSenderId: "55746926003",
    appId: "1:55746926003:web:279223cebdec7e2d10e7c6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebaseApp.firestore();
  

  export {auth};
  export default db;