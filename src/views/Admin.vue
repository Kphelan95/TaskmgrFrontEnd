<template>
    <div>
        <v-card class='ma-4' align="center" justify="center">
            <h1>User settings</h1>
            <v-tabs fixed-tabs background-color="indigo" dark >
                <v-tab v-on:click="currentUserComponent =formCompnents.makeUser">Create User </v-tab>
                <v-tab v-on:click="currentUserComponent =formCompnents.deleteUser">Delete User</v-tab>
                <v-tab>Reset User password</v-tab>
                <v-tab>update user settings</v-tab>
                <v-tab v-on:click="currentUserComponent =formCompnents.clear">Clear</v-tab>
            </v-tabs>
            <component :is="currentUserComponent"></component>
        </v-card>
        <v-card class='ma-4' align="center" justify="center">
            <h1> Team settings </h1>
            <v-tabs fixed-tabs background-color="indigo" dark >
                <v-tab v-on:click="currentUserComponent =formCompnents.makeUser">Create Team </v-tab>
                <v-tab>Update Team</v-tab>
                <v-tab>Delete Team</v-tab>
                <v-tab>Team settings</v-tab>
            </v-tabs>
        </v-card>
    </div>
</template>





<script>
//i want this page to have all the admin stuff
//team creation
//assign people to teams
// should have a list of all users
// should have a list of all teams


//todo
/*
create a user
reset a users psw
delelte a user
update a users settings

create a team
add people to teams
remove people from teams

*/




import makeUser from '@/components/CreateUser.vue'
import deleteUser from '@/components/DeleteUser.vue'


export default {
  components:{ makeUser,deleteUser},
  data(){
    return{
      projects:[],
      user:[],
      test:'',
      currentUserComponent:'',
      currentTeamComponent:'',
      id:'',
      formCompnents:{
          makeUser:'makeUser', 
          deleteUser:'deleteUser',
          clear:''
        }
    }
  },
  mounted(){
    this.user = this.$store.getters.getTeams;
    this.project = this.$store.getters.getUsers;
  },
  methods:{
      print(){
          console.log(this.currentUserComponent);
      }
  }
}
</script>