import { initializeApp } from "firebase/app";
import toast from 'react-hot-toast';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAzH_WOVVDxfhTKQXig1N5_9emSq7spivs",
  authDomain: "clone-dda49.firebaseapp.com",
  projectId: "clone-dda49",
  storageBucket: "clone-dda49.appspot.com",
  messagingSenderId: "6138768080",
  appId: "1:6138768080:web:3ba04ae63b146f48178cd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app) 

export const logOut = async () => {
  try {
      await signOut(auth)
      toast.success("başarıyla çıkış yapıldı")
      return true
  } catch (error) {
      toast.error(error.message)
  }
}

export const register = async (email,password) => {

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email,password)
      console.log(user)
      toast.success("başarıyla kayıt olundu")
      return user
    } catch (error) {
        toast.error(error.message)
        
    }
  }
   
  export const login = async (email, password) => {
      try {
          const { user } = await signInWithEmailAndPassword(auth, email, password)
          toast.success("başarıyla giriş yapıldı")
          return user
      } catch (error) {
          toast.error(error.message)
      }
  }