// WHY ISNT LINE 53 WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//-----------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
   
    
   
    var currentHour = dayjs().hour()
  
   var everyHour = ($(".time-block"))
    for (var i =0; i < everyHour.length; i++){
       if (currentHour === parseInt(((everyHour[i].id).substring(5)))){
        $(everyHour[i]).removeClass("future")
        $(everyHour[i]).addClass("present")
       }
       else if((currentHour > parseInt(((everyHour[i].id).substring(5))))){
        $(everyHour[i]).removeClass("future")
        $(everyHour[i]).addClass("past")
       }
       
    }
   
    
    
    
    
    
    
    
    
    
    
    var wordsAt9 = localStorage.getItem("at9")
      $("#t9").val(wordsAt9)
    
    var wordsAt10 = localStorage.getItem("at10")
      $("#t10").val(wordsAt10)
    var wordsAt11 = localStorage.getItem("at11")
      $("#t11").val(wordsAt11)
    var wordsAt12 = localStorage.getItem("at12")
      $("#t12").val(wordsAt12)
    var wordsAt1 = localStorage.getItem("at1")
      $("#t1").val(wordsAt1)
    var wordsAt2 = localStorage.getItem("at2")
      $("#t2").val(wordsAt2)
    
      var wordsAt3 = localStorage.getItem("at3")
      $("#t3").val(wordsAt3)
      
    var wordsAt4 = localStorage.getItem("at4")
    $("#t4").val(wordsAt4)
    
    var wordsAt5 = localStorage.getItem("at5")
      $("#t5").val(wordsAt5)
    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    
   $("#b9").on("click", function(){
    var textAt9 = $("#t9").val()
    localStorage.setItem("at9", textAt9)
   }) 
     
   $("#b10").on("click", function(){
    var textAt10 = $("#t10").val()
    localStorage.setItem("at10", textAt10)
   }) 
    
   $("#b11").on("click", function(){
    var textAt11 = $("#t11").val()
    localStorage.setItem("at11", textAt11)
   }) 
    
   $("#b12").on("click", function(){
    var textAt12 = $("#t12").val()
    localStorage.setItem("at12", textAt12)
   }) 
    
   $("#b1").on("click", function(){
    var textAt1 = $("#t1").val()
    localStorage.setItem("at1", textAt1)
   }) 
    
   $("#b2").on("click", function(){
    var textAt2 = $("#t2").val()
    localStorage.setItem("at2", textAt2)
    

   }) 
    
   $("#b3").on("click", function(){
    var textAt3 = $("#t3").val()
    localStorage.setItem("at3", textAt3)
   }) 
    
   $("#b4").on("click", function(){
    var textAt4 = $("#t4").val()
    localStorage.setItem("at4", textAt4)
   }) 
    
   $("#b5").on("click", function(){
    var textAt5 = $("#t5").val()
    localStorage.setItem("at5", textAt5)
   }) 
    
    
    

   
   
   
   
    var currentDate = dayjs().format('dddd, MMMM D')
    dayjs.locale('en');
    if (dayjs().get("D") == 1){
    
    $("#currentDay").text(currentDate + "st")
    }
    else if (dayjs().get("D") == 2){
       
        $("#currentDay").text(currentDate + "nd")
        }
    else if (dayjs().get("D") == 3){
           
            $("#currentDay").text(currentDate + "rd")
            }
    else {
        $("#currentDay").text(currentDate + "th")
        }
                
    
    
 
   });
  