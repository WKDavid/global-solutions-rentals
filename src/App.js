import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import DatePicker from 'react-custom-date-picker'
import TopPart from './TopPart'
import BottomPart from './BottomPart'
import vlMain from './images/VerticalLifts/VertLiftsmain.jpg'
import Gr12 from './images/VerticalLifts/GenieGR12.JPG'
import Gr15 from './images/VerticalLifts/GenieGR15.jpg'
import Gr20 from './images/VerticalLifts/GenieGR20.jpg'
import slMain from './images/ScissorLifts/ScissorLiftsmain.jpg'
import Gs1530 from './images/ScissorLifts/GenieGS1530.jpg'
import Gs1930 from './images/ScissorLifts/GenieGS1930.jpg'
import Gs2032 from './images/ScissorLifts/GenieGS2032.jpg'
import blMain from './images/BoomLifts/Boommain.jpg'
import tbl from './images/BoomLifts/TelescopicBoomLift.jpg'
import abl from './images/BoomLifts/ArticulatingBoomLift.jpg'
import flMain from './images/ForkLifts/Forkmain.jpg'
import fl5k from './images/ForkLifts/5kLb.jpg'
import fl8k from './images/ForkLifts/8kLb.jpg'
import fl12k from './images/ForkLifts/12kLb.jpg'
import rflMain from './images/ReachForkLifts/ReachForkmain.jpg'
import gg5519 from './images/ReachForkLifts/GenieGTH5519.jpg'
import gg636 from './images/ReachForkLifts/GenieGTH636.jpg'
import gg844 from './images/ReachForkLifts/GenieGTH844.jpg'
import sksMain from './images/SkidSteers/SSteersmain.jpg'
import sks13h from './images/SkidSteers/13hLb.jpg'
import sks15h from './images/SkidSteers/15hLb.jpg'
import sks17h from './images/SkidSteers/17hLb.jpg'


class App extends Component {

  state = {
    equipmentData: [{typeName: "vertical lifts", mainPh: vlMain, subItems: [ {name: "Genie GR™-12", photoOf: Gr12}, {name: "Genie GR™-15", photoOf: Gr15},
                    {name: "Genie GR™-20", photoOf: Gr20} ]},
                   {typeName: "scissor lifts", mainPh: slMain, subItems: [ {name: "Genie GS™-1530", photoOf: Gs1530}, {name: "Genie GS™-1930", photoOf: Gs1930},
                    {name: "Genie GS™-2032", photoOf: Gs2032} ]},
                   {typeName: "boom lifts", mainPh: blMain, subItems: [ {name: "Telescopic Boom Lift", photoOf: tbl}, {name: "Articulating Boom Lift", photoOf: abl}]},
                   {typeName: "forklifts", mainPh: flMain, subItems: [ {name: "5000 Lb Forklift", photoOf: fl5k}, {name: "8000 Lb Forklift", photoOf: fl8k},
                    {name: "12000 Lb Forklift", photoOf: fl12k} ]},
                   {typeName: "reach forklifts", mainPh: rflMain, subItems: [ {name: "Genie GTH™-5519", photoOf: gg5519}, {name: "Genie GTH™-636", photoOf: gg636},
                    {name: "Genie GTH™-844", photoOf: gg844} ]},
                   {typeName: "skid steers", mainPh: sksMain, subItems: [ {name: "1300 Lb Skid Steer Wheel Loader", photoOf: sks13h}, {name: "1500 Lb Skid Steer Wheel Loader", photoOf: sks15h},
                    {name: "1750 Lb Skid Steer Wheel Loader", photoOf: sks17h} ]} ],
    cartCounter: 0,
    subList: "",
    dateStart: null,
    endDate: null
  }

  makePhoneCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`)
  }

  handleDateChangeStart = (dateStart) => {
    this.setState({ dateStart })
  }

  handleDateChangeEnd = (endDate) => {
    this.setState({ endDate })
  }

  equipmentList = () => {
    let eqTopList = this.state.equipmentData.map(aPiece => { return <div className="eqEachCont" key={aPiece.typeName}>
                                                                        <img className="eqListPhotos" src={aPiece.mainPh} alt="machinery"/>
                                                                        <span className="eqListNames">{aPiece.typeName}</span>
                                                                    </div> })
    return eqTopList
  }

  render() {

    const { subList, cartCounter } = this.state

    return (
      <div>
        <Route exact path="/" render={() => (
            <div>
              <TopPart onCartCounter={cartCounter} onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
              <main>
                <div className="inputMainCont">
                  <span className="inputUpperText">Global, rentals made easy</span>
                  <div className="inputRowCont">
                    <input className="inputBoxEquipment" type="text"/>
                    <input className="inputBoxAddress" type="text"/>
                    <DatePicker
                      placeholder="Start Date"
                      color="#003F7F"
                      minDate={new Date()}
                      date={this.state.dateStart}
                      handleDateChange={this.handleDateChangeStart}
                    />
                    <DatePicker
                      placeholder="End Date"
                      color="#003F7F"
                      minDate={this.state.dateStart}
                      date={this.state.endDate}
                      handleDateChange={this.handleDateChangeEnd}
                    />
                  </div>
                </div>
                <div className="equipmentList">
                  {this.equipmentList()}
                </div>
              </main>
              <BottomPart onMakePhoneCall={ (phoneNumber) => { this.makePhoneCall(phoneNumber) }}/>
            </div>
          )}
        />
        <Route exact path={subList} render={() => (
            <div>

            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
