var notDone1 = document.getElementById("notDone1");
var notDone2 = document.getElementById("notDone2");
var notDone3 = document.getElementById("notDone3");
var notDone4 = document.getElementById("notDone4");
var notDone5 = document.getElementById("notDone5");
var notDone6 = document.getElementById("notDone6");
var notDone7 = document.getElementById("notDone7");

var totalClicks = 0;



notDone1.onclick = function(){
    totalClicks += 1;
    messages();
}
notDone2.onclick = function(){
    totalClicks += 1;
    messages();
}
notDone3.onclick = function(){
    totalClicks += 1;
    messages();
}
notDone4.onclick = function(){
    totalClicks += 1;
    messages();
}
notDone5.onclick = function(){
    totalClicks += 1;
    messages();
}
notDone6.onclick = function(){
    totalClicks += 1;
    messages();
}
notDone7.onclick = function(){
    totalClicks += 1;
    messages();
}

function messages(){
    if(totalClicks <= 1){
        alert("Under Construction. Only the first two work!");
        console.log(totalClicks + " first if");
    }
    else if(totalClicks === 2){
        alert("This is also not done. Don't judge!");
        console.log(totalClicks + " second if");
    }
    else if (totalClicks >= 3) {
        alert("Well now you're just clicking everywhere...");
        console.log(totalClicks + " third if");
    }
};
//var attendanceClerk = "https://rise.articulate.com/share/7mJfnNg6QTpuCMW3WY6VG0gZ8nWXOWNy#/?_k=nzjbwz";
//
//// Get the modal
//var modal = document.getElementById('myModal');
//
//// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
//
//// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
//
//// When the user clicks on the button, open the modal 
//btn.onclick = function() {
//    modal.style.display = "block";
//}
//
//// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//    modal.style.display = "none";
//}
//
//// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
//    if (event.target == modal) {
//        modal.style.display = "none";
//    }
//}