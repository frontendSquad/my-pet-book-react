import React from 'react'

function footer() {
  return (
    <div>
    <footer className="position-relative  wow " data-wow-duration="3s">
        <div className="footer-top">
            <div className="container">
                <div className="row mt-2">
                    <div className="col-lg-3 col-md-6">
                        <a href="index.php"><img src={require('../assets/images/logo.png')} alt="" loading="lazy" /></a>
                        <p className="black f-18 mt-lg-4 mt-2"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                        <ul className="social-ul mt-3">
                            <li><a href="#_ "><i className="fab fa-facebook socialIcons "></i></a></li>
                            <li><a href="#_ "><i className="fab fa-instagram socialIcons "></i></a></li>
                            <li><a href="#_ "><i className="fab fa-twitter socialIcons "></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-3">
                        <h2>Useful Links</h2>
                        <ul>
                            <li><a href="index.php">Home</a></li>
                            <li><a href="about.php">About Us</a></li>
                            <li><a href="contact.php">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-3">
                        <h2>My Account</h2>
                        <ul>
                            <li><a href="privacy.php">Privacy Policy</a></li>
                            <li><a href="terms.php">Terms & Conditions</a></li>
                            <li><a href="#_">Feedback</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-lg-0 mt-3">
                        <h2>Make Donation</h2>
                        <a href="#_" className="d-inline-block general-btn mr-1">Donate <i className="fas fa-arrow-right ml-1"></i></a>
                        <div className="d-flex align-items-center flex-wrap">
                            <img src={require('../assets/images/card-1.png')} alt="" className="mx-1 paymentcard-img" />
                            <img src={require('../assets/images/card-2.png')} alt="" className="mx-1 paymentcard-img" />
                            <img src={require('../assets/images/card-3.png')} alt="" className="mx-1 paymentcard-img" />
                            <img src={require('../assets/images/card-4.png')} alt="" className="mx-1 paymentcard-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>      
    </div>
  )
}

export default footer
