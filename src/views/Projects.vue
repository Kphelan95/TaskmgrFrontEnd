<template>
  <div class="Project">
    <h1>Project </h1>

    <v-container class="my-5"> 
    <v-expansion-panels>
      <v-expansion-panel v-for="project in myProjects" :key="project.title" >

        <v-expansion-panel-header>
          {{project.title}}
        </v-expansion-panel-header>

         <v-expansion-panel-content class="px-4 gray-text">
           due by {{project.due}}
          </v-expansion-panel-content>
          <v-expansion-panel-content class="px-4 gray-text">
           {{project.content}}
          </v-expansion-panel-content>

        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
    
  </div>
</template>

<script>
// have a way to update projects, have a way to commincatie with the assigner
//have a note section maybe
import { mapState } from 'vuex';
export default {
data(){
    return{
      projects:[
        //{title:"test1", person:'f',due:'today',status:'ongoing',content:'content'},
        //{title:"test2", person:'d',due:'today',status:'finished',content:'content'},
        //{title:"test3", person:'a',due:'today',status:'finished',content:'content'},
        //{title:"test4", person:'kevbin',due:'today',status:'overdue',content:'content'},
        //{title:"test5", person:'kevbin',due:'today',status:'overdue',content:'content'},
      ]
    }
  },
  mounted(){
    this.getProjectData();
  },
  computed:{
    ...mapState(['projects']),
    myProjects(){
      return this.projects.filter(project =>{
        return project.person === 'kevbin'
        },
      )
    }
  },
  methods:{
    getProjectData(){
      this.projects=this.$store.state.projects;
    }
  }
}
</script>