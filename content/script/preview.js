function readFile(input) {
    if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
    var htmlPreview =
    '<iframe width="100%" height="2000px"  frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0" src="' + e.target.result + '" ></iframe>' +
    '<p>' + input.files[0].name + '</p>';
    var wrapperZone = $(input).parent();
    var previewZone = $(input).parent().parent().find('.preview-zone');
    var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');
    
    wrapperZone.removeClass('dragover');
    previewZone.removeClass('hidden');
    boxZone.empty();
    boxZone.append(htmlPreview);
    };
    
    reader.readAsDataURL(input.files[0]);
    $('.dropzone-wrapper').hide();
    }
    }
    
    function reset(e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
    $('.dropzone-wrapper').show();
    }
    
    $(".dropzone").change(function() {
    readFile(this);
    });
    
    $('.dropzone-wrapper').on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragover');
    });
    
    $('.dropzone-wrapper').on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');
    });
    
    $('.remove-preview').on('click', function() {
    var boxZone = $(this).parents('.preview-zone').find('.box-body');
    var previewZone = $(this).parents('.preview-zone');
    var dropzone = $(this).parents('.form-group').find('.dropzone');
    boxZone.empty();
    previewZone.addClass('hidden');
    reset(dropzone);
    });



// Function to open the dialog
function openPreview() {
    var dialog = document.getElementById('preview-dialog');
    dialog.showModal();
    }
  
  // Function to close the dialog with animation
  function closePreview() {
    var dialog = document.getElementById('preview-dialog');
    
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
  // document.getElementById('preview-dialog').addEventListener('click', function(event) {
  //   if (event.target === this) {
  //     closePreview();
  //   }
  // });
  
  // document.getElementById('preview-dialog').addEventListener('click', function(event) {
  //   if (event.target === this) {
  //     closeNavbar();
  //   }
  // });