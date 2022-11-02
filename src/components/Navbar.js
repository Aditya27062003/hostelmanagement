import React, {useEffect, useReducer, useRef, useState} from 'react'
import {Link} from 'react-router-dom';
import Loading from './Loading';

const initialArg = [
  {
    id:1,
    name:'set alarm',
    complete: false
  },
  {
    id:2,
    name:'reset alarm',
    complete: false
  },
  {
    id:3,
    name:'write note',
    complete: true
  }
]


const reducer = (state,action)=>{

}



function Navbar() {
  // const [a,setA] = useState(0);
  // const [b,setB] = useState(0);
  // const [user,setUser] = useState("");
  // const [load,setLoad] = useState(false);
  // const userdata = useRef();
  // useEffect(()=>{
  //   // console.log("use effect is working ")
  //   setLoad(true);
  // },[a])

  // function abc(){
  //   console.log("extra function is running");
  // }
  // abc();
  // const formHandler = (e)=>{
  //   e.preventDefault();
  //   console.log(user);
  // }

  // const formHandler2 = (e)=>{
  //   e.preventDefault();
  //   console.log(userdata.current.value);
  // }

  const [todos,dispatch]= useReducer(reducer,initialArg);
  return (
    <>
      {/* <form>
        <input type="text" placeholder="enter some value">

        </input>
        <button type='submit'>submit</button>
      </form> */}

      {
        todos.map((td)=>{
          <div key={td.id}>
          <label>
            <input
              type="checkbox"
              checked={td.complete}
              onChange={() => handleComplete(td)}
            />
            {td.name}
          </label>
        </div>

        })
      }
       
    </>
  )
}

export default Navbar