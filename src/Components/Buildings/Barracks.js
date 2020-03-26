import React from "react"
import useInput from "../../hooks/useInput"
import { connect } from "react-redux"

const Barracks = ({ history, village }) => {
  const [{ spearman, warrior }, setValues] = useInput({
    spearman: "",
    warrior: ""
  })
  // const [barracksUnits] = useAxios('/api/units')
  return (
    <div>
      <div onClick={() => history.push("/village")}>back to village</div>
      <h1>Barracks</h1>
      <form
      onSubmit={e => {
        e.preventDefault()
        console.log({spearman, warrior})
      }}
      >
        <div>
          Spearman:{" "}
          <input
            type="number"
            name="spearman"
            value={spearman}
            onChange={setValues}
          />{" "}
        </div>
        <div>
          Warrior:{" "}
          <input
            type="number"
            name="warrior"
            value={warrior}
            onChange={setValues}
          />{" "}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

const mapStateToProps = ({ villageReducer }) => {
  const { village } = villageReducer
  return { village }
}

export default connect(mapStateToProps)(Barracks)
