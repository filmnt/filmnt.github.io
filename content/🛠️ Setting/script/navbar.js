function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " - " + days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  document.getElementById("navclock").innerText = time;
  document.getElementById("navclock").textContent = time;
  
  setTimeout(showTime, 1000);
}

function toggleNavbar() {
  const modal = document.getElementById('navbar-dialog');
  const closeBtn = document.querySelector('button[onclick="closeNavbar()"]');
  const dialogs = [
    'schedule-dialog',
    'study-dialog',
    'food-dialog',
    'excal-dialog',
    'graph-dialog',
    'preview-dialog'
  ];
  let openDialogs = JSON.parse(localStorage.getItem('openDialogs')) || [];

  if (!modal) {
    console.error('navbar-dialog not found');
    return;
  }
  if (!closeBtn) {
    console.error('closeNavbar button not found');
    return;
  }

  if (modal.style.display === 'block') {
    modal.style.display = 'none';
    closeBtn.style.display = 'none';
    openDialogs = [];
    dialogs.forEach(id => {
      const dialog = document.getElementById(id);
      const dialogCloseBtn = dialog ? dialog.previousElementSibling : null;
      if (dialog && dialog.style.display === 'block') {
        openDialogs.push(id);
        dialog.style.display = 'none';
        if (dialogCloseBtn) dialogCloseBtn.style.display = 'none';
      }
    });
    localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
    console.log('navbar-dialog closed, openDialogs:', openDialogs);
  } else {
    modal.style.display = 'block';
    closeBtn.style.display = 'block';
    openDialogs.forEach(id => {
      const dialog = document.getElementById(id);
      const dialogCloseBtn = dialog ? dialog.previousElementSibling : null;
      if (dialog && dialogCloseBtn) {
        dialog.style.display = 'block';
        dialogCloseBtn.style.display = 'block';
      }
    });
    console.log('navbar-dialog opened, closeBtn display:', closeBtn.style.display, 'openDialogs:', openDialogs);
  }
}

function closeNavbar() {
  const modal = document.getElementById('navbar-dialog');
  const closeBtn = document.querySelector('button[onclick="closeNavbar()"]');
  const dialogs = [
    'schedule-dialog',
    'study-dialog',
    'food-dialog',
    'excal-dialog',
    'graph-dialog',
    'preview-dialog'
  ];

  if (modal) modal.style.display = 'none';
  if (closeBtn) closeBtn.style.display = 'none';

  dialogs.forEach(id => {
    const dialog = document.getElementById(id);
    const dialogCloseBtn = dialog ? dialog.previousElementSibling : null;
    if (dialog && dialog.style.display === 'block') {
      dialog.style.display = 'none';
      if (dialogCloseBtn) dialogCloseBtn.style.display = 'none';
    }
  });
  localStorage.setItem('openDialogs', JSON.stringify([]));
  console.log('closeNavbar called, all dialogs closed');
}

document.getElementById('links').addEventListener('change', function() {
  if (this.value) {
    window.open(this.value, '_blank');
    this.value = '';
  }
});

showTime();

window.addEventListener('message', (event) => {
  const allowedOrigins = [
    'http://localhost:3600',
    'http://localhost:8080',
    'https://chat.filmnt.workers.dev',
    'https://filmnt.github.io',
    'https://filmnt.pages.dev',
    'http://mac:8080',
    'http://tab:8080',
  ];
  if (!allowedOrigins.includes(event.origin)) return;

  try {
    const iframes = document.querySelectorAll('iframe');
    if (event.data.type === 'nicknameChange') {
      iframes.forEach((iframe) => {
        if (iframe.contentWindow) {
          try {
            iframe.contentWindow.postMessage(
              {
                type: 'nicknameChange',
                userId: event.data.userId,
                newName: event.data.newName,
                newColor: event.data.newColor,
              },
              '*'
            );
          } catch (e) {
            console.error('Failed to post message to iframe:', e);
          }
        }
      });
    } else if (event.data.type === 'themeChange' && ['light', 'dark'].includes(event.data.theme)) {
      iframes.forEach((iframe) => {
        if (iframe.contentWindow) {
          try {
            iframe.contentWindow.postMessage(
              {
                type: 'themeChange',
                theme: event.data.theme,
              },
              '*'
            );
          } catch (e) {
            console.error('Failed to post message to iframe:', e);
          }
        }
      });
    } else if (event.data.type === 'systemMessage') {
      iframes.forEach((iframe) => {
        if (iframe.contentWindow) {
          try {
            iframe.contentWindow.postMessage(
              {
                type: 'systemMessage',
                message: event.data.message,
              },
              '*'
            );
          } catch (e) {
            console.error('Failed to post message to iframe:', e);
          }
        }
      });
    }
  } catch (e) {
    console.error('Error processing message event:', e);
  }
});