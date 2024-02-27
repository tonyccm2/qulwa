import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { Login } from "./pages/login/login";
import { Home } from './pages/home/home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </>,
  ),
)

function Qulwa() {
  return <RouterProvider router={router} />
}

export default Qulwa
