let userdb = [
    {
        username:"hazim",
        password:"12345",
        name:"Hazim",
        email:"hazim@gmail.com"   
    },
    {
        username:"abu",
        password:"12345",
        name:"Abu",
        email:"abu@gmail.com"   
    },
    {
        username:"bakar",
        password:"12345",
        name:"Bakar",
        email:"bakar@gmail.com"   
    }
]

function login(username, password) {
    let matchuser = userdb.find(user => user.username == username)

    if(!matchuser) return "User not found!"

    if(matchuser.password == password){
        return matchuser
    }else{
        return "Invalid Password!"
    }
}

function register(username,password,name,email){
    userdb.push({
        username:username,
        password:password,
        name:name,
        email:email
    })
}

console.log (login("hazim","12345"))
console.log (login("jim","123"))
console.log (login("bakar","23"))

register("jim","123","Hazim","jim@gmail.com")

console.log (login("jim","123"))


