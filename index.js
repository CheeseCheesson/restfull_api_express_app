import express from "express"
import fileupload from "express-fileupload"
import mongoose from "mongoose"
import router from "./router.js";


const app = express()
const PORT = 5000
const DB_URL = 'mongodb+srv://admin:Chaser@cluster0.2h7u2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

app.use(express.json())
app.use(fileupload({}))
app.use(express.static('static'))
app.use('/api', router)

async function startApp() {
    try{
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () => console.log("Подключено к БД"))
        app.listen(PORT, () => console.log("Приложение запущено на " + PORT + " порту"))
    }catch (e) {
        console.log("Сервер не работает. Ошибка:" + e)
    }
}

startApp()