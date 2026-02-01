function readFile(input) {
  try {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        try {
          var htmlPreview =
            '<iframe width="100%" height="2000px" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0" src="' + e.target.result + '"></iframe>' +
            '<p>' + input.files[0].name + '</p>';
          var wrapperZone = $(input).parent();
          var previewZone = $(input).parent().parent().find('.preview-zone');
          var boxZone = previewZone.find('.box').find('.box-body');
          if (wrapperZone.length && previewZone.length && boxZone.length) {
            wrapperZone.removeClass('dragover');
            previewZone.removeClass('hidden');
            boxZone.empty();
            boxZone.append(htmlPreview);
          }
        } catch (error) {
          console.error('Error in reader.onload:', error);
        }
      };
      reader.readAsDataURL(input.files[0]);
      $('.dropzone-wrapper').hide();
    }
  } catch (error) {
    console.error('Error in readFile:', error);
  }
}

function reset(e) {
  try {
    if (e && e.wrap && e.closest && e.unwrap) {
      e.wrap('<form>').closest('form').get(0).reset();
      e.unwrap();
      $('.dropzone-wrapper').show();
    }
  } catch (error) {
    console.error('Error in reset:', error);
  }
}

$(".dropzone").change(function() {
  try {
    readFile(this);
  } catch (error) {
    console.error('Error in .change handler:', error);
  }
});

$('.dropzone-wrapper').on('dragover', function(e) {
  try {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragover');
  } catch (error) {
    console.error('Error in dragover handler:', error);
  }
});

$('.dropzone-wrapper').on('dragleave', function(e) {
  try {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');
  } catch (error) {
    console.error('Error in dragleave handler:', error);
  }
});

$('.remove-preview').on('click', function() {
  try {
    var boxZone = $(this).parents('.preview-zone').find('.box-body');
    var previewZone = $(this).parents('.preview-zone');
    var dropzone = $(this).parents('.form-group').find('.dropzone');
    if (boxZone.length && previewZone.length && dropzone.length) {
      boxZone.empty();
      previewZone.addClass('hidden');
      reset(dropzone);
    }
  } catch (error) {
    console.error('Error in remove-preview click handler:', error);
  }
});

function openPreview() {
  try {
    var modal = document.getElementById('preview-dialog');
    var closeBtn = modal ? modal.previousElementSibling : null;
    if (!modal || !closeBtn) return;
    modal.style.display = 'block';
    closeBtn.style.display = 'block';
    let openDialogs = [];
    try {
      openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
    } catch (e) {
      openDialogs = [];
    }
    if (!Array.isArray(openDialogs)) openDialogs = [];
    if (!openDialogs.includes('preview-dialog')) {
      openDialogs.push('preview-dialog');
      try {
        localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
      } catch (e) {}
    }
  } catch (error) {
    console.error('Error in openPreview:', error);
  }
}

function closePreview() {
  try {
    var modal = document.getElementById('preview-dialog');
    var closeBtn = modal ? modal.previousElementSibling : null;
    if (!modal || !closeBtn) return;
    modal.style.display = 'none';
    closeBtn.style.display = 'none';
    let openDialogs = [];
    try {
      openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
    } catch (e) {
      openDialogs = [];
    }
    if (!Array.isArray(openDialogs)) openDialogs = [];
    openDialogs = openDialogs.filter(id => id !== 'preview-dialog');
    try {
      localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
    } catch (e) {}
  } catch (error) {
    console.error('Error in closePreview:', error);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const dropzoneDescs = document.querySelectorAll('.dropzone-desc');

  dropzoneDescs.forEach(desc => {
    desc.style.cursor = 'pointer'; 

    const input = desc.closest('.dropzone-wrapper')?.querySelector('.dropzone');
    if (!input) return;

    desc.addEventListener('click', () => {
      input.click();
    });

    desc.addEventListener('touchend', (e) => {
      e.preventDefault(); 
      input.click();
    });
  });
});
