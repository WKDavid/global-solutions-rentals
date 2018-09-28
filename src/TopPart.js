import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import GlobalSolutions from './images/HeaderLogo/GS.png'
import eMail from './images/HeaderLogo/eMailGif.gif'

class TopPart extends Component {

  state = {
    stickyVisible: false
  }

  changeStickyVisibility = () => {
    this.setState(pState => ({
      stickyVisible: !pState.stickyVisible
    }))
  }

  render() {

    const { stickyVisible } = this.state

    return (
      <header className="headerMainCont">
        <div className="sticky">
          <img className="stickyImg" src={eMail} onClick={(event) => {this.changeStickyVisibility()}} alt="instant contact form"/>
          {stickyVisible === true &&
            <form className="quickMailForm" action="/webformmailer.php" method="post">
              <label className="quickMailInputLabel">Full Name: </label>
              <input required className="quickMailInputTxt" type="text" name="full name"></input>
              <label className="quickMailInputLabel">Address: </label>
              <input required className="quickMailInputTxt" type="text" name="adress"></input>
              <label className="quickMailInputLabel">E-Mail: </label>
              <input required className="quickMailInputTxt" type="email" name="email"></input>
              <label className="quickMailInputLabel">Message: </label>
              <textarea rows="9" className="quickMailInputTxt" name="your message"></textarea>
              <input className="quickFormSubmitBtn" type="submit" name="submit" value="Submit"/>
              <input type="hidden" name="form_order" value="alpha"/>
              <input type="hidden" name="form_delivery" value="digest"/>
              <input type="hidden" name="form_format" value="html"/>
            </form>
          }
        </div>
        <Link className="GSMainCont" to="/"><img className="GSMainPic" src={GlobalSolutions} alt="global solutions"/></Link>
      </header>
    );
  }
}

export default TopPart;
