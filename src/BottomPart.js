import React, { Component } from 'react'
import phoneSmall from './images/FooterIcons/bluePhSmall.svg'
import phoneBig from './images/FooterIcons/bluePhBig.svg'
import mailSm from './images/FooterIcons/blueMail.svg'
import pinSm from './images/FooterIcons/bluePin.svg'
import supportB from './images/FooterIcons/blueSupport.svg'

class BottomPart extends Component {

  render() {

    const { onMakePhoneCall } = this.props

    return (
      <div>
        <footer className="footerMainCont">
          <figure className="contactCont">
            <img className="contactBtIco" src={supportB} alt="contact us"/><figcaption className="contactBtTxt">Contact Us</figcaption>
          </figure>
          <div className="footerInfoCont">
            <a href="https://www.google.com/maps/place/5555+W+3rd+St,+Los+Angeles,+CA+90036/@34.0690864,-118.3431717,17z/data=!4m5!3m4!1s0x80c2b8deae7b7e0d:0x3e8330533cb33a13!8m2!3d34.0690864!4d-118.340983" target="_blank" rel="noopener noreferrer">
                <img className="btIcons" src={pinSm} alt="our address"/><span className="btText">5555 Third St Los Angeles CA 90201</span></a>
            <div className="phoneCont" onClick={() => onMakePhoneCall("+13230000000")}><img className="btIcons" src={phoneSmall} alt="call us"/><span className="btText">323 000 0000</span></div>
            <div className="phoneCont" onClick={() => onMakePhoneCall("+13230000000")}><img className="btIcons" src={phoneBig} alt="call us"/><span className="btText">323 000 0000</span></div>
            <a href="mailto:Info@Globalsolutions.Rentals"><img className="btIcons" src={mailSm} alt="call us"/><span className="btText">Info@Globalsolutions.Rentals</span></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default BottomPart;
