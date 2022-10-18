import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Componentes/AuthProtected/UserContext";
import { AdminPrincipal } from './Vistas/AdminPrincipal';
import { Usuarios } from './Vistas/Usuarios';
import  LoginAuth from "./Vistas/Auth/LoginAuth";


export const InvernaderoApp = () => {
    return (
            <UserProvider>
                <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginAuth/>} >
                    <Route path='/login' element={<LoginAuth/>} />
                    </Route>
                    
                    <Route path='/dashboard' element={<AdminPrincipal />}/>
                    <Route path='/usuario' element={<Usuarios />} />
                    
                </Routes>
                </BrowserRouter>
            </UserProvider> 
        
            
             
            
          
        
    );
    
}