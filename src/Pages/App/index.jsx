import {useRoutes, BrowserRouter} from 'react-router-dom'

import NavBar from '../../Components/NavBar'

import Home from '../Home'
import  MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
      {path: "/",element: <Home />},
      {path: "/my-account",element: <MyAccount />},
      {path: "/my-order",element: <MyOrder />},
      {path: "/my-orders",element: <MyOrders />},
      {path: "/sing-in",element: <SignIn />},
      {path: "/*",element: <NotFound />}



  ])
  return routes
}

function App() {


  return (
   <BrowserRouter>
      <AppRoutes />
      <NavBar />
   </BrowserRouter>
  )
}

export default App
