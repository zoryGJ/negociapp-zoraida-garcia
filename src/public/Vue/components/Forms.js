app.component('sumatorias',{

    data(){
        return({
            title: 'Formulario',
            suma: ''
        })
    },
    methods:{
        sumar(event){
            event.preventDefault()

            const num1 = parseInt(event.target[0].value) 
            const num2 = parseInt(event.target[1].value)

            let sum = num1 + num2

            let obj = {
                num1,num2,sum
            }

            fetch('/sumar',{
                method: 'POST',
                body: JSON.stringify(obj), 
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                    data: JSON.stringify(obj)
                }
            }).then(res => res.json())
            .then(respuesta => {
                this.suma =  respuesta.resultado
            })
        }
    },
    template:
        `<form @submit="sumar">
            <input type="number" placeholder="Numero 1" required>
            <h3> + </h3>
            <input type="number" placeholder="Numero 2" required>

            <div class="unico"> 
                <button  type="submit">
                    sumar
                </button>
            </div>
            
        </form>
        <hr v-if="suma != '' "/>
        <h4 v-if="suma != '' ">El Resultado es: {{suma}} </h4>
        
        `

})