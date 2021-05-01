const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const mysql = require('mysql')
const port = 4000;

const db = mysql.createPool({
    host: 'sql6.freesqldatabase.com',
    user: 'sql6409566',
    password: '7fzVPL6NbF',
    database: 'sql6409566',
    port: '3306'
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send('HOLA!')
})

app.post("/api/insertp", (req, res) => {                 // For prodManager Registration
    const UserName = req.body.ProdUserName;
    const name = req.body.ProdName;
    const pass = req.body.ProdPass;
    const sqlInsert = "INSERT INTO prodManager(ProdUserName,ProdName,ProdPass) VALUES (?,?,?);"
    const sqlAuth = "SELECT * FROM prodManager WHERE ProdUserName=?"

    db.query(sqlAuth, [UserName], (err, result) => {
        if (result.length === 0) {
            db.query(sqlInsert, [UserName, name, pass], (err, result1) => {
                res.send("success");
            })
        }
        else {
            res.send("2");
        }
    })



});
app.post("/api/inserte", (req, res) => {                  // For Employee Registration
    const UserName = req.body.EmpUserName;
    const name = req.body.EmpName;
    const pass = req.body.EmpPass;
    const sqlInsert = "INSERT INTO employee(EmpUserName,EmpName,EmpPass) VALUES (?,?,?);"
    const sqlAuth = "SELECT * FROM employee WHERE EmpUserName=?"
    db.query(sqlAuth, [UserName], (err, result) => {
        if (result.length === 0) {
            db.query(sqlInsert, [UserName, name, pass], (error, result1) => {
                res.send("success");
            })
        }
        else {
            res.send("2");
        }
    })
});
app.post("/api/insertt", (req, res) => {                   //For Creating Team
    const ProdUserName = req.body.ProdUserName;
    const TeamName = req.body.TeamName
    const sqlInsert = "INSERT INTO team (TeamName,ProdUserName) VALUES (?,?);"
    const sqlAuth = "SELECT * FROM team WHERE TeamName=?"

    db.query(sqlAuth, [TeamName], (err, result) => {
        if (result.length === 0) {
            db.query(sqlInsert, [TeamName, ProdUserName], (err, result1) => {
                res.send("success")
            })
        }
        else {
            res.status(400);
            res.send();
        }
    })

});
app.put("/api/assign_project", (req, res) => {               //For Project Assign
    const Project = req.body.Project;
    const Date = req.body.Date;
    const TeamName = req.body.TeamName;
    const sqlInsert = "UPDATE team SET Project=?,Date=? Where TeamName=?;"
    db.query(sqlInsert, [Project, Date, TeamName], (err, result) => {
        res.send("success")
    })
});

app.put("/api/assign_team", (req, res) => {                   //For Adding emp to team
    const TeamName = req.body.TeamName;
    const EmpUserName = req.body.EmpUserName;
    const sqlAssign = "INSERT INTO teamtoemp(TeamName,EmpUserName) VALUES (?,?);"
    db.query(sqlAssign, [TeamName, EmpUserName], (err, result) => {
        res.send("success")
    })
});

//app.get("/api/checkp",(req,res)=>{                         //TO check if same username exist for prodManager
// const name=req.body.ProdUserName;
// const sqlAuth="SELECT count(*) FROM prodManager WHERE ProdUserName=?"
// db.query(sqlAuth,[name],(err,result)=>{
//     console.log(result);
// })
//});

//app.get("/api/checke",(req,res)=>{                          //TO check if same username exist for employee
// const name=req.body.EmpUserName;
// const sqlAuth="SELECT count(*) FROM employee WHERE EmpUserName=?"
// db.query(sqlAuth,[name],(err,result)=>{
//     console.log(result);
// })
//});

//app.get("/api/checkt",(req,res)=>{                          //TO check if same name exist for Team
// const name=req.body.TeamName;
// const sqlAuth="SELECT count(*) FROM team WHERE TeamName=?"
// db.query(sqlAuth,[name],(err,result)=>{
//     console.log(result);
// })
//});

app.get("/api/authp", (req, res) => {                            //For authentication of prodManager
    const name = req.query.ProdUserName;
    const pass = req.query.ProdPass;
    const sqlAuth = "SELECT * FROM prodManager WHERE ProdUserName=? "
    db.query(sqlAuth, [name], (err, result) => {
        if (result.length > 0) {
            if (pass === result[0].ProdPass) {
                res.send({
                    result: 1,
                    username: result[0].ProdUserName,
                    name: result[0].ProdName,
                })
            }
            else {
                res.send({
                    result: 2,
                })
            }
        }
        else {
            res.status(400);
            res.send("3");
        }
    })
});

app.get("/api/authe", (req, res) => {                             //For authentication of employee
    const name = req.query.EmpUserName;
    const pass = req.query.EmpPass;
    const sqlAuth = "SELECT * FROM employee WHERE EmpUserName=? "
    db.query(sqlAuth, [name], (err, result) => {
        if (result.length > 0) {
            if (pass === result[0].EmpPass) {
                res.send({
                    result: 1,
                    username: result[0].EmpUserName,
                    name: result[0].EmpName,
                })
            }
            else {
                res.send({
                    result: 2,
                })
            }
        }
        else {
            res.status(400);
            res.send("3");
        }
    })
});

