<template>
    <table>
        <thead>
            <tr>
                <th>date_booked</th>
                <th>date_done</th>
                <th>status</th>
                <th>technician</th>
                <th>Inspection</th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="(car, i) in inspections" :key="i">
                <td>{{car.vehicle_registration}}</td>
                <td>{{car.date_done}}</td>
                <td>{{car.status}}</td>
                <td>{{car.technician}}</td>
                <td><button type="button" @click="deleted()">Delete</button></td>
            </tr>
         </tbody>
    </table>
</template>
<script>
export default {
    name:'veiwInspection',
    data(){
      return{
        inspections:{
          inspect:'',
          vehicle_registration:'',
          date_done:'',
          status:'',
          technician:''
        }
      }
    },
  methods:{
     getSpecs(){
         fetch(`http://localhost:3000/getBooking/${this.$route.params.id}`)
         .then(response=>response.json())
         .then(results=>(this.inspections = results.user.data,console.log(results.user.data)))
      },
      deleted(){
        var newObj={
          inspectNo:this.inspections.inspection,
          deleted:this.route.params.client_number
        }
      fetch('http://localhost:3000/cancelBooking/', {
        method: 'PUT',
        headers: {
         'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newObj)
      })
      }
    }, 
    mounted(){
      this.getSpecs();
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