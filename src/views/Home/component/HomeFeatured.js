import React from 'react'
import BtnLink from '../../../component/BtnLink'

function HomeFeatured(props) {
  return (
    <>
      <div className="col-lg-4 mt-lg-4 mt-2">
        <a href={props.data.HFLinkPathMain}>
          <div className="product-div text-center">
            <img src={require(`../../../assets/images/${props.data.HFimag}`)} alt="" className="product-img" />
          </div>
          <div className="product-details">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="product-name">{props.data.HFHeadingH3}</h3>
              <button><i className="fas fa-heart fill-heart" /></button>
            </div>
            <p className="product-description mt-2">{props.data.HFPara}</p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <h4 className="product-price">{props.data.HFProPriceH4}</h4>
              {/* <button className="general-btn d-inline-block">Add To Cart</button> */}
              <BtnLink BtnPath={props.data.HFLinkPathMain} BtnText='Add To Cart' BtnClass='general-btn d-inline-block'/>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default HomeFeatured
