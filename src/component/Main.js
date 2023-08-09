import React from "react";
import { useContext } from "react";

import { Appcontaxt } from "../contaxt/Appcontaxt";
import { NavLink } from "react-router-dom";

export default function Main() {
  const { blogdata, loading,taghandelar,cathandelar } = useContext(Appcontaxt);
  return loading ? (
    <div className=" w-full h-full flex justify-center items-center">
      <div className="ring">
        Loading
        <span className="ab"></span>
      </div>
    </div>
  ) : (
    <div className=" w-2/4 mx-auto my-12 z-10">
      {blogdata.map((data) => (
        <div key={data.id} className="my-4">
          <h1 className="font-bold text-xl">{data.title}</h1>
          <p className="text-sm">by <span>{data.author}</span> on  <span className="underline text-blue-600"> <NavLink onClick={cathandelar} to={`/categary/${data.category}`}>{data.category}</NavLink></span></p>  
          <p className="text-sm">Date on {data.date}</p>  
          <p className="mt-2 text-sm">{data.content}</p>
          
            
          {
            data.tags.map(tag=>{
              return <NavLink key={tag} onClick={taghandelar} className=" text-xs underline pr-1 text-blue-600 " to={`/tag/${tag}`} >#{tag} </NavLink>
            })
            
          }
          
        </div>
        
        
      ))}
    </div>
  );
}
