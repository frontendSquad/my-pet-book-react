import React from 'react'
import BtnLink from './BtnLink'

function WhyChoose(props) {

  return (
    <>
                  <h4 className="footheading">{props.data.WCHeadingH4}</h4>
                  <h2 className="main-heading mt-lg-3 mt-2 wow fadeIn" data-wow-duration="2s">{props.data.WCHeadingH2}</h2>
                  <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">{props.data.WCPara}</p>
                  <BtnLink BtnPath={props.data.WCBtnPath} BtnClass={props.data.WCBtnClass} BtnText={props.data.WCBtnText} icon={props.data.WCBtnIcon} />
    </>
  )
}

export default WhyChoose