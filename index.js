const {faker}=require("@faker-js/faker")
const {v4:uuidv4}=require(`uuid`)
const mysql=require(`mysql2`)
const express= require("express")
const app=express();
const port=8002;
const path=require("path");
const methodOverride=require("method-override");
app.use(methodOverride("_method"))

app.set("view engine","ejs")
app.use(express.json());  // To parse JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"public")))


const connection =mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"delta_app",
    password:"9507"
})
// let q="SHOW TABLES";
let q = "INSERT INTO user(id, username, email, password) VALUES ?";
let users = [
    ["124", "apnacollege", "apnacollege@gamil.com", "Apnacollege"]
];



// ## insert in bulk ##

let getRandomUser =()=>{
    return [
    uuidv4(),
   faker.internet.username(),
   faker.internet.email(),
   faker.internet.password(),
   
];
}

// let data=[];
// for(let i=0;i<=100;i++){
// data.push(getRandomUser());
// }

// console.log(getRandomUser())


// try{
//     connection.query(q,[data],(err,res)=>{
//         if(err) throw err;
//         console.log(res);
//         // console.log(res[1]);
//     });
//     }catch(err){
//         console.log(err)
//     }
// connection.end();




// #Home Route
app.get("/", (req, res) => {
    let countQuery = `SELECT COUNT(*) FROM user`;

    connection.query(countQuery, (err, result) => {
        if (err) {
            console.log(err);
            res.send("Some error in database");
        } else {
            console.log(result);
            let count = result[0]['COUNT(*)'];
            res.render("index.ejs", { count });  // Correctly render the home.ejs file
        }
    });
});

// #fetch ans show route

app.get("/user", (req, res) => {
    let p = `SELECT * FROM user`;  // Correct query to get all users
    connection.query(p, (err, result) => {
        if (err) {
            console.log(err);
            res.send("There was an error in the database");
        } else {
            console.log(result);
            // Pass the result (user data) to the view
            res.render("show.ejs", { users: result });  // Pass actual users data
        }
    });
});


//edit route : THIS PROVIDE EDIT FORM 

app.post("/user/:id/edit",(req,res)=>{
    let {id}=req.params;
    let p=`SELECT * FROM user WHERE id='${id}'`;
   connection.query(p,(err,result)=>{
    if(err){
        res.send("Some error in your code")
    }else{
        let user=result[0]; 
        res.render("edit.ejs",{user})

    }
   })
});

//UPDATE ROUTE : DATABASE ME ACTUAL UPDATE HOGA
app.patch("/user/:id",(req,res)=>{
    let {id}=req.params;
    let { password: formpass, username: newusername } = req.body;
    let p=`SELECT * FROM user WHERE id='${id}'`;
   connection.query(p,(err,result)=>{
    if(err){
        res.send("Some error in your code")
    }else{
        let user=result[0]; 
        if(formpass != user.password){
           res.send("Wrong password")
        }else{
            let q2=`UPDATE user SET username='${newusername}' WHERE id='${id}'`;
            connection.query(q2,(err,result)=>{
                if(err){
                    res.send("Some error in your code")
                }else{
                    // res.send(result);
                    res.redirect("/user");
                }
            })
        }
    }
   });
});

// Add a new data
app.get("/user/new",(req,res)=>{
    res.render("Add.ejs")
})

app.post("/user",(req,res)=>{
let id=uuidv4();
const { username: newuser, email: newemail, password: newpass } = req.body;

let p = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
connection.query(p,[id, newuser, newemail, newpass],(err,result)=>{
    if(err){
        res.send("You have some error in BD")
    }else{
        res.redirect("/user")

    }
})

});


//select one and delete one
app.delete("/user/:id",(req,res)=>{
    let id= req.params.id;
    let p=`DELETE FROM user WHERE id = ?`
connection.query(p,[id],(err,result)=>{
    if(err){
        res.send("Error deleteing user");
    }else{
        res.redirect("/user")
    }
});
});






app.listen(port,()=>{
    console.log("server Connected")
})