import * as React from 'react'
import ReactDOM from 'react-dom'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

class App extends React.Component{
  render(){
    return <div>Hello World!</div>
  }
}

ReactDOM.render(<App/>, document.getElementById("root"))
