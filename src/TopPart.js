import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GlobalSolutions from './images/HeaderLogo/GS.png'
import phoneIcon from './images/HeaderLogo/phoneIco.svg'
import shoppingC from './images/HeaderLogo/cartS.svg'

class TopPart extends Component {

  render() {
    const { onCartCounter, onMakePhoneCall } = this.props
    return (
      <div>
        <header className="headerMainCont">
          <div className="phoneCont" onClick={() => onMakePhoneCall("+13230000000")}><img className="topIcons" src={phoneIcon} alt="call us"/><span className="phNr">323 000 0000</span></div>
          <Link className="GSMainCont" to="/"><img className="GSMainPic" src={GlobalSolutions} alt="global solutions"/></Link>
          <Link className="shopCartCounter" to="/MyCart"><img className="topIcons" src={shoppingC} alt="shopping cart"/><span className="countNr">{onCartCounter}</span></Link>
        </header>
      </div>
    );
  }
}

export default TopPart;
