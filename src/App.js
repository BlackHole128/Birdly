
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Header from "./Shared/Header/Header";
import Login from "./Components/Authentication/Login/Login";
import Registration from "./Components/Authentication/Registration/Registration";

import Classification from "./Components/Classification/Classification/Classification";
import Product from "./Components/Product/Product";
import RequireAuth from "./Components/Authentication/RequireAuth";
import Cart from "./Components/Orders/Cart/Cart";
import Aboutus from "./Components/Aboutus/Aboutus";
import Comments from "./Components/Comments/Comment/Comments"
import Detailes from "./Components/ProductDetailes/Detailes/Detailes";
import AllReviews from "./Components/Comments/AllReviews/AllReviews";
import Users from "./Components/Comments/User's/Users";
import Footer from './Components/Footer/Footer';
function App() {

  //Gludiolus
  //73sE7n8b27Aw7GLA

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Registration></Registration>}></Route>
        <Route path="/class" element={<RequireAuth><Classification></Classification></RequireAuth>}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>

        <Route path="/comments" element={<Comments></Comments>}>
          <Route index element={<AllReviews></AllReviews>}></Route>
          <Route path="allReviews" element={<AllReviews></AllReviews>}></Route>
          <Route path="userReviews" element={<Users></Users>}></Route>
        </Route>

        
          <Route path="/detailes/:id" element={<RequireAuth><Detailes></Detailes></RequireAuth> }></Route>
     
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
