const fs = require("fs");
const allTasks = process.argv[2];
const newTask = "\n" + process.argv[3];

try {
	fs.appendFileSync(allTasks, newTask, "utf8");
	console.log("Tarefa adicionada com sucesso");
} catch(err){
	console.log(err)
}