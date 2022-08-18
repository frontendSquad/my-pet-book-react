import React from 'react'

function HomeClient(props) {

  return (
    <>

      {/* Client Start Here */}

                      
                        <div className="d-inline-flex align-items-center mt-lg-5 mt-3 pl-4">
                          <span className="position-relative phone-img-span">
                            <img src={require(`../../../assets/images/${props.data.HCimage}`)} alt="" className />
                          </span>
                          <span className="ml-2">
                            <p>{props.data.HCFName}</p>
                            <p className="phone-a">{props.data.FCDesig}</p>
                          </span>
                        </div>
                        <p>{props.data.FCPara}</p>

      {/* <section className="client">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="row">
                <div className="col-lg-6">
                  <div className="position-relative d-lg-inline-block d-none">
                    <img src={require('../../../assets/images/d-9.png')} alt="" className="d-1 small-img animation-1" />
                    <img src={require('../../../assets/images/d-10.png')} alt="" className="d-2 small-img animation-2" />
                    <img src={require('../../../assets/images/d-11.png')} alt="" className="d-3 small-img animation-3" />
                    <img src={require('../../../assets/images/d-12.png')} alt="" className="d-4 small-img animation-4" />
                    <img src={require('../../../assets/images/client-main.png')} alt="" className="img-fluid wow fadeIn" data-wow-duration="2s" />
                  </div>
                  <img src={require('../../../assets/images/client-main-2.png')} alt="" className="img-fluid d-lg-none d-block mx-auto wow fadeIn" data-wow-duration="2s" />
                </div>
                <div className="offset-lg-1 col-lg-5 mt-lg-0 mt-3">
                  <div className="client-back position-relative">
                    <h4 className="footheading">CUSTOMER FEEDBACK</h4>
                    <h2 className="main-heading mt-lg-3 mt-2 wow fadeIn" data-wow-duration="2s">What Our Satisfied Client Say</h2>
                    <div className="owl-carousel owl-theme wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s" id="home-slider">
                      <div className="item">
                        <div className="d-inline-flex align-items-center mt-lg-5 mt-3 pl-4">
                          <span className="position-relative phone-img-span">
                            <img src={require('../../../assets/images/phone-img.png')} alt="" className />
                          </span>
                          <span className="ml-2">
                            <p>Founder (Vision Trust)</p>
                            <p className="phone-a">Mateuaz Madura</p>
                          </span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
                      </div>
                      <div className="item">
                        <div className="d-inline-flex align-items-center mt-lg-5 mt-3 pl-4">
                          <span className="position-relative phone-img-span">
                            <img src={require('../../../assets/images/phone-img.png')} alt="" className />
                          </span>
                          <span className="ml-2">
                            <p>Founder (Vision Trust)</p>
                            <p className="phone-a">Mateuaz Madura</p>
                          </span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
                      </div>
                      <div className="item">
                        <div className="d-inline-flex align-items-center mt-lg-5 mt-3 pl-4">
                          <span className="position-relative phone-img-span">
                            <img src={require('../../../assets/images/phone-img.png')} alt="" className />
                          </span>
                          <span className="ml-2">
                            <p>Founder (Vision Trust)</p>
                            <p className="phone-a">Mateuaz Madura</p>
                          </span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Client End Here */}
      
    </>
  )
}

export default HomeClient
