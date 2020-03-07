import React from "react"
import { Switch, Route } from "react-router-dom"
import BigVillage from "../BigVillage"
import Barracks from "./Barracks"
import Stable from "./Stable"
import TownCenter from "./TownCenter"
import Farm from "./Farm"
import Mine from "./Mine"

const BuildingRoutes = ({village}) => (
  <div>
    <Route
      exact
      path={"/village"}
      render={props => <BigVillage {...props} village={village} />}
    />
    <Route
      path={"/village/barracks"}
      render={props => <Barracks {...props} village={village} />}
    />
    <Route
      path={"/village/stable"}
      render={props => <Stable {...props} village={village} />}
    />
    <Route
      path={"/village/towncenter"}
      render={props => <TownCenter {...props} village={village} />}
    />
    <Route
      path={"/village/farm"}
      render={props => <Farm {...props} village={village} />}
    />
    <Route
      path={"/village/mine"}
      render={props => <Mine {...props} village={village} />}
    />
  </div>
)

export default BuildingRoutes
