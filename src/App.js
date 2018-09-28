import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import TopPart from './TopPart'
import BottomPart from './BottomPart'
import ContactFormBig from './ContactFormBig'
import OurServices from './OurServices'
import ContactUsPage from './ContactUsPage'
import vlMain from './images/VerticalLifts/VertLiftsmain.png'
import Gr12 from './images/VerticalLifts/GenieGR12.png'
import Gr15 from './images/VerticalLifts/GenieGR15.png'
import Gr20 from './images/VerticalLifts/GenieGR20.png'
import slMain from './images/ScissorLifts/ScissorLiftsmain.png'
import Gs1530 from './images/ScissorLifts/GenieGS1530.png'
import Gs1930 from './images/ScissorLifts/GenieGS1930.png'
import Gs2032 from './images/ScissorLifts/GenieGS2032.png'
import blMain from './images/BoomLifts/Boommain.png'
import tbl from './images/BoomLifts/TelescopicBoomLift.png'
import abl from './images/BoomLifts/ArticulatingBoomLift.png'
import flMain from './images/ForkLifts/Forkmain.png'
import fl5k from './images/ForkLifts/5kLb.png'
import fl8k from './images/ForkLifts/8kLb.png'
import fl12k from './images/ForkLifts/12kLb.png'
import rflMain from './images/ReachForkLifts/ReachForkmain.png'
import gg5519 from './images/ReachForkLifts/GenieGTH5519.png'
import gg636 from './images/ReachForkLifts/GenieGTH636.png'
import gg844 from './images/ReachForkLifts/GenieGTH844.png'
import sksMain from './images/SkidSteers/SSteersmain.png'
import sks13h from './images/SkidSteers/13hLb.png'
import sks15h from './images/SkidSteers/15hLb.png'
import sks17h from './images/SkidSteers/17hLb.png'
import arrDown from './images/HeaderLogo/arrowDown.gif'
import demo01 from './images/DemoSlideShow/DemoGenieGS1530.png'
import demo02 from './images/DemoSlideShow/DemoGenieGS1930.png'
import demo03 from './images/DemoSlideShow/DemoGenieGS2032.png'

class App extends Component {

