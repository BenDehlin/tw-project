const bcrypt = require("bcryptjs")

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db")
    const { username, email, password} = req.body
    const emailResult = await db.auth.get_player_by_email(email)
    if (emailResult[0]) {
      return res.status(409).send("Email already registered")
    }
    const usernameResult = await db.auth.get_player_by_username(username)
    if (usernameResult[0]) {
      return res.status(409).send("Username taken")
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const user = await db.auth.register_player({
      username,
      email,
      hash
    })
    delete user[0].hash
    req.session.player = player[0]
    return res.status(200).send(req.session.player)
  },
  login: async (req, res) => {
    const db = req.app.get("db")
    const { username, password } = req.body
    const result = await db.auth.get_player_by_username(username)
    const player = result[0]
    if (!player) {
      return res.status(401).send("User not found.")
    }
    const isAuthenticated = bcrypt.compareSync(password, player.hash)
    if (!isAuthenticated) {
      return res.status(403).send("Incorrect Password.")
    }
    delete player.hash
    req.session.player = player
    return res.status(200).send(req.session.player)
  },
  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },
  getUser: (req, res) => {
    if (!req.session.player) {
      return res.status(401).send("User not found.")
    }
    res.status(200).send(req.session.player)
  }
}
