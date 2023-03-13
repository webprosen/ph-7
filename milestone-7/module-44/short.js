const myNumber = -1;

if(myNumber){
    console.log(200);
}

const isActive = false;
const showUser = () => console.log("Show user");
const hideUser = () => console.log("Hide user");
isActive ? showUser() : hideUser()
isActive && showUser()