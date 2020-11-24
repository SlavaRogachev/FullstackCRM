const app = require('./app')
const dotenv = require('./.env') // это костыль
// const port = proccess.env.PORT || 8000
const port = dotenv.PORT || 2000


console.log(process.env.PORT)

app.listen(port, () => console.log(`Server has been started on ${port}`))