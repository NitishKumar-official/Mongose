
//ye line connect krta hai page ko database se

const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{
    console.log("connection done");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');`
//    if your database has auth enabled
}

   

// define schema 


const userSchema = new mongoose.Schema({
    name:String,
    eamil: String,
    age:Number,
})



//connection of database with js file



 const User = mongoose.model("User", userSchema);   
// const Product = mongoose.model("Product", userSchema);

// User.find({})                                  => isse pura user ka data print hoga
// User.find({age:{$gt:48}})                      => isse condition ke according data print hoga
/*User.findOne({age:{$gt:48}})                      =>isse condition ke according sirf ek data print hoga
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
*/


//find by id


User.findById("66464e7b4ee8df29ef815aee")                     
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});







//jab ek baar me ek hi insert krna ho tab

/*const user2 = new User({
    name:"Eve",
    eamil:"EVE@gmail.com",
    age:50,
})

user2
.save()
.then((res)=>{
console.log(res);
})
.catch((err)=>{
console.log(err);    
});*/


//jab ek baar me bahuut sara insert krna ho tb


/*User.insertMany([
    { name:"Tony", email:"tony@gmail.com", age:50 },
    { name:"Peter", email:"peter@gmail.com", age:30 },
    { name:"Bruce", email:"bruce@gmail.com", age:47 },
])
.then((res)=>{
console.log(res);
});*/