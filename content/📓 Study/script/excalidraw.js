// Function to open the dialog
function openExcal() {
    var dialog = document.getElementById('excal-dialog');
    dialog.showModal();
  }
  
  // Function to close the dialog with animation
  function closeExcal() {
    var dialog = document.getElementById('excal-dialog');
    
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
  
  // // Add event listener to the dialog's backdrop
  // document.getElementById('excal-dialog').addEventListener('click', function(event) {
  //   if (event.target === this) {
  //     closeExcal();
  //   }
  // });
  
  // document.getElementById('excal-dialog').addEventListener('click', function(event) {
  //   if (event.target === this) {
  //     closeNavbar();
  //   }
  // });