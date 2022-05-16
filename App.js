import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/Product';
//import Footer from './components/Footer';
import Login from './components/Login';
import EmailVerify from './components/EmailVerify';
import Sidebar from './Admin/Sidebar';
import Dashboard from './Admin/Dashboard';
import AddSales from './Admin/Sales';
import Add from './Admin/Customer';
import AddQuestion from './Admin/faqs';
import AddProduct from './Admin/Products';


const user = localStorage.getItem("token");

function App() {
  return (
      <div>
      
        <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/products" component={Product}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/user/:id/verify/:token" element={<EmailVerify/>}/>
        <Route exact path="/admin" component={Sidebar}/>
        <Route exact path="/admin/dashboard" component={Dashboard} />
        <Route exact path="/admin/sale" component={AddSales} />
        <Route exact path="/admin/customer" component={Add} />
        <Route exact path="/admin/faqs" component={AddQuestion} />
        <Route exact path="/admin/inventory" component={AddProduct} />
      </Switch>
      
      </div>
  );
}

export default App;
