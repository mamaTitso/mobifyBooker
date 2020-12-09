<template>
  <form>
    <div id="checklist">
      <input type="checkbox" v-model="inspectionsheet.horn">Horn<br>
      <input type="checkbox" v-model="inspectionsheet.windshield">Windshield<br>
      <input type="checkbox" v-model="inspectionsheet.headlights">Head Lights<br>
      <input type="checkbox" v-model="inspectionsheet.speedometer">Speedometer<br>
      <input type="checkbox" v-model="inspectionsheet.tail_lights">Tail Lights<br>
      <input type="checkbox" v-model="inspectionsheet.spot_lights">Spot Lights<br>
      <input type="checkbox" v-model="inspectionsheet.foot_breakes">Foot Brakes<br>
      <input type="checkbox" v-model="inspectionsheet.frontSeat">Front Seat Adjustment<br>
      <input type="checkbox" v-model="inspectionsheet.indicator_lights">Indicator Lights<br>
      <input type="checkbox" v-model="inspectionsheet.air_condition">Heat/Air Conditioning<br>
      <input type="checkbox" v-model="inspectionsheet.steeringMachnism">Streering Mechanism<br>
      <input type="checkbox" v-model="inspectionsheet.body_condition">Body Condition/Damage<br>
      <input type="checkbox" v-model="inspectionsheet.exhaust_system">Muffler/Exhaust System<br>
      <input type="checkbox" v-model="inspectionsheet.parking_brake">Emergency/Parking Brake<br>
      <input type="checkbox" v-model="inspectionsheet.door_control">Door Control(opn,close,lock<br>
      <input type="checkbox" v-model="inspectionsheet.mirrors">Interior and Exterior rear view mirrors<br>
      <input type="checkbox" v-model="inspectionsheet.saftey_belts">Saftey belts for drivers and Pasengers<br>
      <input type="checkbox" v-model="inspectionsheet.tire_condition">Conition of the tires(including Tread Depth)<br>
      <br><textarea v-model="inspectionsheet.comment" placeholder="add a comment"></textarea><br>
      <button type="button" @click="fill()">Submit</button>
    </div>
  </form>
</template>

<script>

export default {
    name:'inspection',
    data(){
      return{
        inspectionsheet:{
            headlights:false,
            tail_lights:false,
            indicator_lights:false,
            spot_lights:false,
            foot_breakes:false,
            parking_brake:false,
            air_condition:false,
            windshield:false,
            frontSeat:false,
            steeringMachnism:false,
            door_control:false,
            horn:false,
            speedometer:false,
            body_condition:false,
            exhaust_system:false,
            tire_condition:false,
            mirrors:false,
            saftey_belts:false,
            comment:""
        }
      }
    },
    methods:{
      fill(){
        let sheet={
         app_no:this.$route.params.appoint,
         app_type:this.$route.params.id,
         headlights:this.headlights,
         tail_lights:this.tail_lights,
         indicator_lights:this.indicator_lights,
         spot_lights:this.spot_lights,
        foot_breakes:this.foot_breakes,
        parking_brake:this.parking_brake,
        air_condition:this.air_condition,
        windshield:this.windshield,
        frontSeat:this.frontSeat,
        steeringMachnism:this.steeringMachnism,
        door_control:this.door_control,
        horn:this.horn,
        speedometer:this.speedometer,
        body_condition:this.body_condition,
        exhaust_system:this.exhaust_system,
        tire_condition:this.tire_condition,
        mirrors:this.mirrors,
        saftey_belts:this.saftey_belts,
        comment:this.comment

        }
         fetch('http://localhost:3000/inspectionAdd/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sheet)
      })
        .then(response=>{response.json(),alert('SUBMMITTED')})
        .then(res=>this.$router.go(-1))
        .catch(error => {
          console.log('This is the error: ', error);
        });
      }
    }

}
</script>

<style scoped>
form{
  box-sizing: border-box;
  background-color: grey;
}
#checklist{
   align-items: 60px;
}
textarea{
  width:300px;
  height:100px;
}
</style>