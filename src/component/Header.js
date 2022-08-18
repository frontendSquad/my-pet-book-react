import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>

      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-11 mx-auto">
              <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
                <a className="navbar-brand" href="index.php">
                  <img src={require('../assets/images/logo.png')} alt="" loading="lazy" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav ml-auto align-items-lg-center main-nav">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="about.php" className="nav-link">About Us</Link></li>
                    <li className="nav-item "><Link to="shop.php" className="nav-link">Shop</Link></li>
                    <li className="nav-item "><a href="blog.php" className="nav-link">Blog</a></li>
                    <li className="nav-item "><a href="contact.php" className="nav-link">Contact Us</a></li>
                  </ul>
                  <ul className="navbar-nav ml-auto align-items-lg-center">
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        En <i className="fas fa-long-arrow-alt-down" />
                      </a>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#_">En</a>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link" href="cart.php">
                        <img src={require('../assets/images/cart.png')} alt="" />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link general-btn d-inline-block px-4 mr-2" href="signin.php">Sign In</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link general-btn d-inline-block px-4 mt-lg-0 mt-2" href="signup.php">Sign Up</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Header
