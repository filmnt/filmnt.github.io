function openExcal() {
  try {
    var modal = document.getElementById('excal-dialog');
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
    if (!openDialogs.includes('excal-dialog')) {
      openDialogs.push('excal-dialog');
      try {
        localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
      } catch (e) {}
    }
  } catch (error) {
    console.error('Error in openExcal:', error);
  }
}

function closeExcal() {
  try {
    var modal = document.getElementById('excal-dialog');
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
    openDialogs = openDialogs.filter(id => id !== 'excal-dialog');
    try {
      localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
    } catch (e) {}
  } catch (error) {
    console.error('Error in closeExcal:', error);
  }
}
