const path  = require("path")
const fs = require('fs')

// console.log(__dirname)
// console.log("hello")
// const filepath = path.join("hello", "hiiii")
// console.log(filepath)
// console.log(path.join(__dirname , "rishav.txt"), path.join(__dirname,"rishav","rishav.txt"))

// fs.renameSync(path.join(__dirname , "rishav.txt"), path.join(__dirname,"rishav","rishav.txt"))
// console.log(path.resolve('shubham',"shubu.txt"))
// console.log( path.basename("/shubham/hello/shubu.txt"))

console.log(path.dirname("shubham/hello/hii/hoo/shubu.txt"))
console.log(path.extname("shubham/hello/hii/hoo/shubu.txt"))
console.log(path.parse("/shubham/hello/hii/hoo/shubu.txt"))
console.log(path.format({
    root: '/',
    dir: 'shubham/hello/hii/hoo',
    base: 'shubu.txt',
    ext: '.txt',
    name: 'shubu'
  }))

  console.log(fs.readdirSync(path.resolve('rishav')))