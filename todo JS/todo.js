var todos = [];

while(input !== "quit") {
	var input = prompt("what would you like to do?");
	if(input === "list") {
		todos.forEach(function(todo, index) {console.log(index + ": " + todo);});
	} else if(input === "new") {
		todos.push(prompt("What would you like to do?"));
	} else if(input === "delete") {
		var deleteThis = prompt("Enter the index you want to remove");
		todos.splice(deleteThis, 1);
	}
}

console.log("Quitting app...");
