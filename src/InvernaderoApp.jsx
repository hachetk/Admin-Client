import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./Componentes/AuthProtected/AuthLayout";
import LoginAuth from "./Vistas/Auth/LoginAuth";
import { AuthProvider } from "./Context/AuthProvider";
import { UsuariosProvider } from "./Context/UsuariosProvider";
import RutaProtegida from "./Componentes/AuthProtected/RutaProtegida";
import Dashboard from "./Vistas/Dashboard";
import Usuarios from "./Vistas/Usuarios";
import Kit from "./Vistas/Kit";
import Reporte from "./Vistas/Reporte";
import Invernaderos from "./Vistas/Invernaderos";
import Invernadero from "./Componentes/Invernadero";
import { ClienteDatos } from "./Componentes/ClienteDatos";


 function InvernaderoApp() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <UsuariosProvider>
                    <Routes>
                        <Route path="/" element={<AuthLayout />}>
                            <Route index element={<LoginAuth />} />
                        </Route>
                    
                        <Route path="/dashboard" element={<RutaProtegida />} >
                            <Route index element={<Dashboard />} />
                            <Route path="invernaderos" element={<Invernaderos />} />
                            <Route path="kits" element={<Kit />} />
                            <Route path="reporte" element={<Reporte />} />
                            <Route path="usuarios" element={<Usuarios />} /> 
                            <Route path="usuarios/:id" element={<Invernadero />} />
                            <Route path="invernaderos/:id" element={<ClienteDatos />} />
                        </Route>
                    </Routes>
                </UsuariosProvider>
            </AuthProvider>
        </BrowserRouter>
        
    );
    
}
export default InvernaderoApp