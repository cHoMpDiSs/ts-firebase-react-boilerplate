import { Link } from "react-router-dom";
import { useState } from "react";



interface NavBarProps{
    isAuthenticated: boolean;
    logOut: () => void;
    greeting: string,
    setWantsToSignIn:React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar:React.FC<NavBarProps> = (props) => {
    const {isAuthenticated, logOut, setWantsToSignIn, greeting} = props;
  
    return (


              <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Daddies Comics</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                      </a>
                      <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">  </a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                 
                  </ul>
                  {greeting}
                  {isAuthenticated ?  <button onClick={logOut}>Log Out</button> :  <button className="btn btn-outline-success" type="submit" onClick={() => setWantsToSignIn(true)}>log in</button>} 
                   
                </div>
              </div>
            </nav>












        // <div>
        // <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
        //     <div className="bg-dark p-4">
        //         <h5 className="text-body-emphasis h4">Collapsed content</h5>
        //         <span className="text-body-secondary">Toggleable via the navbar brand.</span>
        //     </div>
        // </div>
        //     <nav className="navbar navbar-dark bg-dark">
        //     <div className="container-fluid">
         
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    
        //         <span className="navbar-toggler-icon"></span>


        //         {isAuthenticated ?  <button onClick={logOut}>Log Out</button> : null}


        //         </button>
            
        //     </div>
        //     </nav>
        // </div>
    )
}


export default Navbar;