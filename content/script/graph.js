function openGraph() {
  try {
    var modal = document.getElementById('graph-dialog');
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
    if (!openDialogs.includes('graph-dialog')) {
      openDialogs.push('graph-dialog');
      try {
        localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
      } catch (e) {}
    }
  } catch (error) {
    console.error('Error in openGraph:', error);
  }
}

function closeGraph() {
  try {
    var modal = document.getElementById('graph-dialog');
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
    openDialogs = openDialogs.filter(id => id !== 'graph-dialog');
    try {
      localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
    } catch (e) {}
  } catch (error) {
    console.error('Error in closeGraph:', error);
  }
}
