const express = require('express')
const  router = express.Router()
const modelSuma = require('./../models/bsProcess')() 

//* asignando rutas a enrutador router(rutas)
router.get('/',(req,res)=>{
    res.render('index') 
})

router.post('/sumar', (req, res)=>{

    const {num1, num2, sum} = JSON.parse(req.headers.data)

    let objInsert = {num1, num2, sum} 

    modelSuma.create(objInsert, (err, data)=>{
        let respuesta = {}

        if (err) {
            respuesta.error = err
            respuesta.proceso = 'Salio mal el proceso'
            respuesta.status = 500
        }else{
            respuesta.proceso = 'se insertó correctamente'
            respuesta.resultado = sum
            respuesta.status = 200
        }

        res.status(respuesta.status).json(respuesta)
    })
})


module.exports = router 

