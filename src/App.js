import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AuthContext from './contexts/AuthContext'


import { authentication } from './firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import './App.css';
import Gallery from './components/Gallery';
import LogIn from './components/LogIn'


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(authentication, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser.email);
    })
  }, [])
  

  const authInfo = {
    username: user?.email
  }


  return (
    <div className="App">
      <AuthContext.Provider value={authInfo}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LogIn} />
          <Route path="/gallery" exact component={Gallery} />
        </Switch>
      </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;