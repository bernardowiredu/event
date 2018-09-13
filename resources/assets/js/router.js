import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '~/routes'


Vue.use(VueRouter)

//creating a vue router object

const router  = new VueRouter(

    {
        mode:'history',
        routes,


        scrollBehaviour(to,from,savePosition){

            if(saveposition){
                return savePosition
            }else{
                return{x:0, y:0}

            }
        }
    }
)

export default router
