require("dotenv").config({ path: __dirname + "/../.env" })
const express = require("express")
const session = require("express-session")
const massive = require("massive")
const app = express()

const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

// app.use(express.static(`${__dirname}/../build`))

//CONTROLLERS
const authCtrl = require("./controllers/authController")
const villageCtrl = require("./controllers/villageController")

//MIDDLEWARE
const authMid = require("./middleware/authMiddleware")

app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
  })
)

//DB CONNECTION
massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log("Database connected")
  const io = require("socket.io")(
    app.listen(SERVER_PORT, () =>
      console.log(`Server listening on ${SERVER_PORT}`)
    )
  )
  io.on("connection", socket => {
    const db = app.get("db")
    // socket.on('login', body => gameCtrl.login())
  })
})

//ENDPOINTS
app.post("/auth/register", authCtrl.register)
app.post("/auth/login", authCtrl.login)
app.post("/auth/logout", authCtrl.logout)
app.get("/auth/user", authCtrl.getUser)

//VILLAGE ENDPOINTS
app.get(
  "/api/villages/:player_id",
  authMid.playersOnly,
  villageCtrl.getPlayerVillages
)
app.get(
  "/api/village/:village_id",
  authMid.playersOnly,
  villageCtrl.getVillageInfo
)
app.post("/api/village", authMid.playersOnly, villageCtrl.createVillage)
