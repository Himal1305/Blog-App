import { useContext, useEffect } from "react";
import "./App.css";
import {Appcontaxt} from "./contaxt/Appcontaxt"
import Header from "./component/Header"
import Main from "./component/Main"
import Footer from "./component/Footer"
import { Route, Router, Routes } from "react-router-dom";
import Tag from "./component/Tag";
import Catagary from "./component/Catagary";


function App() {
  const{fetchdata,page,tag,cat}=useContext(Appcontaxt);

  useEffect(()=>{
    fetchdata() 

  },[page,tag,cat])
  return (
    <div className="w-[100vw]  h-[100vh] relative  py-0 ">
    <Header/>
    
    <Routes>

     <Route path="/" element={<Main/>}/>
     <Route path="/tag/:tag" element={<Tag/>}/>
      <Route path="/categary/:gat" element={<Catagary/>}/>
    </Routes>

    <Footer/>

    </div>
  );
}

export default App;