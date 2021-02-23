<template>
  <div class="Dashboard">
    <h1>Dashboard </h1>
    
    <v-container class="my-5"> 
        <v-layout row class="mb-3">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
            <v-btn  text color="gray" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left >mdi-folder</v-icon>
              <span class="caption text-lowercase">by project</span>
            </v-btn>
            </template>
            <span>sort by the project name</span>
          </v-tooltip>

          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
          <v-btn text color="gray" @click="sortBy('person')"  v-bind="attrs" v-on="on">
            <v-icon left >mdi-account</v-icon>
            <span class="caption text-lowercase">by person</span>
          </v-btn>
          </template>
            <span>sort alphabetically</span>
          </v-tooltip>
        </v-layout>

        <v-card flat v-for="project in projects" :key="project.title" >
          <v-layout row wrap :class="`pa-3`"> 
            <v-flex xs12 md6 :class="`pl-2`">
              <div class="caption grey--text">project</div>
              <div>{{project.title}}</div>
            </v-flex>

            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Person</div>
              <div>{{project.person}}</div>              
            </v-flex>

            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Due Date</div>
              <div>{{project.due}}</div>              
            </v-flex>

            <v-flex xs6 sm4 md2>
              <div>
              <v-chip :class="` white--text`" :color="colors[project.status]">{{project.status}}</v-chip>  
            <!-- <v-chip class="test">hi mom</v-chip> -->
              </div>           
            </v-flex>


          </v-layout>
          <v-divider/>
        </v-card>
    </v-container>

  </div>
</template>

<script>
import { mapState } from 'vuex';
const colors = {
  ongoing: 'blue',
  finished: 'green',
  overdue: 'red'
}
//import { mdiFolder } from '@mdi/js';
export default {
  data(){
    return{
      projects:[],
      colors,
      test:''
    }
  },
  mounted(){
    this.test = this.$store.getters.getNewProject;
    this.getProjectData();
  },
    computed: {
     ...mapState(['projects'])
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b)=>a[prop] <b[prop] ? -1: 1)
    },
    getProjectData(){
      this.projects=this.$store.state.projects;
    }
  }
}
</script>

<style scoped lang="scss">

</style>