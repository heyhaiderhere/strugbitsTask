import React from "react";
import NavbarItems from "./NavbarItems";
import customerIcon from "../../assets/customers.png";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <section className="navbar">
      <nav className="navbar-contanier">
        <div
          className="main-logo"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 0 2rem 0",
          }}
        >
          <img
            style={{
              width: "70%",
            }}
            src={Logo}
            alt=""
          />
        </div>
        {[{ path: "/", text: "Customers", src: customerIcon }].map(
          (item, index) => (
            <NavbarItems key={index} {...item} />
          )
        )}
      </nav>
    </section>
  );
};

export default Navbar;
