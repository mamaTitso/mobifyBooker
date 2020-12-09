<template>
  <form>
    <h1>WELCOME NEW CLIENT</h1>
    <h5>Please fill in the following to register</h5>
    <br /><label>ID number</label>
    <input type="text" placeholder="Enter id number" v-model="user.id" />
    <br /><br /><label>full Name</label>
    <input type="text" placeholder="Enter full name" v-model="user.name" />
    <br /><br /><label>Physical Address</label>
    <input type="text" placeholder="Enter your address" v-model="user.address"/>
    <br /><br /><label>Cellphone number</label>
    <input type="text" placeholder="Enter your cell number" v-model="user.number"/>
    <br /><br /><label>Email Address</label>
    <input type="text" placeholder="Enter your cell number" v-model="user.email"/>
  <br /><br /><label>Are you a </label>
   <select v-model="user.userType" aria-placeholder ="Please select one">
    <option>client</option>
    <option>technician</option>
</select>
    <br /><br /><button type="button" @click="addUser()">Submit</button>
  </form>
</template>

<script>
export default {
  name: "clientRegistration",
  data() {
    return {
      user: {
        userType:"",
        id: "",
        name: "",
        address: "",
        number: "",
        email:""
      }
    };
  },
  methods: {
    addUser() {
      debugger;
      var isTechnician = ""

      if(this.user.userType == "client")
        isTechnician=false;
      else
        isTechnician=true;

      let newUser = {
        _is_technician: isTechnician,
        _user_id: this.user.id,
        _name: this.user.name,
        _address: this.user.address,
        _cellphone_number: this.user.number,
        _email :this.user.email
      };
      fetch("http://localhost:3000/addNewUser/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      })
        .then(this.$router.go(-1))
        .catch(error => {
          console.log("This is the error: ", error);
        });
    }
  }
};
</script>
