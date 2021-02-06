import React from 'react'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
import Form from './components/Form'


class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      message : 'message from app root'
    }
  }
  render(){
    console.log(this.state)
    return (
      <React.Fragment>
        <Navbar/>
        <Todo/>
        <Form/>
      </React.Fragment>
    )
  }
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

    // ---------------- ini standar normal ---------------
    // return React.createElement(
    //   'h1',
    //   null,
    //   "Hello"
    // )  
    // ================= ini JSX ========================
    //  <h1>Hello React</h1>
    // <h3 style={{
    //   color: "red",
    //   fontSize: "20px"
    // }}> Subtitle
    // </h3>
    //
    //