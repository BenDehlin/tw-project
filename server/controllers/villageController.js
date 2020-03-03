module.exports = {
  getPlayerVillages: async (req, res) => {
    db = req.app.get("db")
    const { player_id } = req.params
    db.village
      .get_player_villages(player_id)
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err))
  },
  getVillageInfo: (req, res) => {
    db = req.app.get("db")
    const { village_id } = req.params
    console.log(village_id)
    db.village
      .get_village_info(village_id)
      .then(results => res.status(200).send(results[0]))
      .catch(err => res.status(500).send(err))
  }
}