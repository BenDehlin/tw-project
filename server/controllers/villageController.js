module.exports = {
  getPlayerVillages: async (req, res) => {
    db = req.app.get("db")
    const { player_id } = req.params
    db.village
      .get_player_villages(player_id)
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err))
  },
  getVillageInfo: async (req, res) => {
    db = req.app.get("db")
    const { village_id } = req.params
    let villageInfoArr = await db.village.get_basic_village_info(village_id)
    let villageInfo = villageInfoArr[0] 
    db.village.get_village_building_info(village_id)
      .then(results => {
        villageInfo.buildings = results
        return res.status(200).send(villageInfo)
      })
      .catch(err => res.status(500).send(err))
  }
}
