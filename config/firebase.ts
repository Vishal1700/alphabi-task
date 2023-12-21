import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAXFTWxXXnlp3nnUvNq7vQr1EcCyLncX-8",
  authDomain: "alphabi-assignment-1403f.firebaseapp.com",
  projectId: "alphabi-assignment-1403f",
  storageBucket: "alphabi-assignment-1403f.appspot.com",
  messagingSenderId: "555796458853",
  appId: "1:555796458853:web:b2cf102ee26a567929458c",
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