  state = {
    equipmentData: [{typeName: "vertical lifts", mainPh: vlMain, subItems: [ {name: "Genie GR™-12", photoOf: Gr12,
                    descr: `Compact, low-weight machines that increase productivity on the job. Efficient operation and convenient setup these Genie Runabout lifts are ideal for warehousing,
                            stock-picking, transporting, inventory management and general maintenance.`}, {name: "Genie GR™-15", photoOf: Gr15,
                    descr: `These lifts are compact, 17ft 4in, low-weight machines that increase productivity on the job. Efficient operation and convenient setup these
                            Runabout lifts are ideal for warehousing, stock-picking, transporting, inventory management and general maintenance.`},
                    {name: "Genie GR™-20", photoOf: Gr20, descr: `Compact, low-weight machines that increase productivity on the job thanks to their ability to fit through doorways and in
                                                                  most passenger elevators. And, it can be driven through doorways with operator on board. A zero inside turning radius and
                                                                  full elevation drive feature also contribute to these models’ increased productivity.`} ]},
                   {typeName: "scissor lifts", mainPh: slMain, subItems: [ {name: "Genie GS™-1530", photoOf: Gs1530,
                    descr: `A slab scissor lift. Boasting zero-emission electric operation and low noise levels, this unit excels in indoor and outdoor construction, maintenance
                            and installation applications on ﬁrm, level surfaces.`}, {name: "Genie GS™-1930", photoOf: Gs1930,
                    descr: `Efficient operation and convenient setup, these lifts offer precise up and over access — with outreach capability
                            to get virtually any job done. Runabout lifts are compact, low-weight machines that increase productivity on the job.`},
                    {name: "Genie GS™-2032", photoOf: Gs2032, descr: `Lifts of these series are compact, low-weight machines that increase productivity on the job thanks to their ability
                                                                      to fit through doorways and in most passenger elevators. And, it can be driven through doorways within operator on board.
                                                                      A zero inside turning radius and full elevation drive feature also contribute to these models’ increased productivity.`} ]},
                   {typeName: "boom lifts", mainPh: blMain, subItems: [ {name: "Telescopic Boom Lift", photoOf: tbl,
                    descr: `Telescopic boom lifts are engineered to enhance working efficiency and offer greater horizontal outreach than any other type of aerial platform.
                            Perfect for work in areas with limited access, Genie telescopic booms deliver industry-leading outreach and capacity throughout a full-working
                            envelope for incredible operational accessibility.`}, {name: "Articulating Boom Lift", photoOf: abl,
                    descr: `Articulating boom lifts provide the ability to lift up, over and out with precise positioning for ultimate versatility in hard-to-access work areas.
                            These lifts gained incredible popularity due to their unique “up-and-over” capabilities to navigate obstacles at height.`}]},
                   {typeName: "forklifts", mainPh: flMain, subItems: [ {name: "5000 Lb Forklift", photoOf: fl5k,
                    descr: `The 5,000 lb cushion tire warehouse forklift is designed for handling smaller palletized loads in a warehouse, factory, or indoor storage setting.
                            Their major advantage is their small turning radius, which allows operators to navigate tight aisles and congested areas with ease.
                            Its lifting arms can safely hold up to 5,000 lbs, making it a great tool for transporting palletized cargo across work sites, or stacking,
                            loading, and unloading shipments from truck beds or aisles.`},
                    {name: "8000 Lb Forklift", photoOf: fl8k, descr: `The 8,000 lb cushion tire warehouse forklift has a single mast range designed for reaching low-height
                                                                      storage areas or transporting heavy equipment. Its pallet forks can hold one pallet unit load at a time and
                                                                      have a carrying capacity of up to 8,000 lbs. The warehouse forklift cushion tires use a layer of thick smooth
                                                                      rubber wrapped around a metal band, providing operators better maneuverability within enclosed storage areas
                                                                      or cramped aisles.`},
                    {name: "12000 Lb Forklift", photoOf: fl12k, descr: `The 12,000 lb pneumatic tire warehouse forklift is used to carry, load, lift, and stack palletized units of heavy materials,
                                                                        like brick or cement. Its pallet forks can support loads of up to 12,000 lbs.
                                                                        Due to its ability to navigate surfaces with ease, they are used in lumber yards, indoor and outdoor warehouses, and
                                                                        construction and industrial sites. The pneumatic tire is great for storage settings, warehouse use, or any project that
                                                                        requires lifting of heavy materials.`} ]},
                   {typeName: "reach forklifts", mainPh: rflMain, subItems: [ {name: "Genie GTH™-5519", photoOf: gg5519,
                    descr: `Compact telehandler is the perfect choice for tasks both large and small. Easy to maneuver and transport, and convenient to service,
                            it meets the needs of most construction, masonry, landscape and agricultural applications.`},
                    {name: "Genie GTH™-636", photoOf: gg636, descr: `The telehandler is a heavy-duty, yet compact, workhorse for lifting applications in construction, landscaping and agriculture.
                                                                     Powerful features such as four-wheel drive and a turbocharged diesel engine provide reliable performance in the most rugged
                                                                     conditions.`},
                    {name: "Genie GTH™-844", photoOf: gg844, descr: `The telehandler offers excellent lift capacity, making it an ideal machine for loading/unloading and moving/placing materials,
                                                                     as well as cleanup, on a variety of jobsites. Choose from an industry-leading 74-hp Tier 4 final Deutz 3.6L engine.`} ]},
                   {typeName: "skid steers", mainPh: sksMain, subItems: [ {name: "1300 Lb Skid Steer Wheel Loader", photoOf: sks13h,
                    descr: `The 1,300 lb wheel skid steer loader is a diverse machine commonly used for construction jobs and do-it-yourself yard projects.
                            What makes the skid steer loader so versatile is its ability to equip different attachments to its lifting arms, like smooth and tooth buckets,
                            grapple buckets, pallet forks, heavy-duty augurs, hay spears, and more. Typical applications include lifting and transporting heavy materials
                            or boring holes, depending on which attachment is equipped. The 1,300 lb skid steer loader can rotate a full 360 degrees with its footprint,
                            making it easy to maneuver in tight spaces.`},
                    {name: "1500 Lb Skid Steer Wheel Loader", photoOf: sks15h, descr: `Ideal for working in tight spaces and confined areas, this skid-steer can help complete your
                                                                                       job safely and efficiently. Skid-Steer Loaders feature four-wheel drive and a unique steering system
                                                                                       that allows them to turn 360º within their own length.`},
                    {name: "1750 Lb Skid Steer Wheel Loader", photoOf: sks17h, descr: `The 1,750 lb wheel skid steer loader is a medium-frame machine ideal for jobs in congested areas or enclosed
                                                                                       work zones with limited space. The skid steer’s lifting arms can be equipped with dozens of attachments.
                                                                                       Because of its multi-functionality, the skid steer loader is one of the most common machines found
                                                                                       on construction, industrial, and maintenance job sites.`} ]} ],
    currentDemo: demo01,
    subList: []
  }

