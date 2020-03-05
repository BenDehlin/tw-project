module.exports = {
  getPlayerVillages: async (req, res) => {
    try {
      db = req.app.get("db")
      const { player_id } = req.params
      const villages = await db.village.get_player_villages(player_id)
      const otherVillages = await db.village.get_other_player_villages(player_id)
      res.status(200).send({villages, otherVillages})
    } catch (err) {
      res.status(500).send(err)
    }
  },
  getVillageInfo: async (req, res) => {
    db = req.app.get("db")
    const { village_id } = req.params
    let villageInfoArr = await db.village.get_basic_village_info(village_id)
    let villageInfo = villageInfoArr[0]
    villageInfo.units = await db.village.get_village_unit_info(village_id)
    db.village
      .get_village_building_info(village_id)
      .then(results => {
        villageInfo.buildings = results
        return res.status(200).send(villageInfo)
      })
      .catch(err => res.status(500).send(err))
  },
  createVillage: async (req, res) => {
    try {
      db = req.app.get("db")
      const { player_id, village_name } = req.body
      const x_coord = Math.floor(Math.random() * 10)
      const y_coord = Math.floor(Math.random() * 10)
      const newVillage = { player_id, village_name, x_coord, y_coord }
      let villageIdArr = await db.village.create_new_village(newVillage)
      let { village_id } = villageIdArr[0]
      await db.village.create_building_info(village_id)
      let villageInfoArr = await db.village.get_basic_village_info(village_id)

      let villageInfo = villageInfoArr[0]
      const buildingResults = await db.village.get_village_building_info(
        village_id
      )
      villageInfo.buildings = buildingResults
      return res.status(200).send(villageInfo)
    } catch (err) {
      res.status(500).send(err)
    }
  }
}
