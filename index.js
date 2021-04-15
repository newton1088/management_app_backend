const express=require('express');
const app= express();
const mysql=require('mysql')

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Ayush@1088',
    database:'dbms',
});
//app.post("/api/insertp",(req,res)=>{
    // const name=req.body.name;
    // const pass=req.body.pass;
    // const sqlInsert="INSERT INTO prodmanager(ProdName,ProdPass) VALUES (?,?);"
    // db.query(sqlInsert,[name,pass],(err,result)=>{
    //     console.log();
    // })
//});
//app.post("/api/inserte",(req,res)=>{
    // const name=req.body.name;
    // const pass=req.body.pass;
    // const sqlInsert="INSERT INTO employee(EmpName,EmpPass) VALUES (?,?);"
    // db.query(sqlInsert,[name,pass],(err,result)=>{
    //     console.log();
    // })
//});
//app.post("/api/insertt",(req,res)=>{
    // const PId=req.body.PId;
    // const sqlInsert="INSERT INTO team(ProdId) VALUES (?);"
    // db.query(sqlInsert,[PId],(err,result)=>{
    //     console.log();
    // })
//});
//app.put("/api/assign_project",(req,res)=>{
    //const projct=req.body.project;
    //const Date=req.body.date;
    //const TId=req.body.TId;
    // const sqlInsert="UPDATE SET team Project=?,Date=? Where TeamId=?;"
    // db.query(sqlInsert,[project,date,TId],(err,result)=>{
    //     console.log();
    // })
//});

//app.put("/api/assign_team",(req,res)=>{
    //const TId=req.body.TId;
    //const EmpId=req.body.EId;
    // const sqlAssign="UPDATE SET employee TeamId=? Where EmpId=?;"
    // db.query(sqlAssign,[TId,EmpId],(err,result)=>{
    //     console.log();
    // })
//});

//app.get("/api/checkp",(req,res)=>{
    // const name=req.body.name;
    // const sqlAuth="SELECT count(*) FROM prodmanager WHERE ProdName=?"
    // db.query(sqlAuth,[name],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/checke",(req,res)=>{
    // const name=req.body.name;
    // const sqlAuth="SELECT count(*) FROM employee WHERE EmpName=?"
    // db.query(sqlAuth,[name],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/checkt",(req,res)=>{
    // const name=req.body.name;
    // const sqlAuth="SELECT count(*) FROM team WHERE TeamName=?"
    // db.query(sqlAuth,[name],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/authp",(req,res)=>{
    // const name=req.body.name;
    // const pass=req.body.pass;
    // const sqlAuth="SELECT count(*)FROM prodmanager WHERE ProdName=? AND ProdPass=?"
    // db.query(sqlAuth,[name,pass],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/authe",(req,res)=>{
    // const name=req.body.name;
    // const pass=req.body.pass;
    // const sqlAuth="SELECT count(*)FROM employee WHERE EmpName=? AND EmpPass=?"
    // db.query(sqlAuth,[name,pass],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/team",(req,res)=>{
    // const TeamName=req.body.TeamName;
    // const sqlget="SELECT * FROM teams WHERE TeamName=?"
    // db.query(sqlget,[TeamName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/prod",(req,res)=>{
    // const ProdName=req.body.ProdName;
    // const sqlget="SELECT * FROM prodmanager WHERE ProdName=?"
    // db.query(sqlget,[ProdName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/emp",(req,res)=>{
    // const EmpName=req.body.EmpName;
    // const sqlget="SELECT * FROM employee WHERE EmpName=?"
    // db.query(sqlget,[EmpName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/view_teams",(req,res)=>{
    // const ProdId=req.body.ProdId;
    // const sqlget="SELECT * FROM teams WHERE ProdId=?"
    // db.query(sqlget,[ProdId],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/view_t_Employee",(req,res)=>{
    // const TName=req.body.TName;
    // const sqlget="SELECT * FROM Employee WHERE TeamName=?"
    // db.query(sqlget,[TName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/view_nit_Employee",(req,res)=>{
    // const TName=req.body.TName;
    // const sqlget="SELECT * FROM Employee WHERE TeamName <> TName"
    // db.query(sqlget,[TName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.get("/api/view_all_Employee",(req,res)=>{
    // const sqlget="SELECT * FROM Employee"
    // db.query(sqlget,(err,result)=>{
    //     console.log(result);
    // })
//});

//app.put("/api/remove_employee_from_team",(req,res)=>{
    // const EmpName=req.body.EmpName;
    // const sqlupdate="UPDATE SET employee TeamId=? WHERE EmpName=?"
    // db.query(sqlupdate,[null,EmpName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.delete("/api/delete_employee",(req,res)=>{
    // const Ename=req.body.Ename;
    // const sqldelete="DELETE FROM employee WHERE EmpName=?"
    // db.query(sqldelete,[EName],(err,result)=>{
    //     console.log(result);
    // })
//});

//app.delete("/api/delete_team",(req,res)=>{
    // const TId=req.body.TId;
    // const sqldelete="DELETE FROM employee WHERE TeamId=?"
    // db.query(sqldelete,[TId],(err,result)=>{
    //     console.log(result);
    // })
//});