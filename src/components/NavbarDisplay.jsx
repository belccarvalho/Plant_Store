import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { TiShoppingCart } from "react-icons/ti";
import { RiPlantFill } from "react-icons/ri";
import ListOfProducts from "./products/ListOfProducts.jsx";
import Orders from "./orders/Orders.jsx";
import { useSelector } from "react-redux";

export default function NavbarDisplay() {
  const basketCounter = useSelector((state) => state.basket.qtyItem);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar className='navbar' light expand='md'>
        <NavbarBrand
          className='col-3'
          href='/shop'
          style={{
            color: "var(--pink)",
            fontSize: "2rem",
          }}
        >
          Online-Shop
          <RiPlantFill style={{ width: "4rem", height: "4rem" }} />{" "}
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className=' col-8' navbar>
            <NavItem tag='h4'>
              <Link className='nav-link' to='/shop'>
                Shop
              </Link>
            </NavItem>
            <NavItem tag='h4'>
              <Link className='nav-link' to='/orders'>
                Orders
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>
            <Link
              className='col-1 nav-link basket'
              style={{
                color: "rgba(0,0,0,.6)",
                fontSize: "1.3rem",
                marginBottom: "1em",
              }}
              to='/orders'
            >
              <span>
                <TiShoppingCart />
              </span>
              <p>{basketCounter}</p>
            </Link>
          </NavbarText>
        </Collapse>
      </Navbar>
      <Switch>
        <Route path='/shop'>
          <ListOfProducts />
        </Route>
        <Route path='/orders'>
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
}
