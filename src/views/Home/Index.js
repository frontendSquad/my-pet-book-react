import React from 'react'
// import HomeBanner from './component/Home-Banner'
import Pet from './component/Pet'
// import HomeAbout from './component/HomeAbout'
import HomeFeatured from './component/HomeFeatured'
import HomeExperience from './component/HomeExperience'
import HomeDogs from './component/HomeDogs'
import HomeClient from './component/HomeClient'
import HomeClintLogo from './component/HomeClintLogo'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import WhyChoose from '../../component/WhyChoose'
import GImagesFive from '../../component/GImagesFive'

import BtnLink from '../../component/BtnLink'

function Index() {
const Petloo = [
  {
    Pimages:'pet-1.png',
    PHeading:'Pet Vaccine',
    PPara:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga porro mollitia pariatur repellat sapiente ullam optio laboriosam? Et repellendus beatae deserunt',
  },
  {
    Pimages:'pet-2.png',
    PHeading:'Pet Grooming',
    PPara:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga porro mollitia pariatur repellat sapiente ullam optio laboriosam? Et repellendus beatae deserunt',
  },
  {
    Pimages:'pet-3.png',
    PHeading:'Medical Checkup',
    PPara:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga porro mollitia pariatur repellat sapiente ullam optio laboriosam? Et repellendus beatae deserunt',
  }
]

const HomeFeaturedlo = [
  {
    HFimag : 'p-1.png',
    HFHeadingH3 : 'Dry Food',
    HFPara : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    HFProPriceH4 : '$45.00',
    HFLinkPathMain : 'product-detail.php',
    HFButtinLink: 'HFLinkPathMain',
  },
  {
    HFimag : 'p-2.png',
    HFHeadingH3 : 'Dry Food',
    HFPara : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    HFProPriceH4 : '$45.00',
    HFLinkPathMain : 'product-detail.php',
    HFButtinLink: 'HFLinkPathMain',
  },
  {
    HFimag : 'p-3.png',
    HFHeadingH3 : 'Dry Food',
    HFPara : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    HFProPriceH4 : '$45.00',
    HFLinkPathMain : 'product-detail.php',
    HFButtinLink: 'HFLinkPathMain',
  }
]

const HomeExpelo =[
  {
    HEHeadingH5:'20+',
    HEHeadingH6:'Years of Experience',
    HEPara:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
  },
  {
    HEHeadingH5:'2K+',
    HEHeadingH6:'Satisfied Clients',
    HEPara:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
  },
  {
    HEHeadingH5:'122+',
    HEHeadingH6:'Awards Winning',
    HEPara:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
  },
  {
    HEHeadingH5:'50+',
    HEHeadingH6:'Pet Care Specialist',
    HEPara:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
  }
]

	const HClientslid = {
		responsiveClass: true,
		nav: false,
		dots: true,
		autoplay: false,
		loop: true,
		center: true,
		margin: 10,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			576: {
				items: 1,
			},
			992: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},

}
const HClintLo = [
  {
    HCimage:'phone-img.png',
    HCFName:'Founder (Vision Trust)',
    FCDesig:'Mateuaz Madura',
    FCPara:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.',
  },
  {
    HCimage:'phone-img.png',
    HCFName:'Founder (Vision Trust)',
    FCDesig:'Mateuaz Madura',
    FCPara:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.',
  },
  {
    HCimage:'phone-img.png',
    HCFName:'Founder (Vision Trust)',
    FCDesig:'Mateuaz Madura',
    FCPara:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.',
  }
]


const HCLogoLo =[
  {
    HCLimages:'brand-1.png',
  },
  {
    HCLimages:'brand-2.png',
  },
  {
    HCLimages:'brand-3.png',
  },
  {
    HCLimages:'brand-4.png',
  },
  {
    HCLimages:'brand-5.png',
  }
] 


const WCH =
    {
        WCHeadingH4:'WHY CHOOSE US',
        WCHeadingH2:'Experience &amp; Trust Built For 20 Years',
        WCPara:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.',
        WCBtnPath:'#_',
        WCBtnClass:'d-inline-block general-btn mr-1 mt-lg-4 mt-3 wow fadeInUp',
        WCBtnText:'Discover More',
        WCBtnIcon: true,

    }

const AboutUs =
  {
      WCHeadingH4:'ABOUT US',
      WCHeadingH2:'Experience &amp; Trust Built For 20 Years',
      WCPara:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed.',
      WCBtnPath:'#_',
      WCBtnClass:'d-inline-block general-btn mr-1 mt-lg-4 mt-3 wow fadeInUp',
      WCBtnText:'Discover More',
      WCBtnIcon: true,

  } 

const GIFImages = {
  GIFimg1:'d-5.png',
  GIFimg2:'d-6.png',
  GIFimg3:'d-7.png',
  GIFimg4:'d-8.png',
  GIFimg5:'banner-dog.png',
  GIFimgMain:'best-2.png',
}

