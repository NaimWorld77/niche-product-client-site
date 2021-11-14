import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword ,signOut  } from "firebase/auth";



initializeFirebase(); 

const useFirebase =()=>{
    const auth = getAuth();
    const [user,setUser] = useState({});

    const [isLoading,setIsLoading] =useState(true);
    const [authError,setAuthError] = useState('');



    //register user
    const registerUser =(email,password)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError('');          
            })
            .catch((error) => {
                setAuthError(error.message);
            
            })
            .finally(()=> setIsLoading(false));

            }


    //observer
    useEffect(()=>{
       const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return()=>unsubcribe;
          
    },[])


    //email password login
    const loginUser =(email,password)=>{
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
              setAuthError('');          
        })
        .catch((error) => {
          setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }

    //logout
  const logOut = () => {
    setIsLoading(true);
      signOut(auth)
      .then(()=>{

      })
      .catch((error)=>{

      })
      .finally(()=> setIsLoading(false));
  }



    return {
        user,
        registerUser,
        authError,
        logOut,
        loginUser,
        isLoading


    }

}
export default useFirebase;