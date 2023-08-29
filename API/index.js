// index
const {express, routes} = require('./controller')
const app = express()
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const errorHandling = require('./middleware/ErrorHandling')
const port = +process.env.PORT || 3000

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Expose-Headers", "*");
    next()
})

routes.get('^/$|/home',(req, res)=>{
    res.sendFile(path.resolve(__dirname, './static/HTML/index.html'))
})

app.use(
    express.static('./static'),
    express.urlencoded({
        extended: false
    }),
    cookieParser(),
    cors(),
    routes
)

app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`The server is running on port ${port}`);
})