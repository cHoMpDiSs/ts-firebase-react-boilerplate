import React from 'react';

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
  isAuthenticated: boolean;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  userSignIn: boolean;
  setUserSignIn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
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
    isAuthenticated,
    signInWithGoogle,
    signIn,
    signUp,


  } = props;



  return (
    <div className="container justify-content-center d-flex align-items-center">
      <div className="d-flex justify-content-center align-items-center login-card">
        {userSignIn === true ? (
          <div className="card p-4 with-shadow w-50">
            <p>Sign Up</p>
            <input className="btn-txt" placeholder="First Name.." onChange={(e) => setFirstName(e.target.value)} />
            <input className="btn-txt" placeholder="Last Name.." onChange={(e) => setLastName(e.target.value)} />
            <input className="btn-txt" placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
            <input className="btn-txt" type="password" placeholder="Password.." onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-outline-primary btn-txt" onClick={() => { signUp(); setUserSignIn(false); }}>Register</button>
            <button className="btn btn-outline-primary btn-txt" onClick={signInWithGoogle}>Sign in with Google</button>
            <p className="mt-2 mb-0">already have an account?</p>
            <button className="btn btn-outline-primary btn-txt" id="myLinkButton" onClick={() => setUserSignIn(false)}>Sign In</button>
          </div>
        ) : (
          <div className="card p-4 with-shadow w-75">
            {isAuthenticated === false ? (
              <div>
                <p>Please sign in.</p>
                {logInFail === true ? <p>Incorrect credentials</p> : null}
                <div className="text-center">
                  <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" placeholder="Password.." onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mt-2">
                  <button className="btn btn-outline-primary mt-2" onClick={(e) => { signIn(email, password) }}>Sign in</button>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
            };  

export default LoginCard;
