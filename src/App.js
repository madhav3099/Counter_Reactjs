import React ,{Component} from 'react';

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        count: 0
    }
  }

calculate(c){
    var count1 = this.state.count
    if (c === "+"){
       count1 += 1
    }else{
      count1 -=1
    }
  this.setState({count: count1})
   
}
  

render(){
  return (
    
    <div className="s1">
      <h1>Counter</h1>
     <div className="s"><p>{this.state.count}</p></div>
     <br></br>
     <button className="btn1" onClick = {() => this.calculate("+")}>+</button>
     <button className="btn1" onClick = {() => this.calculate("-")}>-</button>



    </div>

    
  );
}

}


export default App;
