import React,{useEffect,useState} from "react";
// import {Provider} from "react-redux"
import "./App.css";
// import {store} from "./redux/store"
import Compli from "./components/compli"
import axios from 'axios'
import Todo from "./components/Todo"
// import {New} from "./components/new"
function App() {
  const [items,setItems]=useState([])
  const [Todos,setTodos]=useState([])
  const [eitem,setItem]=useState("")
  useEffect(()=>{
    axios.get('http://localhost:5000/')
    .then(response => { 
      const data1 = response.data.data
      console.log(response.data.data);
      setTodos(data1); 
      setItems(data1);
    })
    .catch(error => {console.log(error);})
  },[])
    const Add = () => {
      // const data1 = JSON.stringify({work : eitem , completed : false});
      axios.post('http://localhost:5000/Add',{
        work:eitem,
        completed:false
      }
      )
      .then(response =>{
        const data1 = response.data.data;
        setTodos(data1)
        setItems(data1)
        console.log(data1)
      })
      .catch(err => {
        console.log(err);
      })
      setItem("")
  }
  const AllUpdate = () => {
    setTodos(items)
  }
  const ComUpdate = () => {
    const items1 = items.filter(item => item.completed ===true);   
    setTodos(items1)   
  }
  const UcomUpdate = () => {
    const items1 = items.filter(item => item.completed === false)
    console.log(items)
    setTodos (items1)
  }
  const Update = (item) => {
    console.log(item)
  }
  const Delete =(item) => {
    console.log(item)
  }
  // console.log("todos",Todos)
    return (
      // <Provider store={store} > 
            <div className="App">
                <input type="text" value ={eitem} onChange={e => setItem(e.target.value)}></input>
                <button onClick={Add}>+</button>
                <button name="option" onClick={AllUpdate}>All</button>
                <button name="option"onClick={ComUpdate}>Completed</button>
                <button name="option"onClick={UcomUpdate}>not Completed</button>
                <div>
                    {/* <Compli Todos={Todos} Update={Update} Delete={Delete}/> */}
                    {Todos.map(item=><Todo item={item} Update={Update} Delete={Delete} />)}
                </div>    
            </div>
      // </Provider>
      );
      }
  export default App;
  // useEffect (() => {  
  //   if(JSON.parse(localStorage.getItem('Todos') !== null)){
  //     const Todos1= JSON.parse(localStorage.getItem('Todos'))
  //     setItems(Todos1)
  //     setTodos(Todos1)
  //   }
  //   else  {
  //     const Todos1 = [];
  //     setItems(Todos1)
  //     setTodos(Todos1)
  //   }
  // },[]
  // )
  // const Add = () => {
  //   const temp = [...items,{work : eitem ,completed : false}]
  //   setTodos(temp)
  //   setItems(temp)
  //   localStorage.setItem("Todos",JSON.stringify(temp))
  //   setItem("")
  // }
  // const Update = (item) => {
  //   const items1=[...items];
  //   items1.map(item1=>{
  //     if(item1 === item)
  //       item1.completed = true;
  //   })
  //   setTodos(items1)
  //   localStorage.setItem("Todos",JSON.stringify(items1))  
  // }
  // const Delete =(item) => {
  //   const items1= items.filter(item1 => item1!=item)
  //    setTodos(items1);
  //    setItems(items1);
  //    localStorage.setItem("Todos",JSON.stringify(items1))
  // }
  // const AllUpdate = () => {
  //   setTodos(items)
  // }
  // const ComUpdate = () => {
  //   const items1 = items.filter(item => item.completed ===true);   
  //   setTodos(items1)   
  // }
  // const UcomUpdate = () => {
  //   const items1 = items.filter(item => item.completed === false)
  //   setTodos (items1)
  // }
    //  const [Data, setData] = useState("")
    //  const [name,setName]=useState("")
    //  const [flag, setflag] = useState(-1)
    // useEffect(()=>{
    //   axios.get('http://localhost:5000/')
    //   .then(response => { 
    //     setTodos(response.data); 
    //     setItems(response.data);
    //     console.log(response)
    //   })
    //   .catch(error => {console.log(error);})
    // },[])
    // const handleSubmit = () => {
    //   console.log(name)
    //   axios.get(`http://localhost:5000/${name}`)
    //   .then((response)=> {if(response.data===name) setflag(1); else setflag(0); console.log(flag)})
    //   .catch((error)=>setflag(0))
    
            {/* <Compli />
            <h1>{Data}</h1><br/>
            <h2>Sign in to continue....</h2>
            <input type="text" value={name} onChange={e=>{setName(e.target.value)}}></input>
            <button onClick={handleSubmit}>Click</button>
            {flag!=-1 && flag==0 && <h2>No u are not a user</h2>}
            {flag!=-1 && flag==1 && <h2>Welcome</h2>} */}
      
