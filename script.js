var database;
var searchBar = document.getElementById("search-bar");
var searchButton = document.getElementById("search-button");
var autoSuggestions = document.getElementById("auto-suggestions");
var display = document.getElementById("display");


searchBar.addEventListener("keypress", checkKey);
searchBar.addEventListener("input", getAutoSuggestions);
searchButton.addEventListener("click", processInput);

loadData();

function loadData() {
  searchBar.style.display = "none";
  searchButton.style.display = "none";
  fetch("database.json")
  .then(function(response) {
    response.json()
    .then(function(jsonObj) {
      database = jsonObj;
      console.log("Database Loaded Successfully");
    }).then(function() {
      searchBar.style.display = "block";
      searchButton.style.display = "block";
    })
  });
}



function checkKey(e){
	var key = e.which || e.keyCode;
    if(key == 13) {
      //console.log(“You pressed enter!”);
      processInput();
  }
}

function processInput() {
	var cleanedInput = searchBar.value.toLowerCase().trim();
	autoSuggestions.innerHTML = "";
	autoSuggestions.style.display = "none";
	searchBar = "";
	var databaseRecord = getRecord(cleanedInput);
	if (databaseRecord != null){
	   displayRecord(databaseRecord);
	} else {
	   alert("No results");
	}
}

function getRecord(cleanedInput) {
for (var i = 0; i < database.length; i++) {
	var cleanedRecordName = database[i].name.toLowerCase().trim();
	if (cleanedInput == cleanedRecordName){
		return database; 
	}
	return null;
}
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
	var cleanedInput = searchBar.value.toLowerCase().trim(); 
	autoSuggestions.innerHTML = "";

	for (var i = 0; i < database.length; i++){
		var cleanedRecordName = database[i].name.toLowerCase().trim();
		if (cleanedRecordName.startsWith(cleanedInput) && cleanedInput.length > 0) {
			var matching = name.substring(0, searchBar.value.length);
			var remaining = name.substring(searchBar.value.length);
			var result = matching + "<b>" + remaining + "</b>";
			var button = document.createElement("button");
			button.innerHTML = button;
			button.style.display = "block";
			button.className = "suggestion";
			activateSuggestionButton(button, database[i]);
			autoSuggestions.appendChild(button);

		}

	}
	if (autoSuggestions.hasChildNodes){
		autoSuggestions.style.display = "block";
	} else {
		autoSuggestions.style.display = "none";
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
  for (var i = 0; i < suggestions.length; i++) {
    var button = document.createElement("button");
    button.innerHTML = suggestions[i].name
    button.style.display = "block";
    button.className = "suggestion";
    activateSuggestionButton(button, suggestions[i]);
    display.appendChild(button);
  if (suggestions.length > 0) {
    paragraph.innerHTML = "Did you mean:";
    display.appendChild(paragraph);
  } else {
      paragraph.innerHTML = displaySuggestions(getSuggestions(cleanedInput));
      display.appendChild(paragraph);
    }
  }
}
}