app.get("/api/team", (req, res) => {                             //To get Teamdetails
    const TeamName = req.query.TeamName;
    const sqlget = "SELECT * FROM team WHERE TeamName=?"
    db.query(sqlget, [TeamName], (err, result) => {
        res.send(result[0]);
    })
});

//app.get("/api/prod",(req,res)=>{                             //To get prodManager details
// const ProdUserName=req.body.ProdUserName;
// const sqlget="SELECT * FROM prodManager WHERE ProdUserName=?"
// db.query(sqlget,[ProdUserName],(err,result)=>{
//     console.log(result);
// })
//});

// app.get("/api/emp", (req, res) => {                             //To get Emp details
//     const EmpUserName = req.query.EmpUserName;
//     const sqlget = "SELECT * FROM employee WHERE EmpUserName=?"
//     db.query(sqlget, [EmpUserName], (err, result) => {
//         res.send(result[0]);
//         console.log(result[0])
//     })
// });

app.get("/api/view_teams", (req, res) => {                             //View Teams madr by particular prodManager
    const ProdUserName = req.query.ProdUserName;
    const sqlget = "SELECT * FROM team WHERE ProdUserName=?"
    db.query(sqlget, [ProdUserName], (err, result) => {
        res.send(result)
    })
});

app.get("/api/view_t_Employee", (req, res) => {                             //Get EmpUserName of Emp in team
    const TName = req.query.TName;

    const sqlget = "Select emp.EmpUserName,emp.EmpName from employee emp,teamtoemp t where (t.EmpUserName=emp.EmpUserName and t.TeamName=?);"
    db.query(sqlget, [TName], (err, result) => {
        res.send(result)

    })
});

app.get("/api/view_nit_Employee", (req, res) => {                             //Get EmpUserName of Emp not in team
    const TName = req.query.TName;
    const sqlget = "(Select distinct emp.EmpName,emp.EmpUserName from employee emp LEFT Join teamtoemp t on (t.EmpUserName=emp.EmpUserName) Where t.EmpUserName is NULL) UNION (Select distinct emp.EmpName,emp.EmpUserName from employee emp where not exists (Select * from teamtoemp where TeamName=? and EmpUserName=emp.EmpUserName))"
    db.query(sqlget, [TName], (err, result) => {
        // console.log(result,'result')
        // console.log(err,'err')
        res.send(result)
    })
});

// app.get("/api/view_all_Employee", (req, res) => {                             //View all Emp
//     const sqlget = "SELECT * FROM Employee"
//     db.query(sqlget, (err, result) => {
//         console.log(result);
//     })
// });

app.get("/api/view_Employee_to_team", (req, res) => {                             //Get TeamName of Emp's teams
    const EmpUserName = req.query.EmpUserName;
    const sqlget = "SELECT TeamName FROM teamtoemp WHERE EmpUserName=?"
    db.query(sqlget, [EmpUserName], (err, result) => {
        res.send(result);
    })
});

app.delete("/api/remove_employee_from_team", (req, res) => {                       //Remove Emp from team
    const EmpUserName = req.query.EmpUserName;
    const TeamName = req.query.TeamName;
    const sqlupdate = "Delete FROM teamtoemp where EmpUserName=? and TeamName=?";
    db.query(sqlupdate, [EmpUserName, TeamName], (err, result) => {
        // console.log(EmpUserName,TeamName,result)
        res.send("success")
    })
});

app.put("/api/remove_Project", (req, res) => {   
    const TeamName=req.body.TeamName;     
    const sqlupdate = "UPDATE team SET Project='',Date='' where TeamName=?"
    db.query(sqlupdate, [TeamName], (err, result) => {
        res.send("success")
    })
});

//app.delete("/api/delete_employee_from_team",(req,res)=>{                     //Delete Employee (Call both)
// const EmpUserName=req.body.EmpUserName;
// const sqldelete="DELETE FROM teamtoemp WHERE EmpUserName=?"
// db.query(sqldelete,[EmpUserName],(err,result)=>{
//     console.log(result);
// })
//});

app.delete("/api/delete_team_from_emp", (req, res) => {                      //Delete Team(Call both),Remove all members from Team
    const TeamName = req.query.TeamName;
    const sqldelete = "DELETE FROM teamtoemp WHERE TeamName=?"
    db.query(sqldelete, [TeamName], (err, result) => {
        // console.log(result);
    })
    const sqldelete1 = "DELETE FROM team WHERE TeamName=?"
    db.query(sqldelete1, [TeamName], (err, result) => {
        // console.log(result);
    })
    res.send("success")
});

app.listen(process.env.PORT || port, () => {
    console.log(`listening at ${process.env.PORT || port}`)

});