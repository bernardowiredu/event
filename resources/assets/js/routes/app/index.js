//App Routes
let Dashboard = require('Views/app/Dashboard.vue')
let Contacts = require('Views/app/Contacts.vue')
let Events = require('Views/app/Events.vue')
let Create = require('Views/app/events/Create.vue')
let Test = require('Views/app/Test.vue')
let Login = require('Views/auth/Login.vue')
let Register =  require('Views/auth/Register.vue')

export default [

    {
        path:'/',
        component: Dashboard,
        name:'dashboard',
    },
    {
        path:'/contacts',
        component: Contacts,
        name:'contacts'
    },
    {
        path:'/events',
        component: Events,
        name:'events',
        children: [
            //
            // {
            //     path:'create',
            //     component: Create,
            //     name:'create'
            // }
        ]

    },
    {
        path:'/create',
        component: Create,
        name:'create'
    },
    {
        path:'/test',
        component:Test,
        name:'test'
    },
    {
        path:'/login',
        component:Login,
        name:'login'
    },
    {
        path:'/register',
        component:Register,
        name:'register'
    }

]
