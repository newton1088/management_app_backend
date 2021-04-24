const express=require('express');
const app= express();
const mysql=require('mysql')

const db = mysql.createPool({
    host:'sql6.freesqldatabase.com',
    user:'sql6407900',
    password:'rIJ4sSllJb',
    database:'sql6407900',
    port :'3306'
});
app.post("/api/insertp",(req,res)=>{                 // For prodManager Registration
    const UserName=req.body.ProdUserName;
   // const UserName="Ayush21";
    const name=req.body.ProdName;
    // const name="Ayush213";
   // const pass="123456";
     const pass=req.body.ProdPass;
    const sqlInsert="INSERT INTO prodManager(ProdUserName,ProdName,ProdPass) VALUES (?,?,?);"
    db.query(sqlInsert,[UserName,name,pass],(err,result)=>{
        console.log("Done");
    })
});
//app.post("/api/inserte",(req,res)=>{                  // For Employee Registration
    // const UserName=req.body.EmpUserName;
    // const name=req.body.EmpName;
    // const pass=req.body.EmpPass;
    // const sqlInsert="INSERT INTO employee(EmpUserName,EmpName,EmpPass) VALUES (?,?,?);"
    // db.query(sqlInsert,[UserName,name,pass],(err,result)=>{
    //     console.log();
    // })
//});
//app.post("/api/insertt",(req,res)=>{                   //For Creating Team
    // const ProdUserName=req.body.ProdUserName;
    // const TeamName=req.body.TeamName
    // const sqlInsert="INSERT INTO team (TeamName,ProdUserName) VALUES (?,?);",
    // db.query(sqlInsert,[TeamName,ProdUserName],(err,result)=>{
    //     console.log();
    // })
//});
//app.put("/api/assign_project",(req,res)=>{               //For Project Assign
    //const Projct=req.body.Project;
    //const Date=req.body.Date;
    //const TeamName=req.body.TeamName;
    // const sqlInsert="UPDATE SET team Project=?,Date=? Where TeamName=?;"
    // db.query(sqlInsert,[Project,Date,TeamName],(err,result)=>{
    //     console.log();
    // })
//});

//app.put("/api/assign_team",(req,res)=>{                   //For Adding emp to team
    //const TeamName=req.body.TeamName;
    //const EmpUserName=req.body.EmpUserName;
    // const sqlAssign="INSERT INTO teamtoemp(TeamName,EmpUserName) VALUES (?,?);"
    // db.query(sqlAssign,[TeamName,EmpUserName],(err,result)=>{
    //     console.log();
    // })
//});

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

//app.get("/api/authp",(req,res)=>{                            //For authentication of prodManager
    // const name=req.body.name;
    // const pass=req.body.pass;
    // const sqlAuth="SELECT count(*)FROM prodManager WHERE ProdUserName=? AND ProdPass=?"
    // db.query(sqlAuth,[name,pass],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/authe",(req,res)=>{                             //For authentication of employee
    // const name=req.body.name;
    // const pass=req.body.pass;
    // const sqlAuth="SELECT count(*)FROM employee WHERE EmpUserName=? AND EmpPass=?"
    // db.query(sqlAuth,[name,pass],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/team",(req,res)=>{                             //To get Teamdetails
    // const TeamName=req.body.TeamName;
    // const sqlget="SELECT * FROM teams WHERE TeamName=?"
    // db.query(sqlget,[TeamName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/prod",(req,res)=>{                             //To get prodManager details
    // const ProdUserName=req.body.ProdUserName;
    // const sqlget="SELECT * FROM prodManager WHERE ProdUserName=?"
    // db.query(sqlget,[ProdUserName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/emp",(req,res)=>{                             //To get Emp details
    // const EmpUserName=req.body.EmpUserName;
    // const sqlget="SELECT * FROM employee WHERE EmpUserName=?"
    // db.query(sqlget,[EmpUserName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/view_teams",(req,res)=>{                             //View Teams madr by particular prodManager
    // const ProdUserName=req.body.ProdUserName;
    // const sqlget="SELECT * FROM teams WHERE ProdUserName=?"
    // db.query(sqlget,[ProdUserName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/view_t_Employee",(req,res)=>{                             //Get EmpUserName of Emp in team
    // const TName=req.body.TName;
    // const sqlget="SELECT EmpUserName FROM teamtoemp WHERE TeamName=?"
    // db.query(sqlget,[TName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/view_nit_Employee",(req,res)=>{                             //Get EmpUserName of Emp not in team
    // const TName=req.body.TName;
    // const sqlget="SELECT EmpUserName FROM teamtoemp WHERE TeamName <> ?"
    // db.query(sqlget,[TName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/view_all_Employee",(req,res)=>{                             //View all Emp
    // const sqlget="SELECT * FROM Employee"
    // db.query(sqlget,(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/view_Employee_to_team",(req,res)=>{                             //Get TeamName of Emp's teams
    // const EmpUserName=req.body.EmpUserName;
    // const sqlget="SELECT TeamName FROM teamtoemp WHERE EmpUserName=?"
    // db.query(sqlget,[EnpUserName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.delete("/api/remove_employee_from_team",(req,res)=>{                       //Remove Emp from team
    // const EmpUserName=req.body.EmpUserName;
    // const TeamName=req.body.TeamName;
    // const sqlupdate="Delete FROM teamtoemp where EmpUserName=? and TeamName=?";
    // db.query(sqlupdate,[EmpUserName,TeamName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.delete("/api/delete_employee",(req,res)=>{                             //Delete emmployee
    // const EmpUserName=req.body.EmpUserName;
    // const sqldelete="DELETE FROM employee WHERE EmpUserName=?"
    // db.query(sqldelete,[EmpUserName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.delete("/api/delete_employee_from_team",(req,res)=>{                     //Delete Employee (Call both)
    // const EmpUserName=req.body.EmpUserName;
    // const sqldelete="DELETE FROM teamtoemp WHERE EmpUserName=?"
    // db.query(sqldelete,[EmpUserName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.delete("/api/delete_team",(req,res)=>{                             //Delete Team
    // const TeamName=req.body.TeamName;
    // const sqldelete="DELETE FROM employee WHERE TeamName=?"
    // db.query(sqldelete,[TeamName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.delete("/api/delete_team_from_emp",(req,res)=>{                      //Delete Team(Call both),Remove all members from Team
    // const TeamName=req.body.TeamName;
    // const sqldelete="DELETE FROM employee WHERE TeamName=?"
    // db.query(sqldelete,[EmpUserName],(err,result)=>{
    //     console.log(result);
    // })
//});