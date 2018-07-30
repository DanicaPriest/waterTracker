$("document").ready(function(){
  var goal = 0;
  var total= 0;
  var newWater;
  var goalReached = false;
  var archive = [];
  var unit = "oz";
  var newUser = true;
  var addWater;
  var glassNum = 0;
  
  //settings
  $("input[type='radio']").on('click', function(){
        unit = $("input[name='unit']:checked").val();
        
    });
  
  
  //set goal
  $("#setGoal").click( function(){
    goal= prompt("Set a daily goal in " + unit, 64 )
  });
  
  //log Water
  $("#logWater").click( function(){
    if(glassNum >= 8){
      resetGlass();
    }
    glassNum++;
    //add new water to total
    addWater = parseInt(prompt("Add water amount in onces:", 8));
    total = total + addWater;
    //add new water to glass
	if(addWater != NaN){
    var newDiv = "<div class='newWater'></div>";
    var height = 50 * glassNum;
    $("#water").append(newDiv);
   var dateTime = getNewDate();
    var waterAmount = $("<p></p>").text(addWater + unit);
    $(".newWater:last").css("height",height + "px").text(dateTime).append(waterAmount);
    //add logged water to archive
    archive.push(dateTime + " - " + addWater + unit);
    }
    
  });
  //show total
  $("#dailyTotal").click( function(){
    if(goal == 0){
      alert("You have had " + total + unit +" of water today. Click on the Goal button to set a daily goal.");
      
    }
    else if(goal == total){
      alert("Congrats! You have reached your daily water goal! Way to be hydrated");
      goalReached = true;
    }
    else if(goal > total){
    alert("You have had " + total + unit + " of water today. You need " + (goal - total) + " more "+ unit +" to reach your total.");
    }
    else if(unit=="oz" && total > 299){
      alert("You have had "+ total + " " + unit + " of water today. You are in danger of hyponatremia (too much water). You can stop drinking now!")}
      else if(total > goal){
        alert("You have had" + total + " " + unit + " of water today. You have exceeded your goal by " + (total - goal) + " "+ unit + " you overachiver!")
      };
      
    
  });
  //archive button
  $("#clean").click( function(){
    $("#archiveBody").empty();
    for(var i = 0; i < archive.length; i++){
    $("#archiveBody").prepend($("<p></p>").text(archive[i]));
    }
  });
  //get current date and time
  function getNewDate(){
    var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
return date +' '+ time;
  }
  //reset Day
  $("#resetDay").click( function(){
    resetVars();
    resetGlass();
  });
  //clear all data
  $("#clearAll").click( function(){ 
    resetVars();
    resetGlass();
    archive= [];
    
  });
  function resetVars(){
    total=0;
    goal=0;
    addWater = 0;
  }
  function resetGlass(){
    glassNum = 0;
    $(".newWater").remove();
  }
  
});