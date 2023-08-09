import { createContext, useEffect, useState } from "react";
import {url} from "../baseurl"


export const Appcontaxt=createContext()

export default function AppcontaxtProvider({children}){
    
    const[blogdata, setblogdata]=useState([])
    const[loading,setloading]=useState(false)
    const[page,setpage]=useState(1)
    const[totalpage,settotalpage]=useState(null);
    const[cat,setcat]=useState(null)
    const[tag, settag]=useState(null)
    const[home,sethome]=useState(true);


    async function fetchdata(){
        
        if(tag != null){
        let urldata=`${url}?tag=${tag}`
        setloading(true)
        try{
                let dataFetch=await fetch(urldata);
                let jsondata=await dataFetch.json();
                // console.log(dataFetch);
                setblogdata(jsondata.posts);
                settotalpage(jsondata.totalPages)
                console.log("1");
                setloading(false)        
            }
            catch(error){
                console.log(error);
            }
        }
         if(cat != null){
            let urldata=`${url}?category=${cat}`
            
            setloading(true);
            try{
                    let dataFetch=await fetch(urldata);
                    
                    let jsondata=await dataFetch.json();
                    setblogdata(jsondata.posts);
                    settotalpage(jsondata.totalPages)
                    console.log("2");
                    setloading(false)
                }
                catch(error){
                    console.log(error);
                }
            }
    
        if(home){
            setloading(true);
            let urldata=`${url}?page=${page}`
            try{
            let dataFetch=await fetch(urldata);
            
            let jsondata=await dataFetch.json();
            setblogdata(jsondata.posts);
            settotalpage(jsondata.totalPages)
            console.log("3");
        }
        catch(error){
            console.log(error);
        }
        setloading(false)
    }
    }
    function taghandelar(ev){
       sethome(false)
        setcat(null)
        setpage(1)
        let a= ev.target.innerHTML
        let b=a.split("#");
        settag(b[1]);
        
    }
    function homehandlar(){
    
        setcat(null)
        settag(null)
        sethome(true);  
    }
    function cathandelar(ev){
        settag(null)
        sethome(false)
        setpage(1)
        setcat(ev.target.innerHTML)
        // console.log(`a${a}a`);
        // setcat(a)    
    }
    function nextpagehandelar(){
        if(page < totalpage){
        setpage(page+1);
        }
        
    }
    
    function reviouspagehandelar(){
        if(page > 1 ){
        setpage(page-1);
        }
    }

    const value={
        fetchdata,
        nextpagehandelar,reviouspagehandelar,
        taghandelar,
        homehandlar,
        cathandelar,

        blogdata,setblogdata,
        loading,setloading,
        page,setpage,  
        totalpage,settotalpage,
        tag, settag,  
        cat,setcat,
        
    };

    return <Appcontaxt.Provider value={value}>
    {children}
    </Appcontaxt.Provider>
}