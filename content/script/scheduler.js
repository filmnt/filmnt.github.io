function openSchedule() {
  var modal = document.getElementById('schedule-dialog');
  var closeBtn = modal.previousElementSibling;
  if (!modal || !closeBtn) return;
  modal.style.display = 'block';
  closeBtn.style.display = 'block';
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
  if (!openDialogs.includes('schedule-dialog')) {
    openDialogs.push('schedule-dialog');
    localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
  }
}

function closeSchedule() {
  var modal = document.getElementById('schedule-dialog');
  var closeBtn = modal.previousElementSibling;
  if (!modal || !closeBtn) return;
  modal.style.display = 'none';
  closeBtn.style.display = 'none';
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
  openDialogs = openDialogs.filter(id => id !== 'schedule-dialog');
  localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
}