import express, { Request, Response } from 'express'
//importar os endpoints aqui quando criados


const app = express()
app.use(express.json()) // Linha mágica (middleware)
app.post("/signup", nomeDoEndPoint);
app.post("/login", nomeDoEndPoint);
app.get("/myInfo", nomeDoEndPoint);
app.post("/changePassword", nomeDoEndPoint);
export default app 