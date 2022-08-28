var now = moment();
$("#currentDay").text(now.format("MMM Do, YYYY HH:MM"));
var timeblockContainer = document.getElementById("container");
// Variables for the start and end times that can be easily changed
var startTime = 8;
var endTime = 18;
var currentHour = now.format("HH");
var hourColor = "";

// Loop through the daily work hours and create text entry cards for each
for (var i = startTime; i < endTime + 1; i++) {
// Change css selector based on current time to change colors of hourly time block cards
  if (i < currentHour) {
    hourColor = "past";
  } else if (i == currentHour) {
    hourColor = "current";
  } else {
    hourColor = "future";
  }
  var timeblock = document.createElement("section");
  var hourLabel = document.createElement("div");
  var textEntryEl = document.createElement("form");
  var textEntryBox = document.createElement("div");
  var saveBtn = document.createElement("button");
  var textArea = document.createElement("textarea");

  timeblock.setAttribute("class", "timeblock");
  // Set a unique id for the timeblock
  timeblock.setAttribute("id", "hour-" + i);

  hourLabel.setAttribute("class", "hour-label");
  hourLabel.textContent = i + ":00";
  
  textEntryBox.setAttribute("class", "form-group");
  const textAreaId = ("textArea-" + i);
  textArea.setAttribute("id", textAreaId);
  textArea.setAttribute("class", hourColor);
  
  // Check to see if there is a key matching the unique hourly textAreaId in local 
  // storage. If so, get its data and populate it in the text field
  if (localStorage.getItem(textAreaId) !== null){
    const local = localStorage.getItem(textAreaId);
    textArea.value = local;
  } 
  textArea.setAttribute("rows", "3");
  saveBtn.textContent = "Save";
  saveBtn.setAttribute("class", "save-btn");
  saveBtn.setAttribute("id", "save-button-" + i);
  saveBtn.setAttribute("onclick", "saveData(this)");

  timeblockContainer.append(timeblock);
  timeblock.append(hourLabel);
  timeblock.append(textEntryEl);
  textEntryEl.append(textEntryBox);
  textEntryBox.append(textArea);
  timeblock.append(saveBtn);
}

// When the user clicks the Save button, find the text box that shares the same 
// time block as the button, get its id and data, then 
// save in local storage
function saveData(button){
    const textBox = button.previousElementSibling.firstChild.firstChild;
    var data = document.getElementById(textBox.id).value;
    localStorage.setItem(textBox.id, data);
}

