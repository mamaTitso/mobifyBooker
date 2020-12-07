<template>
<div >
   <input type="checkbox" name="light" @click="value=true"> light<br>
   <input type="checkbox" name="brakes" @click="value=true">brakes<br>
   <input type="checkbox" name="conditioning" @click="value=true">conditioning<br>
   <input type="checkbox" name="seats" @click="value=true">seats<br>
   <input type="checkbox" name="doors" @click="value=true">doors<br>
   <input type="checkbox" name="tires" @click="value=true">tires<br>
   <input type="checkbox" name="belts" @click="value=true">belts<br>
   <input type="text" placeholder="add your comment" required v-model="comment">Comments<br>
   <br /><br /><button type="button" @click="fillInspection(this.$route.params.appoint)">Submit</button>
</div>
</template>

<script>

export default {
    name:'inspection',
    methods:{
        
        fillInspection(inspectionType){
            let inspectionsheet = {
                inspection_number:this.$route.params.id,
               inspection_type: inspectionType,
               light :this.light,
               brakes:this.brakes,
               conditioning :this.conditioning,
               seats:this.seats,
               doors:this.doors,
               tires:this.tires,
            comments:this.comments
        }
            fetch('http://localhost:3000/bookInspection/',{
              method: "POST",
            headers: {
                Accept: "application/json",
                    "Content-Type": "application/json"
             },
            body: JSON.stringify(inspectionType)
            })
            .then(results=>(results.json,console.log(results)))//alert('You successfully added an inspection')
        }
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