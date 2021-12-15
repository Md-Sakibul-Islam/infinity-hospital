import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/FirebaseInit";

firebaseInitialize();
const useFirebase = () => {
  // -------------- user, error & loading states area START -------------
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading,setIsLoading]= useState(true);
  // -------------- user and error states area END -------------

  // --------------- auth and provider area START -----------
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  // --------------- auth and provider area END -----------

  //--------- google sign function area START --------
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //--------- google sign function area END --------

  // ---------user create using email & password  area START-------
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // ---------user create using email & password  area END-------

  // ---------login user using email & password area START ----------
  const logInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ---------login user using email & password area END ----------

  // -------------user name set function area START---------
  const setProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        setError(error);
      });
  };

    // -------------user name set function area END---------

    //------------- observe area START ---------------
  useEffect(() => {
  
    const unsubscribe = onAuthStateChanged(auth, (user) => {
     
      if (user) {
        setUser(user);
        // ...
      } else {
        setUser({});
      }
      setIsLoading(false)
  
    });
    return unsubscribe;
  }, []);
 //------------- observe area END ---------------

// --------- user LogOut area START ---------
  const logOut = () => {
  setIsLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      }).finally(()=> setIsLoading(false))
   
  };
  // --------- user LogOut area END ---------

  return {
    user,
    setUser,
    error,
    setError,
    signInWithGoogle,
    logOut,
    createNewUser,
    logInUser,
    setProfile,
    isLoading,
    setIsLoading
  };
};

export default useFirebase;
