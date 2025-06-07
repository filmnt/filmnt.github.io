function openGraph() {
  var modal = document.getElementById('graph-dialog');
  var closeBtn = modal.previousElementSibling;
  if (!modal || !closeBtn) return;
  modal.style.display = 'block';
  closeBtn.style.display = 'block';
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
  if (!openDialogs.includes('graph-dialog')) {
    openDialogs.push('graph-dialog');
    localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
  }
}

function closeGraph() {
  var modal = document.getElementById('graph-dialog');
  var closeBtn = modal.previousElementSibling;
  if (!modal || !closeBtn) return;
  modal.style.display = 'none';
  closeBtn.style.display = 'none';
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];
  openDialogs = openDialogs.filter(id => id !== 'graph-dialog');
  localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
}