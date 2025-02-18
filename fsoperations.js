import fs, { read } from "fs"   //from callback and sync method
import fspromise from "fs/promises"    //from promises
import { endianness } from "os"
import path from "path"

// sync method 
// console.log("start")
// let data = fs.readFileSync("myfile.txt")
// console.log(data.toString())
// console.log("end")

// callback method
// console.log("start")
// fs.readFile('myfile.txt','utf-8', (error , data)=>{
//          console.log(error , data)
// })
// console.log('end')

//promises method
let oldpath = 'C:\\Users\\shubham\\Documents\\Excellence chandighar work\\1230 backend\\backend\\rishav.txt'
let newpath = 'C:\\Users\\shubham\\Documents\\Excellence chandighar work\\1230 backend\\backend\\rishav\\rishav.txt'
console.log("start")


try {
    // let ho = await fspromise.writeFile('rishav.txt',"i am rishav from hamirpur" )
    // await fspromise.appendFile('rishav.txt' , "i am mohit form kangra")
    // let data = await fspromise.readFile('rishav.txt')
    // // await fspromise.unlink('myfile.txt')
    // let exists = await fs.existsSync("risv.txt")
    // await fspromise.mkdir("rishav.txt")
    await fspromise.rename(oldpath,newpath)
    console.log(exists)
    console.log(data.toString())
} catch (error) {
    console.log(error)
}

console.log("end")