import React from 'react'

function HomeDogs() {
  return (
    <>
      {/* Dogs Start Here */}
      <section className="dogs position-relative">
        <img src="images/bone.png" alt="" className="img-fluid  bone" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="row">
                <div className="col-12">
                  <img src={require('../../../assets/images/dogs.png')} alt="" className="img-fluid w-100 wow fadeIn" data-wow-duration="2s" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dogs End Here */}      
    </>
  )
}

export default HomeDogs
