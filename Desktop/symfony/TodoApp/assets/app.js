import React from 'react';
import ReactDOM from 'react-dom';
import { LoginSignup } from './Components/LoginSignUp/LoginSignup';
import './styles/app.css';

function App() {
  return (
    <div>
      <LoginSignup />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));