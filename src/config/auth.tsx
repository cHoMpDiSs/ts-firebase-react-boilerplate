
import { auth , googleProvider} from "./firebase";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";

export const Auth: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [greeting, setGreeting] = useState<string>("Welcome please sign in");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string| null>("please sign in")
  const [lastName, setLastName] = useState<string>("")
  const [userSignIn, setUserSignIn] = useState<boolean>(true)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    console.log(auth?.currentUser?.email);
  
  const signIn = async (email: string,password:string) => {
   try{
    await signInWithEmailAndPassword(auth, email, password);
    setIsAuthenticated(true)
    if (auth.currentUser){
      const fullName: string | null = auth.currentUser.displayName;
      setFirstName(fullName)
      setGreeting('Welcome ' + fullName)
      
    }
    

   } catch (err){
    console.log(err)
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


          <div className="container">
            <div className="">
            <h1>{greeting}</h1>
     
         
      
            </div>
            {userSignIn == true ?
            <div className="card">
              <p>Sign Up</p>
              <input placeholder="First Name.." onChange={(e) => setFirstName(e.target.value)} />
              <input placeholder="Last Name.." onChange={(e) => setLastName(e.target.value)} />
              <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password.." onChange={(e) => setPassword(e.target.value)} />
              <button onClick={signUp}>Register</button>
       
              <button onClick={signInWithGoogle}>Sign in with Google</button>
              <button className="button-like-link" id="myLinkButton" onClick={(e) => setUserSignIn(false)}>sign in</button>
              {isAuthenticated ?  <button onClick={logOut}>Log Out</button> : null}
              </div>
            
            : null}

            <div className="text-center">
              
            </div>
         
              {userSignIn === false ?
              <div className="card">
            

            <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password.." onChange={(e) => setPassword(e.target.value)} />
            <button onClick={(e) => {signIn(email,password)}}>Sign in</button>
          </div>
            : null}
            </div>
  
  );
};