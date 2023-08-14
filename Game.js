
AFRAME.registerComponent("game",{
    schema:{
        elementId:{
            type:"string",default:"#ring1"
        },
        update:function(){
            this.iscollided(this.data.elementId)
        },
        iscollided:function(elementId){
            var element=document.querySelector(elementId)
            element.addEventlistener("collide",(e)=>{
                if(elementId.includes("#ring")){
                    console.log(elementId)
                }
                else if(elementId.includes("#hurdle")){
                    console.log(elementId)
                }
            })
        }
    }
})