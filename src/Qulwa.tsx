import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { Login } from './pages/login/Login'
import { Base } from './pages/home/Base'
import { Home } from './pages/home/Home';
import { Transactions } from './pages/home/Transactions';
import { Accounts } from './pages/home/Accounts';
import { Balance } from './pages/home/Balance';
import { Categorys } from './pages/home/Categorys';
import { DeleteProfile } from './pages/home/DeleteProfile';
import { ProtectedRoute } from './ProtectedRoute';



function Qulwa() {
  return <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Login />} />

      <Route path='/inicio/*' element={<Base />}>
        <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="transacciones" element={<ProtectedRoute><Transactions /></ProtectedRoute>} />
        <Route path="cuentas" element={<ProtectedRoute><Accounts /></ProtectedRoute>} />
        <Route path="balance" element={<ProtectedRoute><Balance /></ProtectedRoute>} />
        <Route path="categorias" element={<ProtectedRoute><Categorys /></ProtectedRoute>} />
        <Route path="eliminar-perfil" element={<ProtectedRoute><DeleteProfile /></ProtectedRoute>} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Qulwa
