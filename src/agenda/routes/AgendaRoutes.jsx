import { Navigate, Route, Routes } from "react-router-dom"
import { PerfilPage } from "../pages/PerfilPage"

export const AgendaRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PerfilPage/>} />
        <Route path="/*" element={<Navigate to='/'/>} />
    </Routes>
  )
}
