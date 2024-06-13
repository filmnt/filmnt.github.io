// clock
function showTime(){
    var date = new Date();
  
    const week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
    var w  = week[date.getDay()];

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var month = monthNames[date.getMonth()];

    var d = date.getDate();
    var y = date.getFullYear();
  
    var time =date.toTimeString().slice(0,8)+ " - " + w + ", " + month + " " + d + ", " + y ;
    document.getElementById("navclock").textContent = time;
  
    setTimeout(showTime, 1000);
  }
  
  showTime();


// link
var url = document.getElementById( 'links' );
url.onchange = function() {window.open( this.options[ this.selectedIndex ].value, '_blank');
$('#links').prop('selectedIndex',0);};


// dialog
function openNavbar() {
    var dialog = document.getElementById('navbar-dialog');
    dialog.showModal();
  }
  
  // Function to close the dialog with animation
  function closeNavbar() {
    var dialog = document.getElementById('navbar-dialog');
    
    // Add a class to trigger the closing animation
    dialog.classList.add('closing');
  
    // Listen for animation end event
    dialog.addEventListener('animationend', function() {
      // After animation completes, close the dialog
      dialog.close();
      
      // Remove the closing class to reset for next time
      dialog.classList.remove('closing');
    }, { once: true }); // Use { once: true } to automatically remove the event listener after it's fired once
  }
  
  // Add event listener to the dialog's backdrop
  document.getElementById('navbar-dialog').addEventListener('click', function(event) {
    if (event.target === this) {
      closeNavbar();
    }
  });


