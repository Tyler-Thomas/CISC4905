
//const sqlite3 = require('sqlite3').verbose();
var { Client }=require('pg');
const express = require("express");
const {src,inserts} = require('./database.js');
const PORT = process.env.PORT || 5001;

const app = express();

if (process.env.NODE_ENV === 'production') {
  
  app.use(express.static('project/build'));

  
  
  const path = require('path');
  app.get("/chars", (req, res) => {
    res.json({source:src});
 });
 app.get("/users",(req,res)=>{
   res.json({source:{users:src.users,userlist:src.userList}})
 });
 app.get(`/votes`,(req,res)=>{
   res.json({source:{
     votes:src.votes,
     chars:src.characters,
     users:src.users,
     userList:src.userList
   }})
 })
  app.get('*', (req, res) => {
    res.sendFile(path.resolve( 'project', 'build', 'index.html'));
  });
}
/*let db =  new sqlite3.Database('server/FECommunityTierLists.db', sqlite3.OPEN_READWRITE ,(err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to the database.');
});
db.serialize(()=>{
db.all("SELECT * FROM User", [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    inserts.addUser(row.UserID,row.Password);    
  });
});});
db.serialize(()=>{
  db.all("SELECT * FROM Vote order by VoteID ", [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      inserts.addVote(row.User,row.Character,row.VoteNum,row.Comment);    
    });
  });});
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});
*/
var conString='postgres://bqdaqebn:yNscZ3NPB7qItmaKaICDyHwH_16NlCuN@raja.db.elephantsql.com/bqdaqebn';
console.log(conString)
var client = new Client(conString/*{
  user:'bqdaqebn',
  host:'raja.db.elephantsql.com',
  database:'CISC4905',
  password:'yNscZ3NPB7qItmaKaICDyHwH_16NlCuN',
  port:5000

}
*/);

client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT * FROM Users')
    .then(result=>result.rows.map(row=>{inserts.addUser(row.userid,row.password); console.log(row);console.log(src.users);}))
    .catch(e => console.error(e.stack)).then
    (res=>client.query('SELECT * FROM Vote order by VoteID'))
    .then(result=>result.rows.map(row=>{inserts.addVote(row.username,row.character,row.votenum,row.comment); console.log(src.votes)}))
    .catch(e => console.error(e.stack));
  
  
});
app.use(express.json());
app.use(express.urlencoded());
app.get("/chars", (req, res) => {
   res.json({source:src});
});
app.get("/users",(req,res)=>{
  res.json({source:{users:src.users,userlist:src.userList}})
});
app.get(`/votes`,(req,res)=>{
  res.json({source:{
    votes:src.votes,
    chars:src.characters,
    users:src.users,
    userList:src.userList
  }})
})
app.put("/users",(req,res) => {
  if(src.userList.includes(req.body.usr)){
  res.status(200).send('-1');
  return -1;
  }
  inserts.addUser(req.body.usr,req.body.pwd);
  console.log(src.userList);
 /* db =  new sqlite3.Database('server/FECommunityTierLists.db', sqlite3.OPEN_READWRITE ,(err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to the database from /users.');
  });
  const sql=`Insert into User Values('${req.body.usr}','${req.body.pwd}')`;
  console.log(sql);
  db.serialize(()=>{
    db.run(`Insert into User Values('${req.body.usr}','${req.body.pwd}')`,[],function(err) {
      if (err) {
        return console.log(err.message);
      }
  })});
  db.close();*/
  /*client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    */
    client.query('Insert into Users Values($1,$2)',[req.body.usr,req.body.pwd],(err,res)=>{if (err) {
      console.log(err.stack)
    } else {
      console.log('Connected to postgres from /users');
      
    }})
    //client.end();
 // });
  res.status(200).send('0');
  return 0;
});
app.put("/votes",(req,res)=>{
  inserts.addVote(req.body.usr,req.body.ch,req.body.vote,req.body.comm);
 /* db =  new sqlite3.Database('server/FECommunityTierLists.db', sqlite3.OPEN_READWRITE ,(err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to the database from /votes.');
  });
  db.serialize(()=>{
    db.run(src.query,[],function(err) {
      if (err) {
        return console.log(err.message);
      }
  })});
  db.close();*/
  /*client.connect(function(err) {
    if(err) {
      return console.error('could not connect to postgres', err);
    }
    */
    client.query(src.query,[req.body.vote,req.body.comm,req.body.ch,req.body.usr],(err,res)=>{if (err) {
      console.log(err.stack)
    } else {
      console.log('Connected to postgres from /vote');
      
    }})
    //client.end();
  //});
  console.log(src.votes);
  res.send();
})
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`Users${src.users}`)
});