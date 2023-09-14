/*
Debouncing and throtling both used for optimization purpose ie it limits the exeution of a function in case of event triggering 
Debouncing -> jab 2 event triggering ke bich main time difference > the certain interval only then the function call is made ie if you are triggering event multiple times the function will only execute if the time difference b/w the consecuive event trigger is > certain interval 

In case of search bar debouncing makes more sense

In case of resizing of window it makes more sense
if you want to know the pattern how many times user is resizing the window 
only call the function when you stop resizing it or exceeds time interval b/w 2 event triggers

// -----------------------------------------------------------------------------
Throttling -> jab pehla event trigger karta ha,the function will be called immediately, now if you make multiple event calls it will not call the same function again till the time differnce b/w these 2 function calls > certain interval ie let suppose this time difference is 300ms and if after 1 func call you trigger the event in the time which is less than 300ms no next function call will be made but if the event is triggered at a time which is >300ms the function call will be made
eg let suppose you want to track how frequent the user is resizing the browser here  if a user is resizing slow or fast no matters what it will ignore all the event triggers for the time interval b/w 2 function calls only make a function 


3rd scenerio on button click 
Debouncing -> it will call the function only if user takes a pause b/w 2 button clicks> certain interval

*/