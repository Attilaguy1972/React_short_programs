import React from "react";
import ReactDOM from "react-dom";

class Music extends React.Component{
constructor(props){
  super(props);
  this.state = {
  band: "Depeche Mode",
  song:"Better Days",
composer:" composer Szűcs Attila ",
  year : 2006
  };
  }

   render(){
 return(
  <div>
  <h1>My {this.state.band}</h1>
  <p>
    The song {this.state.song}
    {this.state.composer}
    from {this.state.year}
  </p>
</div>

 );
 }
 }


 ReactDOM.render(<Music />, document.getElementById('root'));





  
