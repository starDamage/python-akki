var objectVariable = {
    name:'Akshay',
    age:'2years',
    class:'MCA Final',
    greet:function(){
        console.log('hi this is '+this.name);
    }
};

// const hobbies =['Akshay','abhinav',26,50,15,true];
// const hobiies1 = hobbies.slice();
// console.log(hobiies1);
const hobbies2 = ({name,age})=>{
    console.log(name,age);
}

setTimeout(()=>{console.log(objectVariable);
},2000)
hobbies2(objectVariable);


// for(var hobby of hobiies1){
//   console.log(hobby);
  
// }


