# Water Tracker

App can be found at https://water-tracker.herokuapp.com/

# Overview

This app tracks how much water a user has had to drink and allows the user to set goals in their preferred unit of measurement. The user can check the history of every water amount they have logged by clicking the archive button.  


# + (settings button)
user can choose between onces or milileters to log their water intake. Default is onces.

# Reset
The "Reset Day" option clears all water logged from the daily total but the log history can still be viewed in the arcive.
The "Clear All Data" option clears all water logged from the daily total and clears the archive.

# Total
Tells users how much water they have logged and how much they have left to drink to get their daily goal. If they are over their goal the amount over the daily goal is shown instead. If they are close to drinking too much water in a day it tells them to stop drinking. 

# Log
Allows to user to input the amount they have had to drink and log it into the system.

# Goal
Allows user to set a daily goal for wter intake in either onces or mililiters

# Archive
User can see how much water they have logged since opening the app

# Improvements and Additions

Add back-end element and database:<br>
To make the application not just a static site I would connect it to a database so user information could be stored and OAuth could be implimented allowing the user to log on and access their stored information.

Check local water condition:
I would find and use an existing api to check the water conditions in the user's location and determine if the water in the local area is safe for drinking. 

Gamify:
Adding rewards and challenges to motivate the user to reach their daily goals.

# Languages and frameworks used

Wireframes-Figma I used figma (https://www.figma.com)
Front End Languges- HTML,CSS, Javascript
Frameworks and Libraries- Bootstrap, JQuery, Google Fonts
Deployment- Heroku (with added php file to make the app deployable) 
