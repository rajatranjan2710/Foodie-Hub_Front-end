import Home from './components/home/Home';
import Header from './components/layout/Header';
import Footer from './components/home/Footer';
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';
import PaymentSuccess from './components/cart/PaymentSuccess';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import MyOrders from './components/myOrders/MyOrders';
import OrderDetails from './components/myOrders/OrderDetails';
import Dashboard from './components/admin/Dashboard';
import Users from './components/admin/Users';
import Orders from './components/admin/Orders';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/app.scss'
import './styles/header.scss'
import './styles/home.scss'
import './styles/founder.scss'
import './styles/menu.scss'
import './styles/footer.scss'
import './styles/contact.scss'
import './styles/about.scss'
import './styles/cart.scss'
import './styles/shipping.scss'
import './styles/confirmorder.scss'
import './styles/paymentSuccess.scss'
import './styles/login.scss'
import './styles/profile.scss'
import './styles/myOrders.scss'
import './styles/orderDetails.scss'
import './styles/dashboard.scss'

import Loader from './components/loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/userAction';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from 'protected-route-react';




function App() {

  const dispatch = useDispatch();
  const { isAuthenticated, message, error,user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch({
        type: "clearError"
      })
    }
    if (message) {
      toast.success(message)
      dispatch({
        type: "clearMessage"
      })
    }
  }, [dispatch, error, message])

  return <Router>
    <Header isAuthenticated={isAuthenticated} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
        <Login />
      </ProtectedRoute>} />

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} redirect="/" />}>
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/loader" element={<Loader />} />
      </Route>
      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true} isAdmin={user && user.role==="admin"} redirectAdmin={"/me"} />}>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
      </Route>

    </Routes>
    <Footer />
    <Toaster />
  </Router>
}

export default App;
