import React from "react"
import { Route } from "react-router-dom"
import BigVillage from "../BigVillage"
import Barracks from "./Barracks"
import Stable from "./Stable"
import TownCenter from "./TownCenter"
import Farm from "./Farm"
import Mine from "./Mine"

const BuildingRoutes = props => (
  <div>
    <Route exact path={"/village"} component={BigVillage} />
    <Route path={"/village/barracks"} component={Barracks} />
    <Route path={"/village/stable"} component={Stable} />
    <Route path={"/village/towncenter"} component={TownCenter} />
    <Route path={"/village/farm"} component={Farm} />
    <Route path={"/village/mine"} component={Mine} />
  </div>
)

export default BuildingRoutes
