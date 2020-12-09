<template>
<div >
    <h1>Welcome Back {{this.$route.params.id.name}} </h1>
    <br><button type="button" @click="bookInstallation()">BOOK INSTALLATION</button>
    <br><br>
    <table id="firstTable">
        <thead>
            <tr>
                <th>vehicle_registration</th>
                <th>vehicle</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(car, i) in cars" :key="i">
                <td>{{car.vehicle_registration}}</td>
                <td>{{car.make}}<br>{{car.model}}<br>{{car.colour}}</td>
            </tr>
         </tbody>
    </table><br><br>
    <h4>Appointments</h4>
    <table>
        <thead>
            <tr>
                <th>vehicle_registration</th>
                <th>appointmentType</th>
                <th>status</th>
                <th>date</th>
                <th>technician</th>
                <th>cancel</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(car, i) in appointments" :key="i">
                <td>{{car.car_reg}}</td>
                <td>{{car.app_type}}
                <td>{{car.app_status}}</td>
                <td>{{car.app_date}}   
                <td>{{car.technician}}</td>
                <button type="button">Cancel</button>
    
            </tr>
         </tbody>
    </table>
</div>
</template>

<script>

export default {
    name:'clientRegistration',
    data(){
        return {
            cars:null,
            appointments:null
        }
    },
    methods:{
        getCars(){
        fetch(`http://localhost:3000/getUserId/${this.$route.params.id.user_id}`)
        .then(response=>response.json())
        .then(results=>(this.cars = results.user.data))
        },
        getAppoinments(){
            fetch(`http://localhost:3000/getClientAppointments/${this.$route.params.id.user_id}`)
            .then(results=>results.json())
            .then((response)=>(this.appointments = response.user.data))
        },
        bookInstallation(){
            this.$router.push({name:'newInstall', params: {id:this.$route.params.id.user_id}})

        },
        bookInsepection(carId){
            fetch('http://localhost:3000/bookInspection/',{
              method: "POST",
            headers: {
                Accept: "application/json",
                    "Content-Type": "application/json"
             },
            body: carId 
            })
            .then(results=>(results.json,console.log(results)))//alert('You successfully added an inspection')
        }
    },
   mounted(){
       this.getCars()
       this.getAppoinments()
    }

}
</script>

<style scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: auto;
  align-items: center;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
</style>