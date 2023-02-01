const express = require('express')
const { dirname } = require('path')
const App = express()
const Path = require('path') 
const Router = require('./routes/routes')

//* configurando app
App.set('port', 3001)
App.set('views', Path.join(__dirname,'views'))
App.set('view engine', 'ejs')

//*variables statics para llamarlo en ejs
App.use(express.static(Path.join(__dirname, 'public')))


//*ejecutando el app
App.use('/', Router)


App.listen(App.get('port'), () => {
    console.log('se ejecuta en el puerto:', App.get('port'))
})

