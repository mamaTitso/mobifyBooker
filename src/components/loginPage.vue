<template>
 <form>  
    <div id="center_align">
      <br><label >ID number</label>
      <input type="text" placeholder="Enter id number" required v-model="id"><br><br>
        <button type="button" @click="login()">Login</button>
      <br><br>
    </div>
 </form>
</template>

<script>

export default {
  name: 'login',
  data () {
    return{
      id: '',
    };
  },
  methods:{
    login(){
      //debugger;

      fetch(`http://localhost:3000/getIdNumber/'${this.id}'`)
      .then( response=> response.json())
      .then((results)=>{
        var discoverdUser = results.user;

        if(discoverdUser.data.length == 0 ||discoverdUser.data === undefined){
          this.$router.push({name:'userReg'});
        }
        else{
          debugger;
          var x = discoverdUser.data[0].user_type;
          //If you are a client
            if(x =="CLIENT"){
             //go to your cars
             this.$router.push({name:'clientDash', params: {id:discoverdUser.data[0]}})
             }
             else{
                //veiw all undone appointments
               this.$router.push({name:'techDash', params: {id:discoverdUser.data[0]}})
             }
        }
        
      })
      .catch(err=>{
        console.log(err);
      })

    }
  }
} 
</script>

<style scoped>
</style>
