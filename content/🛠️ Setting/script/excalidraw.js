function openExcal() {
  var modal = document.getElementById('excal-dialog');
  var closeBtn = modal.previousElementSibling;
  if (!modal || !closeBtn) return;
  modal.style.display = 'block';
  closeBtn.style.display = 'block';
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
  if (!openDialogs.includes('excal-dialog')) {
    openDialogs.push('excal-dialog');
    localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
  }
}

function closeExcal() {
  var modal = document.getElementById('excal-dialog');
  var closeBtn = modal.previousElementSibling;
  if (!modal || !closeBtn) return;
  modal.style.display = 'none';
  closeBtn.style.display = 'none';
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
  openDialogs = openDialogs.filter(id => id !== 'excal-dialog');
  localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
}