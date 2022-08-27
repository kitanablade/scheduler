var now = moment();
$("#currentDay").text(now.format("MMM Do, YYYY HH:MM"));
var timeblockContainer = document.getElementById("container");
var startTime = 8;
var endTime = 18;
var currentHour = now.format("HH");
var hourColor = "";

for (var i = startTime; i < endTime + 1; i++) {
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
  timeblock.setAttribute("id", "hour-" + i);

  hourLabel.setAttribute("class", "hour-label");
  hourLabel.textContent = i + ":00";
  textEntryBox.setAttribute("class", "form-group");
  textArea.setAttribute("class", hourColor);
  textArea.setAttribute("id", "textArea-" + i);
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

function saveData(button){
    console.log(button);
    localStorage.setItem(button.id, "TEST");
    const formEl = button.previousElementSibling;
    textBox = formEl.firstChild.firstChild
    console.log(textBox);
    var data = document.getElementById(textBox.id).value;
    console.log(data);
}

