// If your project uses CommonJS (default), uncomment the next line and comment the import line:
// const readline = require('readline');

// If you're using ESM (package.json "type": "module"), keep the import:
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todos = [];

const showMenu = () => {
  console.log("\n1: Add a Task");
  console.log("2: View Tasks");
  console.log("3: Exit");
  rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
  const opt = option.trim();

  if (opt === "1") {
    rl.question("Enter the Task: ", (task) => {
      const t = task.trim();
      if (t.length === 0) {
        console.log("No task entered. Nothing added.");
      } else {
        todos.push(t);
        console.log("Task Added:", t);
      }
      showMenu();
    });
  } else if (opt === "2") {
    console.log("\nYour Todo List:");
    if (todos.length === 0) {
      console.log("  (No tasks yet)");
    } else {
      todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
    showMenu();
  } else if (opt === "3") {
    console.log("Good Bye");
    rl.close();
  } else {
    console.log("Invalid Option. Please try again.");
    showMenu();
  }
};

showMenu();
