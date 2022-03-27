import React, { Component } from 'react'

// be careful.. we use methods in class components

export class ClassComponent extends Component {
  // constructor(props){    //constructor not  neccesary(system-1)
  //   super(props);
  //   this.state = {count : 0}
  // }
  state = {count : 0}  //(system-2)

  increase = () =>{ // GOLD RULE-->for escape bind, use arrow func 
    this.setState({count : this.state.count + 1}) //setState updates to state
  }

  handleMouse = () => {
    this.setState({count : 0})
  } 

  decrease = () =>{
    this.setState({count : this.state.count -10})
  }

  // comp olştğnda gerçelşen eylem, bir kere çalışır
  componentDidMount(){  // subsequence=> render mount render
    console.log('class comp mounted');
    this.decrease()
  }

  // comp güncellendiğnde gerçelşen eylem
  componentDidUpdate(prevProps,prevState){ // subsequence=> render mount render update
    console.log('class comp updated');
    console.log(prevState.count);
  }

  // comp sonladnığında gerçelşecek eylem
  componentWillUnmount(){
    alert('dear guess \n class comp will unmount \n BY BY')

  }

  render() {
    console.log('class comp rendered');
    return (
      <div>
        <h2>class component</h2>

        <h3>Count::::: {this.state.count}</h3>
        <button onClick={this.increase}>INCREASE COUNTER</button>
        <button onMouseMove={this.handleMouse}>RESET</button>

      </div>
    )
  }
}

export default ClassComponent
