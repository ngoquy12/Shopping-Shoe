import React, { useState } from "react";
import { listProduct } from "./Data";

export default function Home() {
  const [listProducts, setListProduct] = useState(listProduct);
  console.log(listProducts);
  return (
    <>
      {/*end of menu*/}
      <div className="container">
        <div className="row">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="Home.jsp">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Category</a>
                </li>
                <li className="breadcrumb-item active" aria-current="#">
                  Sub-category
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="card bg-light mb-3">
              <div
                className="card-header bg-primary text-white
                      text-uppercase"
              >
                <i className="fa fa-list" />
                Categories
              </div>
              <ul className="list-group category_block">
                <li className="list-group-item text-white">
                  <a href="#" />
                </li>
              </ul>
            </div>
            <div className="card bg-light mb-3">
              <div
                className="card-header bg-success text-white
                      text-uppercase"
              >
                Last product
              </div>
              <div className="card-body">
                <img
                  className="img-fluid"
                  src="https://product.hstatic.net/1000376021/product/gx4696_0_84b395ea7c264d12b62159a2f24d6291_86e40147556c49d9b7f3bbcbbef38f74_master.jpeg"
                />
                <h5 className="card-title">Giày Adidas</h5>
                <p className="card-text">Giày Sneakers Nam ADIDAS Nebzed</p>
                <p className="bloc_left_price">200$</p>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="row">
              {/* Cart */}

              {/* Cart */}
              {listProducts.map((product) => (
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={product.image}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h4 className="card-title show_txt">
                        <a href="#" title="View Product">
                          {product.productName}
                        </a>
                      </h4>
                      <p className="card-text show_txt">
                        {product.description}
                      </p>
                      <div className="row">
                        <div className="col">
                          <p className="btn btn-danger btn-block">
                            {product.price} $
                          </p>
                        </div>
                        <div className="col">
                          <a href="#" className="btn btn-success btn-block">
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
    </>
  );
}
