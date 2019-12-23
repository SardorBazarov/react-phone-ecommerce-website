import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from 'prop-types';


export default class Product extends Component{
  render() {
    const  { id, title, img, price, inCart } = this.props.product;
    return(
        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
          <div className="card">
          <ProductConsumer>
           {value => (
           <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top"/>
              </Link> 
              <button className="cart-btn" 
              disabled={inCart ? true : false} 
              onClick={()=>{
                value.addToCart(id);
                value.openModal(id);
              }}>
  {inCart ? (
                <p className="text-capitalize mb-0" disabled>{" "}
                  in cart
                </p>
            ):(<i className="fas fa-cart-plus"/>)}
              </button>
            </div>
           )}
          </ProductConsumer>
            {/* card footer */}
            <div className="card-footer d-flex justify-context-between">
            <p className="align-self-center">{title}</p>
            <h5 className="text-blue font-italic text-capitaize mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
            </div>
          </div>
        </ProductWrapper>
    );
  }
}
Product.propTypes = {
    product: PropTypes.shape ({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
.card{
    border-color: rgba(0,0,0,0.3);
    transition: all 1s linear;
    border-radius: 10%
}
.card-footer{
    background: transparent !important;
    transition: all 1s linear;
    position: bottom-center;
    border: 0.1rem solid rgba(0,0,0,0.2);
    border-top-width: 0.1px !important;
    border-bottom-width: 0.1px;
    border-left: 0.1px;
    border-right: 0.1px;
}
&:hover{
    .card{
        border: 0.03rem solid rgba(0,0,0,0.2);
        box-shadow: 13px 13px 10px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    
    }
}
.img-container{
    position: relative;
    overflow: hidden;
}

.card-img-top {
    transition: all 0.8s linear;
}
.img-container: hover .card-img-top {
    transform: scale(1.2);

}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    left:1;
    top:1;
    font-size: 1.6rem;
    transition: all 1s linear;
    padding: 0.4rem 0.8rem;
    background: transparent;
    border: none;
    border-radius: 10%;
    color: var(--mainDark);
    transform: translate(-180%, 100%);
    transition: all 1s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0%, 0%);
    
}
.cart-btn:hover {
    color: var(--mainYellow);
    cursor: pointer;
}
`;