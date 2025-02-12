const myFunction = () => {
    console.log('Hello, CommonJS!');
};
const add = (a , b)=>{
    console.log(a + b)
    return a + b
}
module.exports = {myFunction , add}