function readFile(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var htmlPreview =
        '<iframe width="100%" height="2000px" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0" src="' + e.target.result + '"></iframe>' +
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

function openPreview() {
  var modal = document.getElementById('preview-dialog');
  var closeBtn = modal.previousElementSibling;
  if (!modal || !closeBtn) return;
  modal.style.display = 'block';
  closeBtn.style.display = 'block';
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
  if (!openDialogs.includes('preview-dialog')) {
    openDialogs.push('preview-dialog');
    localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
  }
}

function closePreview() {
  var modal = document.getElementById('preview-dialog');
  var closeBtn = modal.previousElementSibling;
  if (!modal || !closeBtn) return;
  modal.style.display = 'none';
  closeBtn.style.display = 'none';
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
  openDialogs = openDialogs.filter(id => id !== 'preview-dialog');
  localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
}