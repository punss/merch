import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Container from '@material-ui/core/Container'
import InputForm from './InputForm'
import UserData from './UserData'
import './App.css';


function App() {

  const [data, setData] = useState([]);

  function getResponseData(responseData) {
        var response = responseData;
        //  this.setState(responseData)
         console.log(response);
         setData(data => [data, responseData]);
       }

  return (    
    <>
     <AppBar position="static">
   <Toolbar>
     <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
       <MenuIcon />
     </IconButton>
     <Typography variant="h6" className='title'>
       Find User
     </Typography>
     <img src={require('./logo.png')} alt="" className="Logo"/>
   </Toolbar>
 </AppBar>
 <section className="container">
 <Container className="LeftContainer" maxWidth='lg'>
 <h1>Hello</h1>
 <InputForm responseData={getResponseData} />
 </Container>
 <Container className="RightContainer" maxWidth='lg'>
   {/* <UserData data={response} /> */}
     {/* <h1>Collected: {data.Collected}</h1> */}
     <UserData />
 </Container>
 </section>
     </>
  );
}

// class App extends React.Component {

//   changeState() {
//     const [data, useData] = useState([]);
//   }

//   constructor(props) {
//     super(props);
//     this.state = Object
//   }

//   getResponseData = (responseData) => {
//     // var response = responseData;
//     this.setState(responseData)
//     console.log(this.state);
//     this.changeState.useData(this.changeState.data => [...this.changeState.data, responseData])
//   }

//   render() {
//     return(
//       <>
//     <AppBar position="static">
//   <Toolbar>
//     <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
//       <MenuIcon />
//     </IconButton>
//     <Typography variant="h6" className='title'>
//       Find User
//     </Typography>
//     <img src={require('./logo.png')} alt="" className="Logo"/>
//   </Toolbar>
// </AppBar>
// <section className="container">
// <Container className="LeftContainer" maxWidth='lg'>
// <h1>Hello</h1>
// <InputForm responseData={this.getResponseData} />
// </Container>
// <Container className="RightContainer" maxWidth='lg'>
//   {/* <UserData data={response} /> */}
//     <h1>{data['Collected']}</h1>
// </Container>
// </section>
//     </>
//     )
//   }
// }

export default App;
