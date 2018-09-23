//App Routes
let Dashboard = require('Views/app/Dashboard.vue')
let Contacts = require('Views/app/Contacts.vue')
let Events = require('Views/app/events/Events.vue')
let Create = require('Views/app/events/Create.vue')
let Test = require('Views/app/Test.vue')
let Login = require('Views/auth/Login.vue')
let Register =  require('Views/auth/Register.vue')
let Event = require('Views/app/events/Event.vue')
let EventDetail =  require('Views/app/events/EventDetail.vue')
let EventEdit = require('Views/app/events/EventEdit.vue')
let EventPayments = require('Views/app/events/EventPayments.vue')
let EventReminders =  require('Views/app/events/EventReminders.vue')
let EventAttendees  =  require('Views/app/events/EventAttendees.vue')
let Analytics =  require('Views/app/Analytics.vue')

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
        path:'/event',
        component: Event,
        name:'event',
        children: [
            {
                path:'',
                component: Events,
                name:'events'
            },
            {

                path:'create',
                component: Create,
                name:'create'
            },
            {
                path:':id',
                component:EventDetail,
                name:'details'
            },
            {
                path:':id/edit',
                component: EventEdit,
                name: 'eventEdit'
            },
            {
                path:':id/payments',
                component: EventPayments,
                name: 'payments'
            },
            {
                path:':id/reminders',
                component: EventReminders,
                name: 'reminders'
            },
            {
                path:':id/attendees',
                component: EventAttendees,
                name: 'attendees'
            }
        ]

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
    },
    {
        path:'/analytics',
        component: Analytics,
        name:'analytics'
    }

]
