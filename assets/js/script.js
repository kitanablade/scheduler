var now = moment();
$("#currentDay").text(now.format("MMM Do, YYYY HH:MM"));
var timeblockContainer = document.getElementById("container");
var startTime = 8;
var endTime = 18;

for (var i = startTime; i < endTime + 1; i++) {
    
    var timeblock = document.createElement('section');
    var hourLabel = document.createElement('div');
    var textEntryEl = document.createElement('form');
    var textEntryBox = document.createElement('div');
    var textArea = document.createElement('textarea');
    
    timeblock.setAttribute("class", "timeblock");
    timeblock.setAttribute("id", ("hour-" + i));
    
    hourLabel.setAttribute("class", "hour-label");
    hourLabel.textContent = (i + ":00");
    textEntryBox.setAttribute("class", "form-group");
    textArea.setAttribute("class", "form-control");
    textArea.setAttribute("id", ("textArea-" + i));
    textArea.setAttribute("rows", "3");

    timeblockContainer.append(timeblock);
    timeblock.append(hourLabel);
    timeblock.append(textEntryEl);
    textEntryEl.append(textEntryBox);
    textEntryBox.append(textArea);
}






{/* <div class="container">
      <!-- Timeblocks go here -->
      <section class="timeblock" id = "hour-8"></section>
      <div class="hour-label">8:00</div>
      <h2 class="">Test text</h2>
      <button class="save">Save icon placeholder</button>
    </div> */}

//     <div class="form-group">
//     <label for="exampleFormControlTextarea1">Example textarea</label>
//     <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//   </div>