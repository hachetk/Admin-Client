import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../Componentes/AuthProtected/UserContext";
import { Header } from '../Componentes/header';
import { Sidebar } from '../Componentes/Sidebar';



export const AdminPrincipal = () => {

    
    const {auth, isAuth} =useContext(UserContext)
    const navigate = useNavigate() 
    useEffect(()=>{
        if(!isAuth()){navigate('/login')}
      },[])
      if (auth){
        return(
            <>
        <div className="bg-[#e2e2e2]">
            
                <Sidebar /> 
            <main className="lg:pl-80 p-8 h-screen">
                <Header /> 
                <h1>dashboard</h1>
            </main>   
        </div>   
            </>
        )

      }
         
    }



    
     
     

    /*const navigate = useNavigate()
     
        if(auth){
            
            return (
               
                <>
                <div className="min-h-screen">
                  <h1>dashboard</h1>
                  <Outlet/>
                </div>
                </>
              )
        }
        //console.log(auth);*/
      
    
