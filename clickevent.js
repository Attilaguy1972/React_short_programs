
import React from "react";
import ReactDOM from "react-dom";

class Football extends React.Component{
shoot = (a,b) =>{
alert(b.type);
/*
'b' represents the React event that triggered the function,
in this case the 'click' event
*/
}
 render(){
return(
<button onclick={this.shoot.bind(this, "Goal")}>Take the shoot</button>

);
 }

}
ReactDOM.render(<Football/>,document.getElementById('root'));
