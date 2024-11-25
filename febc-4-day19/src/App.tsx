import Heading from "./components/Heading";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";
import List from "./components/List";
import Dashboard from "./page/Dashboard";
import Login from "./page/Login";
import Form from "./components/Form";
import { useForm } from 'react-hook-form';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Notfound from "./page/Notfound";
import News from "./page/News";
import Detail1 from "./page/Detail1";


function App(){
    
    const [count, setCount] = useState(0)

    const handleIncreaseCount = () => {
        setCount(count + 1)
    }
    const handleDecreaseCount = () => {
        setCount(count - 1)
    }

    const isLogin = true;
    const text = "This is text from variable"
   
    if(isLogin){
        return<>
       
        
        <Dashboard color = "red"></Dashboard>


        <Routes>
            
            <Route path="/" element={<Dashboard></Dashboard>}></Route>
            <Route path="/detail1" element={<Detail1></Detail1>}></Route>
            <Route path="/detail/:id" element={<Detail1 />} />
            <Route path="/news/:slug" element={<News></News>}>

            {""}</Route>
            
            <Route path="/form/:id" element={<Form />} />
            <Route path='*' element={<Notfound></Notfound>} />
        </Routes>
            

        </> 
    } else {
        return <>
        <h1 id="value_text">{text}</h1> 
        <Button title="Logins" color = "red"></Button>
        
        
        
        </>
    }
    
}

export default App;