import React from "react"
import { Route } from "react-router-dom"
import BigVillage from "../BigVillage"
import Barracks from "./Barracks"
import Stable from "./Stable"
import TownCenter from "./TownCenter"
import Farm from "./Farm"
import Mine from "./Mine"
import { connect } from "react-redux"

const BuildingRoutes = ({village}) => (
  <div>
    <Route
      exact
      path={"/village"}
      component={BigVillage}
    //   render={props => <BigVillage {...props} 
    //   village={village} 
    //   />
    // }
    />
    <Route
      path={"/village/barracks"}
      component={Barracks}
    //   render={props => <Barracks {...props} 
    //   village={village} 
    //   />
    // }
    />
    <Route
      path={"/village/stable"}
      component={Stable}
    //   render={props => <Stable {...props} 
    //   village={village} 
    //   />
    // }
    />
    <Route
      path={"/village/towncenter"}
      component={TownCenter}
    //   render={props => <TownCenter {...props} 
    //   village={village} 
    //   />
    // }
    />
    <Route
      path={"/village/farm"}
      component={Farm}
    //   render={props => <Farm {...props} 
    //   village={village} 
    //   />
    // }
    />
    <Route
      path={"/village/mine"}
      component={Mine}
    //   render={props => <Mine {...props} 
    //   village={village} 
    //   />
    // }
    />
  </div>
)

const mapStateToProps = ({ villageReducer }) => {
  const { village } = villageReducer
  return { village }
}


export default connect(mapStateToProps)(BuildingRoutes)
