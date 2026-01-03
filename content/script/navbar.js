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

  if (modal.style.display === 'block') {
    modal.style.display = 'none';
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
  } else {
    modal.style.display = 'block';
    openDialogs.forEach(id => {
      const dialog = document.getElementById(id);
      const dialogCloseBtn = dialog ? dialog.previousElementSibling : null;
      if (dialog && dialogCloseBtn) {
        dialog.style.display = 'block';
        dialogCloseBtn.style.display = 'block';
      }
    });
 }
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
    const sourceIframe = event.source;
    if (event.data.type === 'nicknameChange') {
      iframes.forEach((iframe) => {
        if (iframe.contentWindow && iframe.contentWindow !== sourceIframe) {
          try {
            iframe.contentWindow.postMessage(
              {
                type: 'nicknameChange',
                userId: event.data.userId,
                newName: event.data.newName,
                newColor: event.data.newColor,
              },
              'https://chat.filmnt.workers.dev'
            );
          } catch (e) {
            console.error('Failed to post nicknameChange message to iframe:', e);
          }
        }
      });
    } else if (event.data.type === 'themeChange' && ['light', 'dark'].includes(event.data.theme)) {
      iframes.forEach((iframe) => {
        if (iframe.contentWindow && iframe.contentWindow !== sourceIframe) {
          try {
            iframe.contentWindow.postMessage(
              {
                type: 'themeChange',
                theme: event.data.theme,
              },
              'https://chat.filmnt.workers.dev'
            );
          } catch (e) {
            console.error('Failed to post themeChange message to iframe:', e);
          }
        }
      });
    } else if (event.data.type === 'systemMessage') {
      iframes.forEach((iframe) => {
        if (iframe.contentWindow && iframe.contentWindow !== sourceIframe) {
          try {
            iframe.contentWindow.postMessage(
              {
                type: 'systemMessage',
                message: event.data.message,
              },
              'https://chat.filmnt.workers.dev'
            );
          } catch (e) {
            console.error('Failed to post systemMessage to iframe:', e);
          }
        }
      });
    } else if (event.data.type === 'users') {
      const uniqueUsers = Array.from(new Set(event.data.users));
      iframes.forEach((iframe) => {
        if (iframe.contentWindow && iframe.contentWindow !== sourceIframe) {
          try {
            iframe.contentWindow.postMessage(
              {
                type: 'users',
                users: uniqueUsers,
              },
              'https://chat.filmnt.workers.dev'
            );
          } catch (e) {
            console.error('Failed to post users message to iframe:', e);
          }
        }
      });
    }
  } catch (e) {
    console.error('Error processing message event:', e);
  }
});