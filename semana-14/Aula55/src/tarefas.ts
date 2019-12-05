import * as moment from "moment";
import { appendFileSync } from "fs";

const allTasks: string = process.argv[2];
const newTask: string = "\n" + process.argv[3];

const today = moment();

const listAllTasks: string[] = [];

//TODO organizar essa zona: ao cadastrar nova tarefa, a newTask deve ser adiciona a um array de tarefas listAllTasks

try {
	appendFileSync(allTasks, newTask, "utf8");
	console.log("\x1b[32m%s\x1b[0m", "Tarefa adicionada com sucesso! Agendada para: ", today.utcOffset("-0300").format("DD MM YYYY"));
} catch(err){
	console.log("\x1b[31m%s\x1b[0m", err)
}