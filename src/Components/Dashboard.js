import React, { useState, useEffect } from "react"
import axios from "axios"
import { createUseStyles } from "react-jss"
import { connect } from "react-redux"
import useCheckPlayer from "../hooks/useCheckPlayer"
import useAxios from "../hooks/useAxios"
import SmallVillage from "./SmallVillage"
import BigVillage from "./BigVillage"
import MiniMap from "./MiniMap"
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
  const [currentVillage, setCurrentVillage] = useState(0)
  const [village, setVillage] = useState({
    village_id: "",
    village_name: "",
    x_coord: null,
    y_coord: null
  })
  useEffect(() => {
    if (villages && villages[0] && villages[0].village_id) {
      axios
        .get(`/api/village/${villages[currentVillage].village_id}`)
        .then(results => {
          setVillage(results.data)
        })
        .catch(err => console.log(err))
    }
  }, [villages, currentVillage])

  const { dashboardStyle, sideSection } = useStyles()
  const setLocalVillage = village_id => {
    const index = villages.findIndex(
      village => village.village_id === village_id
    )
    setCurrentVillage(index)
  }
  // console.log(villages)
  return (
    <div className={dashboardStyle}>
      <div className={sideSection}>
        <div>{player.username}</div>
        {village && village.village_id && (
          <BigVillage village={village} />
        )}
      </div>
      <div className={sideSection}>
        <MiniMap
          villages={villages}
          setVillage={setLocalVillage}
          village={village}
        />
        {villages &&
          villages.map((vill, i) => (
            <SmallVillage
              key={vill.village_id}
              setVillage={setLocalVillage}
              village={vill}
              activeVillage={village}
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
