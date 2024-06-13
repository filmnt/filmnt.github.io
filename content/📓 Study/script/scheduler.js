// Function to open the dialog
function openSchedule() {
    var dialog = document.getElementById('schedule-dialog');
    dialog.showModal();
  }
  
  // Function to close the dialog with animation
  function closeSchedule() {
    var dialog = document.getElementById('schedule-dialog');
    
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
  document.getElementById('schedule-dialog').addEventListener('click', function(event) {
    if (event.target === this) {
      closeSchedule();
    }
  });
  
  document.getElementById('schedule-dialog').addEventListener('click', function(event) {
    if (event.target === this) {
      closeNavbar();
    }
  });