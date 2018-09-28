import React, { Component } from 'react'
import Iframe from 'react-iframe'


class ContactUsPage extends Component {

  render() {


    return (
      <div className="contactUsPageMainCont">
        <ul className="contactUList">
          <li className="liContactElemsEach">We Have The Highest Quality Of Customer Service</li>
          <li className="liContactElemsEach">Offering One Of The Youngest, Innovated  Fleets</li>
          <li className="liContactElemsEach">24/7 Customer Service Department </li>
          <li className="liContactElemsEach">Dedicated Account Manager Who Can Get You The Exact Machine Needed, Allowing A Discounted Rental Rate On Units To Keep Your Job Going.</li>
          <li className="liContactElemsEach">Servicing  Multi-Million Dollar Jobs, Industrial Businesses,  Contractors To Even A Weekend Homeowner Project</li>
        </ul>
        <Iframe url="https://www.google.com/maps/embed/v1/place?key=AIzaSyAMN5oBK7NBz7m6itwXmQFbdeYaWLdBASU&q=5555+W+3rd+St,+Los+Angeles,+CA+90036"
          width="59vw"
          height="21vw"
          className="gMap"
          display="initial"
          position="relative"
          allowFullScreen/>
          <p className="servicesTopTxtParagraph">If You Cannot Find Information You Are Looking For On Our Website Or Would Like Additional Information,
                                                 Then Please Do Not Hesitate To Contact Us. We Are More Than Happy To Speak To Customers And Resolve Any Enquiries
                                                 You May Have. Please Choose One Of The Contact Methods Below Or Use Our Quck Mesaging System In The Top Left Corner.</p>
      </div>
    );
  }
}

export default ContactUsPage;
