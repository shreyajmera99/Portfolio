let cpuI = Math.floor(Math.random()*3)
console.log(cpuI)
let user = prompt('Enter S ,P,C')


let cpu = {
  0:'S',
  1:'P',
  2:"C"
}
const match = (user,cpu)=>{
  if(cpu === user){
    return 'Match is tied'
  }
  else if(cpu  === "S" && user=== "P"){
    return 'user';  
  }
  else if(cpu=== "P" && user=== "S"){
    return 'cpu'
  }
  else if(cpu==="C" && user=="S"){
    return 'user'
  }
  else if(cpu==="S" && user==="C"){
    return 'cpu'
  }
  else if(cpu==="P" && user==="C"){
    return 'user'
  }
  else if(cpu==="C" && user==="P"){
    return 'cpu'
  }
};
let result = match(user,cpu[cpuI])
prompt(`CPU is ${cpu[cpuI]} and User is ${user},winner is ${result}`)
