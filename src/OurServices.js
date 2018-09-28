import React, { Component } from 'react'
import mainImg01 from './images/OurServices/MainPic01.jpg'
import mainImg02 from './images/OurServices/MainPic02.jpg'
import mainImg03 from './images/OurServices/MainPic03.jpg'
import support from './images/OurServices/support.jpg'
import repair from './images/OurServices/repair.png'
import rates from './images/OurServices/rates.jpg'
import quickResponse from './images/OurServices/quickResponse.jpg'

class OurServices extends Component {

  render() {

    return (
      <div>
        <div className="servicesTopMain">
          <figure className="servicesTopEach">
            <figcaption className="servicesTopHead">24/7 Support Center</figcaption>
            <img className="servicesTopImg" src={support} alt="support"/>
            <p className="servicesTopTxt">We’re Here To Help Please Feel Free To Call Us Or Email Us If You Have Any Questions.</p>
          </figure>

          <figure className="servicesTopEach">
            <figcaption className="servicesTopHead">On-Site Service And Repairs</figcaption>
            <img className="servicesTopImg" src={repair} alt="repair"/>
            <p className="servicesTopTxt">Our Specialized Technicians  Guaranteeing On-Site Repairs Quickly And Professional.</p>
          </figure>

          <figure className="servicesTopEach">
            <figcaption className="servicesTopHead">Best Rental Rates</figcaption>
            <img className="servicesTopImg" src={rates} alt="rates"/>
            <p className="servicesTopTxt">Rentals Available From 1 Day To 1 Month To 1 Year Or More With Unbeatable Rental Rates.</p>
          </figure>

          <figure className="servicesTopEach">
            <figcaption className="servicesTopHead">Quick Response Time</figcaption>
            <img className="servicesTopImg" src={quickResponse} alt="quickResponse"/>
            <p className="servicesTopTxt">We Responding To A Customer Request In A Prompt And Professional Manner.</p>
          </figure>
        </div>

        <div className="servicesBigEach">
          <div className="servicesBigEachTextCont">
            <span className="servicesTopHead">Service</span>
            <p className="servicesTopTxtParagraph">Global Rental Solutions Is Committed To Providing Quick, Reliable Delivery Of The Absolute Best Available Scissor Lifts,
                                          Boom Lifts, And Aerial Lifts On The Worldwide Market Today. </p>
            <span className="servicesTopHead">Customer-Owned Machines</span>
            <p className="servicesTopTxtParagraph">Do You Own A Lift That Needs Service, Repair, Or Parts? Our Skilled Servicemen Are Qualified To Work With All Types And Brands
                                          Of Aerial Equipment And Have Undergone Training And Years Of Experience To Become Experts In The Business. </p>
          </div>
          <img className="servicesImgBig" src={mainImg01} alt="scissor lift"/>
        </div>

        <div className="servicesBigEach">
          <img className="servicesImgBig" src={mainImg02} alt="scissor lift"/>
          <div className="servicesBigEachTextCont">
            <span className="servicesTopHead">Maintenance</span>
            <p className="servicesTopTxtParagraph">Need Maintenance?  Our Shop Can Provide You Maintenance Programs And Servicing For Your Own Equipment</p>
            <span className="servicesTopHead">Major Repairs</span>
            <p className="servicesTopTxtParagraph">Considerable Damage To A Machine Often Renders It Unsafe Or Unusable.  The Service Technicians At Our Shop
                                          Have The Skills And Resources To Perform Major Repairs And Will Do Their Best To Get Your Lift Ready To Operate Again Promptly.</p>
          </div>
        </div>

        <div className="servicesBigEach">
          <div className="servicesBigEachTextCont">
            <span className="servicesTopHead">Parts</span>
            <p className="servicesTopTxtParagraph">Our Parts Department Is Stocked To Provide Top Of The Line Parts For Numerous Major Brands, Including Genie, Terex, And Skyjack.</p>
            <span className="servicesTopHead">24hrs A Day – 7 Days Per Week</span>
            <p className="servicesTopTxtParagraph">We Are Here To Assist You With Your Rental Needs  24/7</p>
          </div>
          <img className="servicesImgBig" src={mainImg03} alt="boom lift"/>
        </div>
      </div>
    );
  }
}

export default OurServices;
