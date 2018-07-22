$("document").ready(function(){
  var goal = 0;
  var total= 0;
  var newWater;
  var goalReached = false;
  var archive = [];
  var unit = "onces";
  var newUser = true;
  var addWater;
  var glassNum = 0;
  
  
  //set goal
  $("#setGoal").click( function(){
    goal= prompt("Set a daily goal in " + unit, 64 )
  });
  
  //log Water
  $("#logWater").click( function(){
    glassNum++;
    //add new water to total
    addWater = parseInt(prompt("Add water amount in onces:", 8));
    total = total + addWater;
    //add new water to glass
    var newDiv = "<div class='newWater'></div>";
    var height = 50 * glassNum;
    $("#water").append(newDiv);
   var dateTime = getDate();
    var waterAmount = $("<p></p>").text(addWater + unit);
    $(".newWater:last").css("height",height + "px").text(dateTime).append(waterAmount);
    
    
  });
  //show total
  $("#dailyTotal").click( function(){
    if(goal == total){
      alert("Congrats! You have reached your daily water goal! Way to be hydrated");
      goalReached = true;
    }
    else if(goal > total){
    alert("You have had " + total + " onces of water today. You need " + (goal - total) + " more onces to reach your total.");
    }
    else if(total > 299){
      alert("You have had "+ total + " " + unit + " of water today. You are in danger of hyponatremia (too much water). You can stop drinking now!")}
      else if(total > goal){
        alert("You have had" + total + " " + unit + " of water today. You have exceeded your goal by " + (total - goal) + " "+ unit + " you overachiver!")
      };
      
    
  });
  //get current date and time
  function getDate(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
return date +' '+ time;
  }
});