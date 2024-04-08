import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  return (
   <center class='todo-container'>
   <h1>
    TODO APP
    </h1> 
    <div class="container text-center"></div>
    <div class="row">
    <div class="col-4">
      <input type="text" placeholder='Enter Todo Here '/>
    </div>
    <div class="col-4">
    <input type="date"/>
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-success">Add</button>
    </div>
    </div>

    <div class="row">
    <div class="col-4">
     Buy Milk
    </div>
    <div class="col-4">
    4/8/2024
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
    </div>

    <div class="row">
    <div class="col-4">
     Go to office
    </div>
    <div class="col-4">
    4/8/2024
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
    </div>

    
    
   </center>
  )
}

export default App
