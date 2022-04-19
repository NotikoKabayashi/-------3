const fs = require('fs');
const Path = require('path');  
const axios = require('axios');
const http = require('http');
axios.get('https://jsonplaceholder.typicode.com/todos') 
.then (res=> {
const json= JSON.stringify(res.data);
fs.writeFile('code.json',json,(err)=>{
        if (err) return reject(err);
        console.log('wrote');
        let arr = JSON.parse(json)
        console.log(typeof(arr));
        let mas = Object.fromEntries(
           Object.entries(arr).map(([key,value])=>[key,value])
        );
        console.log(typeof(mas));
        console.log(mas.title);
    })
})
.catch(e => console.error(e))