var lis = document.querySelectorAll("li");

for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseover", function() {
		this.classList.add("highlighted");
	});
}

for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("mouseout", function() {
		this.classList.remove("highlighted");
	});
}

for(var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function() {
		this.classList.toggle("done");
	});
}
