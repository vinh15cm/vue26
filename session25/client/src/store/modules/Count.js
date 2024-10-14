const countModule ={
    state:{
        count:10,
    },
    mutations:{
        increasement(state){
            state.count++;
        },
        decreasement(state){
            state.count--;
        }
    },
    actions:{},
    getters:{
        doubleCount: (state)=>{
            return state*2;
        }
    }
}
export default countModule