import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects:[//
      //change person to assigned too
      //add made by
      {title:"test1", person:'f',madeby:'',team:[], due:'today',status:'ongoing',content:'content'},
      {title:"test2", person:'d',madeby:'',team:[], due:'today',status:'finished',content:'content'},
      {title:"test3", person:'a',madeby:'',team:[], due:'today',status:'finished',content:'content'},
      {title:"test4", person:'kevbin',madeby:'',team:[], due:'today',status:'overdue',content:'content'},
      {title:"test5", person:'kevbin',madeby:'',team:[], due:'today',status:'overdue',content:'content'},
      {title:"lud7", person:'kevbin',madeby:'',team:[], due:'today',status:'overdue',content:'lud7'},
    ],
    currentUser:[
      {person:"bob smith", team:'team1'}
    ],
    Teams:[
      { name: 'the ner ninja', role:'vue dev'},
      { name: 'trall', role:'datasatge'},
      { name: 'jania', role:'ssis dev'},
      { name: 'misfit', role:'sys admin'},
      { name: 'brian', role:'cheif'},
    ],
    Users:[
      {person:"person1",ID:"1" , state:'one',adress:'one', city:'one', zipCode:'one',team:'one'},
      {person:"person2",ID:"2", state:'two',adress:'two', city:'two', zipCode:'two',team:'two'},
      {person:"person3",ID:"3", state:'three',adress:'three', city:'three', zipCode:'three',team:'three'},
      {person:"person4",ID:"4", state:'four',adress:'four', city:'four', zipCode:'four',team:'four'},
      {person:"testVal",ID:"5", state:'five',adress:'five', city:'five', zipCode:'five',team:'five'},
    ]
  },
  mutations: { // update states
    setnewProject(state, payload){
      state.projects.push(payload);
    }
  },
  actions: {
    //fetch new stuff
  },
  modules: {
  },
  getters:{
    getTeams: state => state.Teams,
    getUsers: state => state.Users
  }
})
