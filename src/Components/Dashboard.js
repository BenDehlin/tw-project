import React, { useState, useEffect } from "react"
import { createUseStyles } from "react-jss"
import { connect } from "react-redux"
import useCheckPlayer from "../hooks/useCheckPlayer"
import useAxios from "../hooks/useAxios"
import SmallVillage from "./SmallVillage"
import BigVillage from "./BigVillage"
import { setVillages, setVillage } from "../redux/villageReducer"

const useStyles = createUseStyles({
  dashboardStyle: {
    display: "flex",
    width: "100%",
    minHeight: "100vh",
    justifyContent: "space-around"
  },
  sideSection: {
    display: "flex",
    flexFlow: "column"
  }
})

const Dashboard = ({ player, history, setVillages }) => {
  useCheckPlayer(player, history.push)
  const [villages] = useAxios({
    url: `/api/villages/${player.player_id}`,
    callback: setVillages
  })
  const { dashboardStyle, sideSection } = useStyles()
  const [currentVillage, setCurrentVillage] = useState(0)
  return (
    <div className={dashboardStyle}>
      <div className={sideSection}>
        <div>{player.username}</div>
        {villages[currentVillage] && (
          <BigVillage village_id={villages[currentVillage].village_id} />
        )}
      </div>
      <div className={sideSection}>
        {villages &&
          villages.map((village, i) => (
            <SmallVillage
              key={village.village_id}
              setCurrentVillage={setCurrentVillage}
              village={village}
              i={i}
            />
          ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { player } = state.authReducer
  return { player }
}

export default connect(mapStateToProps, { setVillages, setVillage })(Dashboard)
