import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
export default class Details extends Component {
    render() {
        return(
            <ProductConsumer>
            {value => {
              const{id,company,img,info,price,title,inCart} = value.detailProduct;
            return(
                <div className="container py-5">
                {/* title */}
                <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue mt-4 mb-0">
            <h1>{title}</h1>
                </div>
                </div>
                {/* end title */}
                {/* product info */}
                <div className="row">
                <div className="col-20 mx-auto col-md-20 my-1 ">
                <img src={img} className="img-fluid" alt="product"/>
                {/* buttons */}
             <div>
             <Link to="/">
             <div className="cart" alt="cart"></div>
               <ButtonContainer>back to products</ButtonContainer>
             </Link>
             <ButtonContainer
             cart
             disabled={inCart ? true : false}
             onClick={() => {
                value.addToCart(id);
                value.openModal(id);
             }}
             >
             {inCart ? "inCart": "add to cart"}
             </ButtonContainer>
            </div>
             {/* product text */}
                <div className="col-20 mx-auto col-md-20 my-3 text-capitalize mt-0 mb-0 ">
                <h2>model : {title}</h2>
                <h4 className="text-uppercase text-muted mt-0 mb-0">
            made by : <span className="text-uppercase">{company}</span>
            </h4>
            <h4 className=" col-20 mx-auto col-md-20 my-1 text-blue">
            <strong>price : <span>$</span>{price}
            </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-0 mb-0">
            some info about product :
            </p>
            <p className="col-20 text-muted ">{info}</p>
            {/* buttons */}
             <div>
             <Link to="/">
               <ButtonContainer>back to products</ButtonContainer>
             </Link>
             <ButtonContainer
             cart
             disabled={inCart ? true : false}
             onClick={() => {
                value.addToCart(id);
                value.openModal(id);
             }}
             >
             {inCart ? "inCart": "add to cart"}
             </ButtonContainer>
                  
                 </div>
                </div>
               </div>
              </div>
             </div>
            );
            }}
            </ProductConsumer>
        );
    }
}

