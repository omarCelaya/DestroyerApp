import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { PerfilPage } from "../agenda/pages/PerfilPage"

export const AppRouter = () => {
    return (
        <Routes>
            {/*Login y registro */}
            <Route path="/auth/*" element={<AuthRoutes/>} />
             {/*Agenda*/}
             <Route path="/*" element={<PerfilPage/>} />
        </Routes>
    )
}