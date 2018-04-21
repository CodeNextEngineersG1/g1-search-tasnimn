var database;
var searchBar = document.getElementById("search-bar");
var searchButton = document.getElementById("search-button");
var autoSuggestions = document.getElementById("auto-suggestions");
var display = document.getElementById("display");

var database = [
  {
  	name:"Harry James Potter",
  	born:"July 31, 1980",
  	died:null,
  	house:"Gryffindor",
  	patronus:"Stag",
  	siblings:null
  },
  {
  	name:"Hermione Jean Granger",
  	born:"September 19, 1979",
  	died:null,
  	house:"Gryffindor",
  	patronus:"Otter",
  	siblings:null
  },
  {
  	name:"Ronald Billus Weasley",
  	born:"March 1, 1980",
  	died:null,
  	house:"Gryffindor",
  	patronus:"Jack Russell Terrier",
  	siblings:["Bill Weasley","Charlie Weasley", "Percy Weasley", "Fred Weasley", "George Weasley","Ginevra Weasley"]
  },
  {
  	name:"Albus Percival Wulfric Brian Dumbledore",
  	born:"Summer, 1881",
  	died:"June 30, 1997",
  	house:"Gryffindor",
  	patronus:"Phoenix",
  	siblings:["Aberforth Dumbledore", "Ariana Dumbledore"]
  };
  {
  	name:"Draco Lucius Malfoy",
  	born:"June 5, 1980",
  	died:null,
  	house:"Slytherin",
  	patronus:null,
  	siblings:null
  };
  {
  	name:"Tom Marvolo Riddle (Lord Voldemort)",
  	born:"December 31, 1926",
  	died:"May 21, 1998",
  	house:"Slytherin",
  	patronus:null
  	siblings:null
  };
  {
  	name:"Severus Snape",
  	born:"January 9, 1960",
  	died:"May 2, 1998",
  	house:"Slytherin",
  	patronus:"Doe",
  	siblings:null
  }
];

searchBar.addEventListener("keypress", checkKey);
searchBar.addEventListener("input", getAutoSuggestions);
searchButton.addEventListener("click", processInput);

function checkKey(e){
	var key = e.which || e.keyCode;
    if(key == 13) {
      //console.log(“You pressed enter!”);
      processInput();
  }
}

function processInput() {
	cleanedInput = searchBar.value.toLowerCase().trim()
	autoSuggestions.innerHTML = "";
	autoSuggestions.style.display = "none";
	searchBar = "";
	databaseRecord = getRecord(cleanedInput);
	if (databaseRecord != null){
	   displayRecord(databaseRecord);
	} else {
	   alert("No results");
	}
}
for (var i = 0; i < database.length; i++) {
	var cleanedRecordName = database[i].name.toLowerCase().trim();
	if (cleanedInput == cleanedRecordName){
		return database; 
	}
	return null;
}
function displayRecord(databaseRecord){
	var recordName = document.createElement("h2");
	recordName.innerHTML = databaseRecord.name;
	var recordPicture = document.createElement("img");
	recordPicture.src = databaseRecord.picture;
	var recordBorn = document.createElement("p");
	recordBorn.innerHTML = "<b>Born:</b> " + databaseRecord.born;
	var recordDied = document.createElement("p");
	if(databaseRecord.died != null) {
  		recordDied.innerHTML = "<b>Died:</b> " + databaseRecord.died;
	} else {
  		recordDied.innerHTML = "<b>Died:</b> N/A";
	}
	var recordHouse = document.createElement("h2");
	recordHouse.innerHTML = databaseRecord.house;
	var recordPatronus = document.createElement("h2");
	recordPatronus.innerHTML = databaseRecord.patronus;
	var recordSiblings = document.createElement("h2");
	recordSiblings.innerHTML = databaseRecord.siblings;

	display.appendChild(recordName);
	display.appendChild(recordPicture);
	display.appendChild(recordBorn);
	display.appendChild(recordDied);
    display.appendChild(recordHouse);
	display.appendChild(recordPatronus);
	display.appendChild(recordSiblings);


}
function getAutoSuggestions(){
	var cleanedInput = searchBar.value.toLowerCase().trim() 
	autoSuggestions.innerHTML = "";

	for (var i = 0; i < database.length; i++){
		var cleanedRecordName = database[i].name.toLowerCase().trim();
		if (cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length > 0) {
			var matching = name.substring(0, searchBar.value.length);
			var remaining = name.substring(searchBar.value.length);
			var result = matching + "<b>" + remaining + "</b>";
			var button = document.createElement("button");                                                                                                  ment.createElement("button");
			button.innerHTML = button;
			button.style.display = "block";
			button.className = "suggestion";
			activateSuggestionButton(button, database[i]);
			autoSuggestions.appendChild(button);

		}

	}
	if (autoSuggestions.hasChildNodes){
		autoSuggestion.style.display = "block";
	} else {
		autoSuggestion.style.display = "none";
	}
function activateSuggestionButton(button, record) {
  button.addEventListener("click", function() {
    displayRecord(record);
    autoSuggestions.innerHTML = "";
    autoSuggestions.style.display = "none";
    searchBar.value = "";
  });
}

function getSuggestions(cleanedInput) {
  var suggestions = [];
  for (var i = 0; i < database.length; i++) {
    var cleanedRecordName = database[i].name.toLowerCase().trim();
    if (cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length > 0) {
      suggestions.push(database[i]);
    }

  }
  return suggestions;
}
function displaySuggestions(suggestions) {
  display.innerHTML = "";
  var paragraph = document.createElement("p");
  if 
}
}