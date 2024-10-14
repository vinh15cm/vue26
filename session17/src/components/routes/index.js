// import AboutPage from "@/components/views/AboutPage.vue";
// import ContactPage from "@/components/views/ContactPage.vue";
// import FeedBack from "@/components/views/FeedBack.vue";
// import HomePage from "@/components/views/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
// import Userpage from "../views/Userpage.vue";
//b1: dinh nghia danh sach cac router
const router = createRouter({
    history: createWebHistory(),
    // routes:[
       
    //     {
    //         path:"/",
    //         alias:["/home","/home-page","/trang-chu"],
    //         component: import(/*webPackChunkName:"home"*/ "@/components/views/HomePage.vue"),
    //         name:"home",
    //     },
    //     {
    //         path:"/contactPage",
    //         component:ContactPage,
    //         name:"contact",
    //         redirect:"/"
    //     },
    //     {
    //         path:"/cboutPage",
    //         component:AboutPage,
    //         name:"about",
    //         redirect:"/feedback"

    //     },
    //     {
    //         path:"/feedBack",
    //         component:FeedBack,
    //         name:"feedback",

    //     },
    //     {
    //         path:"/user/:id",
    //         component:import("@/components/views/Userpage.vue"),
    //         name:"user",
    //         redirect:(to) => `/profile/${to.params.id}`,
            

    //     },
    //     {
    //         path:"/profile/:id",
    //         component:import("@/components/views/ProfilePage.vue"),
    //         name:"profilePage",
    //     },
    //     {
    //         path:"/list-prduct",
    //         component:import("@/components/views/ListProduct.vue"),
    //         name:"listProduct",
    //     },
    //     {
    //         path:"/:pathMath(.*)*",
    //         component:import("@/components/views/NotFound.vue"),
    //         name:"notFound",
    //     },
      
    //     {
    //         path:"/admin",
    //         component:import("@/components/views/AdminProduct.vue"),
    //         name:"admin",
    //         beforeEnter:(to,from,next)=>{
    //             const isAuthentication = true;
    //             if(isAuthentication){
    //                 // cho pheps chuyen sang trang admin
    //             }
    //         },
    //         children:[
    //             {
    //                 path:"manager-user",
    //                 component:import("@/components/views/ManagerUser.vue"),
    //                 name:"managerUser",
    //             },{
    //                 path:"manager-product",
    //                 component:import("@/components/views/ManagerProduct.vue"),
    //                 name:"managerProduct",
    //             },
    //         ]
    //     },
    // ]
})