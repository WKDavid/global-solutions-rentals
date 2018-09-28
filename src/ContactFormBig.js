import React, { Component } from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

class ContactFormBig extends Component {

  state = {
    date: new Date(),
    startDate: new Date(),
    endDate: "",
    chooseDatesVisibility: false
  }

  handleChangeStart = (date) => {
    this.setState({ startDate: date })
  }

  handleChangeEnd = (date) => {
    this.setState({ endDate: date })
  }

  changeStickyVisibility = () => {
    this.setState(pState => ({
      chooseDatesVisibility: !pState.chooseDatesVisibility
    }))
  }

  render() {

    const { date, chooseDatesVisibility, startDate, endDate } = this.state

    return (
      <form className="bigMailForm" action="/webformmailer.php" method="post">
        <div className="bigMailFormEachCont">
          <label className="bigInputLabel">First Name: </label>
          <input required className="bigInputTxt" type="text" name="first name"></input>
        </div>

        <div className="bigMailFormEachCont">
          <label className="bigInputLabel">Last Name: </label>
          <input className="bigInputTxt" type="text" name="Last name"></input>
        </div>

        <div className="bigMailFormEachCont">
          <label className="bigInputLabel">Company: </label>
          <input className="bigInputTxt" type="text" name="company"></input>
        </div>

        <div className="bigMailFormEachCont">
          <label className="bigInputLabel">E-Mail: </label>
          <input required className="bigInputTxt" type="email" name="email"></input>
        </div>

        <div className="bigMailFormEachCont">
          <label className="bigInputLabel">Jobsite Address: </label>
          <input required className="bigInputTxt" type="text" name="adress"></input>
        </div>

        <div className="bigMailFormEachCont">
          <label className="bigInputLabel">Your Phone Number: </label>
          <input required className="bigInputTxt" type="tel" name="phNr"></input>
        </div>

        <div className="bigMailFormEachCont">
          <label className="bigInputLabel">What Equipment Would You Need?: </label>
          <textarea rows="10" className="bigInputTxt" name="your message"></textarea>
        </div>

        <div className="bigMailFormEachCont">
          <label className="bigInputLabel">Brief Description Of Job: </label>
          <textarea rows="10" className="bigInputTxt" name="your message"></textarea>
        </div>

          <span tabIndex="0" onClick={(event) => {this.changeStickyVisibility()}} className="dateVisibilityBtn">Select Dates</span>
        {chooseDatesVisibility === true &&
          <div>
            <div className="bigMailFormEachCont">
              <label className="bigInputLabel">Start Date: </label>
              <InfiniteCalendar
                width={document.documentElement.clientWidth * 0.9 >= 400 ? 400 : document.documentElement.clientWidth * 0.9}
                height={document.documentElement.clientWidth * 0.14 <= 210 ? 210 : document.documentElement.clientWidth * 0.14}
                rowHeight={50}
                autoFocus={false}
                tabIndex={0}
                onSelect={this.handleChangeStart}
                selected={date}
                minDate={date}
              />
            </div>

            <div className="bigMailFormEachCont">
              <label className="bigInputLabel">End Date: </label>
              <InfiniteCalendar
                width={document.documentElement.clientWidth * 0.9 >= 400 ? 400 : document.documentElement.clientWidth * 0.9}
                height={document.documentElement.clientWidth * 0.14 <= 210 ? 210 : document.documentElement.clientWidth * 0.14}
                rowHeight={50}
                autoFocus={false}
                tabIndex={0}
                onSelect={this.handleChangeEnd}
                selected={startDate}
                minDate={startDate}
              />
            </div>
          </div>
        }
          <input type="hidden" name="start_date" value={startDate}/>
          <input type="hidden" name="end_date" value={endDate}/>
          <input className="bigFormSubmitBtn" type="submit" name="submit" value="Submit"/>
          <input type="hidden" name="form_order" value="alpha"/>
          <input type="hidden" name="form_delivery" value="digest"/>
          <input type="hidden" name="form_format" value="html"/>
      </form>
    );
  }
}

export default ContactFormBig;
