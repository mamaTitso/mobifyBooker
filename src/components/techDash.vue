<template>
<div >
    <h1>Welcome Back {{this.$route.params.id.name}} <br></h1>
    <h2>Here are all your appointments</h2>
    <table id="firstTable">
        <thead>
            <tr>
                <th>vehicle_registration</th>
                <th>appointmentType</th>
                <th>Place</th>
                <th>date</th>
                <th>car</th>
                <th>Inspection</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(car, i) in approved" :key="i">
                <td>{{car.car_reg}}</td>
                <td>{{car.appointment}}</td>
                <td>{{car.place}}</td>
                <td>{{car.appointment_date}}</td>
               <td>{{car.make}}<br>{{car.model}}<br>{{car.colour}}</td>
               <td><button type="button" @click="inspection1(car.appointment_number)">In</button>
                <button type="button" @click="inspection2(car.appointment_number)">Out</button></td>
                
            </tr>
         </tbody>
    </table><br><br>
    <h2> Requested Appointments</h2>
    <table>
        <thead>
            <tr>
                <th>vehicle_registration</th>
                <th>appointmentType</th>
                <th>Place</th>
                <th>date Requested</th>
                <th>car</th>
                <th>set date</th>
                <th></th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="(car, i) in cars" :key="i">
                <td>{{car.car_reg}}</td>
                <td>{{car.appointment}}</td>
                <td>{{car.place}}</td>
                <td>{{car.date_requested}}</td>
                <td>{{car.make}}<br>{{car.model}}<br>{{car.colour}}</td>
                <td><input type='datetime-local' v-model="datetime"></td>
                <td><button type='button' @click="approve(car.appointment_number)">APPROVE</button></td>
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
            approved:null,
            datetime:""
        }
    },
    methods:{
        unapproved(){
        fetch(`http://localhost:3000/getRequestedApp`)
        .then(response=>response.json())
        .then(results=>(this.cars = results.appointments.data))
        },
        yourAppoinments(){
            fetch(`http://localhost:3000/techAppointments/${this.$route.params.id.user_id}`)
            .then(results=>results.json())
            .then((response)=>(this.approved = response.appointments.data))
        },
        approve(appointmentNo){
            //APPROVE APPOINTMENTS 
            let appointment = {
                appoint_no:appointmentNo,
                appoint_time:this.datetime,
                technician :this.$route.params.id.user_id 
            };
            fetch('http://localhost:3000/approveAppointments', {
            method: 'PUT',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
            })
        },
        inspection1(appointmentNo){
            this.$router.push({name:'inspection', params: {id:'in',appoint:appointmentNo}})
        },
        inspection2(appointmentNo){
            this.$router.push({name:'inspection', params: {id:'out',appoint:appointmentNo}})
        }
    },
   mounted(){
       this.unapproved(),
       this.yourAppoinments()
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