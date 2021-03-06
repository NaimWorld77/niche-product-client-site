import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword,updateProfile ,signOut  } from "firebase/auth";



initializeFirebase(); 

const useFirebase =()=>{
    const auth = getAuth();
    const [user,setUser] = useState({});

    const [isLoading,setIsLoading] =useState(true);
    const [authError,setAuthError] = useState('');
    const [admin,setAdmin] = useState(false);



    //register user
    const registerUser =(email,password,name,history)=>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setAuthError(''); 
          
             setUser(result.user)
              const newUser = {email,displayName:name};
              setUser(newUser);
              //save user 
              saveUser(email,name)
              //send name to firebase after account creaton
              updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
               
              }).catch((error) => {
                
              });

          history.replace('/') 

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
          
    },[auth]);


    useEffect(()=>{
      fetch(`https://shrouded-taiga-61011.herokuapp.com/user/${user.email}`)
      .then(res=>res.json())
      .then(data=>{
        setAdmin(data.admin)
      })

    },[user.email])


    //email password login
    const loginUser =(email,password,location,history)=>{
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const destination = location?.state?.from ||'/';
          history.replace(destination);
          setUser(result.user)
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
        setUser({})
      })
      .catch((error)=>{

      })
      .finally(()=> setIsLoading(false));
  }
  //saveing userdata on the database
  const saveUser = (email,displayName)=>{

            const user = {email,displayName};
            fetch('https://shrouded-taiga-61011.herokuapp.com/user',{

              method:'POST',
              headers:{
                      'content-type':'application/json'         
              },
              body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
              // console.log(data);
      })
  }



    return {
        user,
        admin,
        registerUser,
        authError,
        logOut,
        loginUser,
        isLoading


    }

}
export default useFirebase;