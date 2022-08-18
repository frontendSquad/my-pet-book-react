import React from 'react'

function pet(props) {
  return (
    <>
      <div className="col-lg-4">
        <div className="pet-div text-center">
          <img src={require(`../../../assets/images/${props.data.Pimages}`)} alt="" className="img-fluid wow fadeIn" data-wow-duration="2s"/>
          <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">{props.data.PHeading}</h3>
          <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">{props.data.PPara}</p>
        </div>
      </div>


      {/* <section className="pet">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="row">
                <div className="col-lg-4">
                  <div className="pet-div text-center">
                    <img src={require('../../../assets/images/pet-1.png')} alt="" className="img-fluid wow fadeIn" data-wow-duration="2s" />
                    <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Pet Vaccine</h3>
                    <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga porro mollitia pariatur repellat sapiente ullam optio laboriosam? Et repellendus beatae deserunt</p>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-2">
                  <div className="pet-div text-center">
                    <img src={require('../../../assets/images/pet-2.png')} alt="" className="img-fluid wow fadeIn" data-wow-duration="2s" />
                    <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Pet Grooming</h3>
                    <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga porro mollitia pariatur repellat sapiente ullam optio laboriosam? Et repellendus beatae deserunt</p>
                  </div>
                </div>
                <div className="col-lg-4 mt-lg-0 mt-2">
                  <div className="pet-div text-center">
                    <img src={require('../../../assets/images/pet-3.png')} alt="" className="img-fluid wow fadeIn" data-wow-duration="2s" />
                    <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Medical Checkup</h3>
                    <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fuga porro mollitia pariatur repellat sapiente ullam optio laboriosam? Et repellendus beatae deserunt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}       
    </>
  )
}

export default pet
