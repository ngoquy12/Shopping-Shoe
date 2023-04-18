import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="./Home.html">
            Shoess
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarsExampleDefault"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            </ul>
            <form
              action="search"
              method="post"
              className="form-inline my-2
                  my-lg-0"
            >
              <div className="input-group input-group-sm">
                <input
                  name="txt"
                  type="text"
                  className="form-control"
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Search..."
                />
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="btn btn-secondary
                              btn-number"
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
              <a className="btn btn-success btn-sm ml-3" href="./Cart.html">
                <i className="fa fa-shopping-cart" /> Cart
                <span className="badge badge-light">3</span>
              </a>
            </form>
          </div>
        </div>
      </nav>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">Siêu thị giày chất lượng cao</h1>
          <p className="lead text-muted mb-0">
            Uy tín tạo nên thương hiệu với hơn 10 năm cung cấp các sản phầm giày
            nhập từ Trung Quốc
          </p>
        </div>
      </section>
    </div>
  );
}
