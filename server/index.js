

const express = require("express");
const {src,inserts} = require('./database.js');
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.get("/chars", (req, res) => {
   res.json({source:src});
});
app.get("/login",(req,res)=>{
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
  console.log(req.body);
  if(src.userList.includes(req.body.usr)){
  res.status(200).send('-1');
  return -1;
  }
  inserts.addUser(req.body.usr,req.body.pwd);
  console.log(src.userList);
  res.status(200).send('0');
  return 0;
});
app.put("/votes",(req,res)=>{
  inserts.addVote(req.body.usr,req.body.ch,req.body.vote);
  console.log(src.votes);
  res.send();
})
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  console.log(`Source${src.characters[1].name}`)
});