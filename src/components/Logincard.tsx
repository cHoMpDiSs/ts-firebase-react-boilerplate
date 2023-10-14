import React, { useState } from 'react';

interface LoginCardProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  logInFail: boolean,
  setLogInFail:React.Dispatch<React.SetStateAction<boolean>>,
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  firstName: string | null;
  setFirstName: React.Dispatch<React.SetStateAction<string | null>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  userSignIn: boolean;
  setUserSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  finalAuthentication: boolean;
  signUp: () => void;
  signIn: (email: string, password: string) => void;
  signInWithGoogle: () => void;

}


const LoginCard: React.FC<LoginCardProps> = (props) => {

  const {
    email,
    setEmail,
    password,
    setPassword,
    logInFail,
    setFirstName,
    setLastName,
    userSignIn,
    setUserSignIn,
    finalAuthentication,
    signInWithGoogle,
    signIn,
    signUp,


  } = props;



  return (
    <div className="container justify-content-center d-flex align-items-center">
            <div className="d-flex justify-content-center align-items-center login-card" >
            {userSignIn === true ?
            <div className="card p-4">
              <p>Sign Up</p>
              <input placeholder="First Name.." onChange={(e) => setFirstName(e.target.value)} />
              <input placeholder="Last Name.." onChange={(e) => setLastName(e.target.value)} />
              <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
              <input type="password" placeholder="Password.." onChange={(e) => setPassword(e.target.value)} />
              <button onClick={() => { signUp(); setUserSignIn(false); }}>Register</button>
              <button onClick={signInWithGoogle}>Sign in with Google</button>
              <p>already have an account?</p>
              <button className="button-like-link" id="myLinkButton" onClick={(e) => setUserSignIn(false)}>sign in</button>
 
              </div>
            
            : null}

            <div className="text-center">
              
            </div>
         
              {userSignIn === false ?
              <div className="card p-4">
            
              {finalAuthentication === false?
              <div>
                <p>Please sign in.</p>

                {logInFail  === true ? <p>Incorrect credentials</p> : null}

            <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password.." onChange={(e) => setPassword(e.target.value)} />
            
            <button onClick={(e) => {signIn(email,password)}}>Sign in</button>
          </div>
                         :null }            </div>
            : null}
            </div>
            </div>
  );
};

export default LoginCard;