  componentDidMount = () => {
    this.quickImgChange()
  }

  makePhoneCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`)
  }

  equipmentList = () => {
    let eqTopList = this.state.equipmentData.map(aPiece => { return <Link to="subList" onClick={(event) => {this.equipmentSubList(aPiece.typeName)}} className="eqEachCont" key={aPiece.typeName}>
                                                                        <img className="eqListPhotos" src={aPiece.mainPh} alt="machinery"/>
                                                                        <span className="eqListNames">{aPiece.typeName}</span>
                                                                    </Link> })
    return eqTopList
  }

  equipmentSubList = (mainName) => {
    let filtSubList = this.state.equipmentData.filter(anEqObj => {return anEqObj.typeName === mainName}).map(anEqObjArr => {return anEqObjArr.subItems})
    let eqSubList = filtSubList[0].map(aSubPiece => { return <div className="subEachCont" key={aSubPiece.name}>
                                                                  <img className="subListPhoto" src={aSubPiece.photoOf} alt="machinery"/>
                                                                  <span className="subListName">{aSubPiece.name}</span>
                                                                  <p className="subListText">{aSubPiece.descr}</p>
                                                                  <Link to="instantQuickBook" className="eqSubListBtn">Instant Request</Link>
                                                              </div> })
    this.setState({ subList: eqSubList })
  }

  scrollToMain = () => {
    const mainElement = document.getElementsByClassName("equipmentList")[0];
    mainElement.scrollIntoView();
  }

  quickImgChange = () => {
    this.state.currentDemo === demo01 ? this.setState({ currentDemo: demo02 }) : this.state.currentDemo === demo02 ? this.setState({ currentDemo: demo03 }) : this.setState({ currentDemo: demo01 });
    setTimeout(this.quickImgChange, 2000)
  }

  render() {

    return (
      <div>
        <Route exact path="/" render={() => (
            <div>
              <main>
                <div className="backMainCont">
                  <TopPart/>
                  <div className="quickMainCont">
                    <img className="quickImg" src={this.state.currentDemo} alt="demonstration slideshow"/>
                  </div>
                  <nav className="navMainCont">
                    <Link to="instantQuickBook" className="navBtn">Quick book</Link>
                    <Link to="ourServices" className="navBtn">Our services</Link>
                    <Link to="contactUs" className="navBtn">Contact Us</Link>
                    <figure className="torArrFig">
                      <figcaption onClick={(event) => {this.scrollToMain()}} className="viewEquipTxt">View Equipment</figcaption>
                      <img onClick={(event) => {this.scrollToMain()}} className="arrTopDown" src={arrDown} alt="arrow down"/>
                    </figure>
                  </nav>
                </div>
                <div className="equipmentList">
                  {this.equipmentList()}
                </div>
              </main>
              <BottomPart onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
            </div>
          )}
        />
        <Route exact path="/subList" render={() => (
            <div>
              <TopPart onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
              <div className="equipmentList">
              {this.state.subList}
              </div>
              <BottomPart onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
            </div>
          )}
        />
        <Route exact path="/instantQuickBook" render={() => (
            <div>
              <TopPart onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
              <ContactFormBig/>
              <BottomPart onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
            </div>
          )}
        />
        <Route exact path="/ourServices" render={() => (
            <div>
              <TopPart onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
              <OurServices/>
              <BottomPart onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
            </div>
          )}
        />
        <Route exact path="/contactUs" render={() => (
            <div>
              <TopPart onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
              <ContactUsPage/>
              <BottomPart onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
