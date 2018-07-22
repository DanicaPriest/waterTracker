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
  
  console.log(typeof goal)
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
    $(".newWater:last").css("height",height + "px");
    
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
  
});