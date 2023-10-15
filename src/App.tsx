
import { useState } from 'react';
import { auth , googleProvider} from "./config/firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Navbar from './components/Navbar';
import Main from './pages/Main';



function App() {
  const [email, setEmail] = useState<string>(""); // sets email for auth or new account
  const [greeting, setGreeting] = useState<string | null>(""); // changes greeting to user name on auth
  const [password, setPassword] = useState<string>(""); // sets pw for auth or new account
  const [firstName, setFirstName] = useState<string| null>("please sign in") //frst name state
  const [lastName, setLastName] = useState<string>("") // last name state
  const [userSignIn, setUserSignIn] = useState<boolean>(true) // email and password for log in sets to false with google auth
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false) // authenicates user state and changes UI 
  const [wantsToSignIn, setWantsToSignIn] = useState<boolean>(false) // if user wants to sign in with email + password 
  const [logInFail, setLogInFail] = useState<boolean>(false) // incorrect credentials 


    console.log(auth?.currentUser?.email);
  


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
  
  const signIn = async (email: string,password:string) => {
    try{
     await signInWithEmailAndPassword(auth, email, password);
     
     if (auth.currentUser){
       const fullName: string | null = auth.currentUser.displayName;
       setFirstName(fullName)
       setGreeting(fullName)
       setIsAuthenticated(true)
       setWantsToSignIn(false)
     }
    } catch (err){
     console.log(err)
     setLogInFail(true)
   }
   }

  const signInWithGoogle = async () => {
    try {
    await signInWithPopup(auth,googleProvider);
    if (auth.currentUser){
      const fullName: string | null = auth.currentUser.displayName 
      setFirstName(fullName)
      setGreeting(fullName)
      setUserSignIn(false)
      setIsAuthenticated(true)
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
    setGreeting("")
    setUserSignIn(true)
    setIsAuthenticated(false)
    setWantsToSignIn(false)
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
      wantsToSignIn={wantsToSignIn}
      setWantsToSignIn={setWantsToSignIn}
      
      />
      
    </div>
  );
}

export default App;
