const coding = ["js", "ruby", "java", "python", "cpp"];
// forEach loop takes callback functon
//callbackfn — A function that accepts up to three arguments.
//forEach calls the callbackfn function one time for each element in the array.
// coding.forEach(function (val) {
//   console.log(val);
// });

//arrow function use as callbackfn
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }
// // function will also pass as an argument
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {

    console.log(item.languageName,item.languageFileName);
    // console.log(item.languageFileName);
    
} )
