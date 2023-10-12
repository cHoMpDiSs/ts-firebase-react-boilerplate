
import { auth , googleProvider} from "./firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";

export const Auth: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("Welcome please sign in");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string| null>("please sign in")
  const [lastName, setLastName] = useState<string>("")
  const [userSignIn, setUsetSignIn] = useState<boolean>(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    console.log(auth?.currentUser?.email);
  
  
  const signIn = async () => {
   try{
    await signInWithEmailAndPassword(auth, email, password);
    setIsAuthenticated(true)
   } catch (err){
    console.log(err)
  }
  }

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // After user creation, update the profile information
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });
  
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
      setIsAuthenticated(true)
    }
    } catch (err){
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
    await signOut(auth);
    console.log("sign out successful")
    setGreeting("you have been successfully logged out")
    setIsAuthenticated(false)
    } catch (err){
      console.error(err);
    }
  };


  console.log(firstName, "FIRST")
  return (

  
          <div className="card">
            <div className="card-body">
            <h1>{greeting}</h1>
            {userSignIn ?
            <div><button onClick={(e) => setUsetSignIn(false)}>Sign in</button>
      
            </div>
            : <button onClick={(e) => setUsetSignIn(true)}>Sign in</button>}
              {/* <input placeholder="First Name.." onChange={(e) => setFirstName(e.target.value)} />
              <input placeholder="Last Name.." onChange={(e) => setLastName(e.target.value)} />
              <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password.." onChange={(e) => setPassword(e.target.value)} /> */}
              
              <button onClick={signUp}>Sign up</button>
       
              <button onClick={signInWithGoogle}>Sign in with Google</button>
              {isAuthenticated ?  <button onClick={logOut}>Log Out</button> : null}
             
            </div>
    </div>
  );
};