
import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { logOut } from "./firebase";
const Header = () => {
  const [{basket,user},dispatch] = useStateValue()

  console.log("header basket ==>>>>>>",basket,user)

  const handleAuthenticaton = () => {
    if (user) {
      logOut();
    }
  }
  return (
    <>
    <div className="header">
      <Link to="/">
              
      <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
    <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            
            
              <span className="header__optionLineOne">hello {!user ? 'Guest' : user.email}</span>
              <span className="header__optionLineTwo">{user ? "sign Out" : "sign In"}</span>
           
          </div>
      </Link>

        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        

        <div className="header__option">
          <span className="header__optionLineOne">Your .</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        
        <Link to="/checkout">
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length ? basket.length : 0}
            </span>
          </div>
        </Link>
        
      </div>
    </div>
    <Outlet />
    </>

  )
}

export default Header