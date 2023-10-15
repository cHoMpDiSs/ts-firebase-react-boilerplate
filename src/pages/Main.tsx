import LoginCard from "../components/Logincard";


interface MainProps {
   
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
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    signUp: () => void;
    signIn: (email: string, password: string) => void;
    signInWithGoogle: () => void;
    logOut: () => void;
    wantsToSignIn: boolean
    setWantsToSignIn:React.Dispatch<React.SetStateAction<boolean>>;
  }

  
const Main: React.FC<MainProps> = (props) => {

  const {
    email,
    setEmail,
    password,
    logInFail,
    setLogInFail,
    setPassword,
    setFirstName,
    lastName,
    firstName,
    setLastName,
    userSignIn,
    setUserSignIn,
    isAuthenticated,
    setIsAuthenticated,
    wantsToSignIn,
    signInWithGoogle,
    signIn,
    signUp,
 

  } = props;

    return (
        <div className="main">
            {wantsToSignIn === true ? 
                <LoginCard
                    email={email}
                    setEmail={setEmail}
                    logInFail={logInFail}
                    setLogInFail={setLogInFail}
                    password={password}
                    setPassword={setPassword}
                    firstName={firstName}
                    signIn={signIn}
                    signUp={signUp}
                    signInWithGoogle={signInWithGoogle}
                    setFirstName={setFirstName}
                    lastName={lastName}
                    setLastName={setLastName}
                    userSignIn={userSignIn}
                    setUserSignIn={setUserSignIn}
                    setIsAuthenticated={setIsAuthenticated}
                    isAuthenticated={isAuthenticated}
             
            /> : <div className="main"> Main Page</div>
    }
                    </div>
    )
}








export default Main;