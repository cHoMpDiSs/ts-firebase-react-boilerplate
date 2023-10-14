import React from 'react';
import { useState } from 'react';
import { auth , googleProvider} from "./config/firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { Auth}  from './config/auth';
import Navbar from './components/Navbar';
import LoginCard from './components/Logincard';
import Main from './pages/Main';



function App() {
  const [email, setEmail] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("Welcome please sign in");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string| null>("please sign in")
  const [lastName, setLastName] = useState<string>("")
  const [userSignIn, setUserSignIn] = useState<boolean>(true)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [finalAuthentication, setFinalAuthentication] = useState<boolean>(false)
  const [wantsToSignIn, setWantsToSignIn] = useState<boolean>(false)
  const [logInFail, setLogInFail] = useState<boolean>(false)


    console.log(auth?.currentUser?.email);
  
  const signIn = async (email: string,password:string) => {
   try{
    await signInWithEmailAndPassword(auth, email, password);
    setIsAuthenticated(true)
    if (auth.currentUser){
      const fullName: string | null = auth.currentUser.displayName;
      setFirstName(fullName)
      setGreeting('Welcome ' + fullName)
      setFinalAuthentication(true)
      setWantsToSignIn(false)
    }
   } catch (err){
    console.log(err)
    setLogInFail(true)
  }
  }

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });
      setFirstName(`${firstName}`)
      setLastName(`${lastName}`)
      console.log("Sign up successful");
    } catch (err) {
      console.error(err);
    }
  };
  
  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    if (auth.currentUser){
      const fullName: string | null = auth.currentUser.displayName
      setFirstName(fullName)
      setGreeting("Welcome " + fullName)
      setUserSignIn(false)
      setIsAuthenticated(true)
      setFinalAuthentication(true)
      setWantsToSignIn(false)
    }
    } catch (err){
      console.error(err);
    }
  };
   const logOut = async () => {
    try {
    await signOut(auth);
    console.log("sign out successful")
    setGreeting("you have been logged out")
    setIsAuthenticated(false)
    } catch (err){
      console.error(err);
    }
  };
  console.log(firstName, "FIRST")

  return (
    <div>
      <Navbar
      logOut={logOut}
      greeting={greeting}
      isAuthenticated={isAuthenticated}
      setWantsToSignIn={setWantsToSignIn}
      />
      <Main
      
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      firstName={firstName}
      signIn={signIn}
      logInFail={logInFail}
      setLogInFail={setLogInFail}
      logOut={logOut}
      signUp={signUp}
      signInWithGoogle={signInWithGoogle}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      userSignIn={userSignIn}
      setUserSignIn={setUserSignIn}
      isAuthenticated={isAuthenticated}
      setIsAuthenticated={setIsAuthenticated}
      finalAuthentication={finalAuthentication}
      setFinalAuthentication={setFinalAuthentication}
      wantsToSignIn={wantsToSignIn}
      setWantsToSignIn={setWantsToSignIn}
      
      
      
      
      
      
      />
      
    </div>
  );
}

export default App;