const GIFImagesBann = {
  GIFimg1:'d-1.png',
  GIFimg2:'d-2.png',
  GIFimg3:'d-3.png',
  GIFimg4:'d-4.png',
  GIFimg5:'banner-dog.png',
  GIFimgMain:'banner-dog-2.png',
}


  return (
    <div>
        
        <section className="home-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="row">
                <div className="col-lg-7 text-lg-left text-center">
                  <h1 id="maindescription">The Right Preference For Pet Owner</h1>
                  <p className="mt-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Grooming &amp; Supply provides grooming services for all dog and cat breeds.<br />We are fully committed to the health</p>
                  <div className="mt-3 wow fadeIn" data-wow-duration="2s" data-wow-delay="1s">
                    <BtnLink BtnPath='contact.php' BtnClass='d-inline-block general-btn mr-1' BtnText='Contact' icon='true' />
                    <BtnLink BtnPath='about.php' BtnClass='d-inline-block general-btn ml-1' BtnText='About' icon="true"/>
                    {/* <a href="about.php" className="d-inline-block general-btn ml-1">About <i className="fas fa-arrow-right ml-1" /></a> */}
                  </div>
                  <div className="d-inline-flex align-items-center mt-lg-5 mt-3 phone-img pl-3 wow zoomIn" data-wow-duration="1s">
                    <span className="position-relative phone-img-span">
                      <img src={require('../../assets/images/phone-img.png')} alt="" className />
                    </span>
                    <span className="ml-2">
                      <p>Make a Call</p>
                      <a href="tel:+012 345 6789" className="phone-a">88 456 345 896 44</a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-5 my-auto">
                  <GImagesFive data={GIFImagesBann} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>        
        {/* <HomeBanner/> */}


      {/* Pet Start Here */}
      <section className="pet">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="row">
                {

                Petloo.map((item) => {
                  return (
                      <Pet data={item} />
                  )
                })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pet End Here */}  
        
      <section className="best position-relative">
        <img src="images/bone.png" alt="" className="img-fluid  bone" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="row">
                <div className="col-lg-6">
                  <GImagesFive data={GIFImages} />
                </div>
                <div className="offset-lg-1 col-lg-5 mt-lg-0 mt-2">
                  <WhyChoose data={AboutUs}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="featured position-relative wow fadeIn" data-wow-duration="2s">
        <img src="images/foot.png" alt="" className="foot" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="main-heading">Our Featured Products</h2>
                </div>
                  {
                   HomeFeaturedlo.map((item) => {
                    return(
                      <HomeFeatured data={item}/>
                    )
                   }) 
                  }
                </div>
              </div>
            </div>
        </div>
      </section>
        

      <section className="experience position-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="row">
                <div className="col-lg-5">

                  <WhyChoose data={WCH}/>
                </div>
                <div className="offset-lg-1 col-lg-6 mt-lg-0 mt-3">
                  {
                    HomeExpelo.map((item) =>{
                      return(
                        <HomeExperience data={item}/> 
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>        
        


        
        <HomeDogs/>


        <section className="client">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-9 mx-auto">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="position-relative d-lg-inline-block d-none">
                      <img src={require('../../assets/images/d-9.png')} alt="" className="d-1 small-img animation-1" />
                      <img src={require('../../assets/images/d-10.png')} alt="" className="d-2 small-img animation-2" />
                      <img src={require('../../assets/images/d-11.png')} alt="" className="d-3 small-img animation-3" />
                      <img src={require('../../assets/images/d-12.png')} alt="" className="d-4 small-img animation-4" />
                      <img src={require('../../assets/images/client-main.png')} alt="" className="img-fluid wow fadeIn" data-wow-duration="2s" />
                    </div>
                    <img src={require('../../assets/images/client-main-2.png')} alt="" className="img-fluid d-lg-none d-block mx-auto wow fadeIn" data-wow-duration="2s" />
                  </div>
                  <div className="offset-lg-1 col-lg-5 mt-lg-0 mt-3">
                    <div className="client-back position-relative">
                      <h4 className="footheading">CUSTOMER FEEDBACK</h4>
                      <h2 className="main-heading mt-lg-3 mt-2 wow fadeIn" data-wow-duration="2s">What Our Satisfied Client Say</h2>
                      <div className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s" id="home-slider">
                      <OwlCarousel className="owl-theme" {...HClientslid} >
                        {
                          HClintLo.map((item) =>{
                            return(
                              <div className="item">
                                <HomeClient data={item}/>
                              </div>
                            )
                          })
                        }
                      </OwlCarousel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        

        <section className="ClintLogo wow fadeIn" data-wow-duration="2s">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 mx-auto">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex justify-content-around flex-wrap">
                    {
                      HCLogoLo.map((item) => {
                        return(
                          <HomeClintLogo data={item}/>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Index
