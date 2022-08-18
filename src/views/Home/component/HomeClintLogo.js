import React from 'react'

function HomeClintLogo(props) {
  return (
    <>
      {/* Brand Start Here */}

      <img src={require(`../../../assets/images/${props.data.HCLimages}`)} alt="" className="img-fluid mt-lg-5 mt-3 mx-1 brand-img" />

      {/* <section className="ClintLogo wow fadeIn" data-wow-duration="2s">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 mx-auto">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-around flex-wrap">
                    <img src={require('../../../assets/images/brand-1.png')} alt="" className="img-fluid mt-lg-5 mt-3 mx-1 brand-img" />
                    <img src={require('../../../assets/images/brand-2.png')} alt="" className="img-fluid mt-lg-5 mt-3 mx-1 brand-img" />
                    <img src={require('../../../assets/images/brand-3.png')} alt="" className="img-fluid mt-lg-5 mt-3 mx-1 brand-img" />
                    <img src={require('../../../assets/images/brand-4.png')} alt="" className="img-fluid mt-lg-5 mt-3 mx-1 brand-img" />
                    <img src={require('../../../assets/images/brand-5.png')} alt="" className="img-fluid mt-lg-5 mt-3 mx-1 brand-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Brand End Here */}      
    </>
  )
}

export default HomeClintLogo
