import readline from "readline";

const rl = readline.createInterface({
input:process.stdin,
output: process.stdout
})

const todo = [];


const showMenu = () =>{
    console.log("\n1: Add a Task");
    console.log("2: View Tasks");
    console.log("3: Exit");
    rl.question("Choose an option: ", handlInput)

}

handlInput
showMenu();


