import React from 'react'

function GImagesFive(props) {

  return (
    <>
                  <div className="position-relative d-lg-inline-block d-none">
                    <img src={require(`../assets/images/${props.data.GIFimg1}`)} alt="" className="d-1 small-img animation-1" />
                    <img src={require(`../assets/images/${props.data.GIFimg2}`)} alt="" className="d-2 small-img animation-2" />
                    <img src={require(`../assets/images/${props.data.GIFimg3}`)} alt="" className="d-3 small-img animation-3" />
                    <img src={require(`../assets/images/${props.data.GIFimg4}`)} alt="" className="d-4 small-img animation-4" />
                    <img src={require(`../assets/images/${props.data.GIFimg5}`)} alt="" className="img-fluid wow fadeIn" data-wow-duration="2s" />
                  </div>
                  <img src={require(`../assets/images/${props.data.GIFimgMain}`)} alt="" className="img-fluid d-lg-none d-block mx-auto wow fadeIn" data-wow-duration="2s" />    

    </>
  )
}

export default GImagesFive