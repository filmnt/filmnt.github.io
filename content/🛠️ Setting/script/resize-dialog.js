const dialogIds = ['schedule-dialog', 'excal-dialog', 'graph-dialog', 'preview-dialog'];
const MIN_WIDTH = 412;
const DEFAULT_WIDTH = 412;
const MAX_WIDTH = 850;
const RESIZE_HANDLE_WIDTH = 50;

dialogIds.forEach(dialogId => {
  const dialog = document.getElementById(dialogId);
  if (!dialog) return;

  const closeButton = document.querySelector(`button[onclick="close${dialogId.replace('-dialog', '')}()"]`);
  const savedWidth = localStorage.getItem(`dialog-width-${dialogId}`);
  const initialWidth = savedWidth ? parseFloat(savedWidth) : DEFAULT_WIDTH;

  dialog.style.boxSizing = 'border-box';
  dialog.style.position = 'fixed';
  dialog.style.right = '0';
  dialog.style.width = `${initialWidth}px`;
  dialog.style.maxWidth = `${MAX_WIDTH}px`;
  dialog.style.minWidth = `${MIN_WIDTH}px`;
  dialog.style.height = '100vh';
  dialog.style.maxHeight = '100vh';
  dialog.style.overflowX = 'hidden';
  dialog.style.overflowY = 'auto';
  dialog.style.resize = 'none';
  dialog.style.pointerEvents = 'auto';
  dialog.style.zIndex = '20000';

  const resizeHandle = document.createElement('div');
  resizeHandle.style.position = 'absolute';
  resizeHandle.style.left = `-${RESIZE_HANDLE_WIDTH}px`;
  resizeHandle.style.top = '0';
  resizeHandle.style.width = `${RESIZE_HANDLE_WIDTH}px`;
  resizeHandle.style.height = '100%';
  resizeHandle.style.background = 'transparent';
  resizeHandle.style.cursor = 'col-resize';
  resizeHandle.style.zIndex = '20001';
  dialog.appendChild(resizeHandle);

  if (closeButton) {
    closeButton.style.position = 'fixed';
    closeButton.style.top = '10px';
    closeButton.style.left = `calc(100% - ${initialWidth + 40}px)`;
    closeButton.style.zIndex = '20001';
  }

  let isResizing = false;
  let startX, startWidth;

  const iframes = dialog.querySelectorAll('iframe');

  const disableIframeEvents = () => {
    iframes.forEach(iframe => {
      iframe.style.pointerEvents = 'none';
    });
  };

  const enableIframeEvents = () => {
    iframes.forEach(iframe => {
      iframe.style.pointerEvents = 'auto';
    });
  };

  const startResize = (x) => {
    const rect = dialog.getBoundingClientRect();
    if (x >= rect.left - RESIZE_HANDLE_WIDTH && x <= rect.left + 10) {
      isResizing = true;
      startX = x;
      startWidth = rect.width;
      disableIframeEvents();
    }
  };

  const moveResize = (x) => {
    const rect = dialog.getBoundingClientRect();
    if (!isResizing) {
      if (dialog.style.display !== 'none' && 
          x >= rect.left - RESIZE_HANDLE_WIDTH && 
          x <= rect.left + 10) {
        dialog.style.cursor = 'col-resize';
      } else {
        dialog.style.cursor = 'default';
      }
      return;
    }

    const newWidth = startWidth + (startX - x);
    if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
      dialog.style.width = `${newWidth}px`;
      localStorage.setItem(`dialog-width-${dialogId}`, newWidth);
      if (closeButton) {
        closeButton.style.left = `calc(100% - ${newWidth + 40}px) !important`;
      }
    }
  };

  const endResize = () => {
    if (isResizing) {
      isResizing = false;
      dialog.style.cursor = 'default';
      enableIframeEvents();
    }
  };

  resizeHandle.addEventListener('mousedown', (e) => {
    startResize(e.clientX);
    e.preventDefault();
    e.stopPropagation();
  });

  resizeHandle.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      startResize(e.touches[0].clientX);
    }
  });

  dialog.addEventListener('mousedown', (e) => {
    startResize(e.clientX);
    e.preventDefault();
    e.stopPropagation();
  });

  dialog.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      startResize(e.touches[0].clientX);
    }
  });

  document.addEventListener('mousemove', (e) => {
    moveResize(e.clientX);
  });

  document.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1) {
      moveResize(e.touches[0].clientX);
      e.preventDefault();
    }
  });

  document.addEventListener('mouseup', endResize);
  document.addEventListener('touchend', endResize);
  document.addEventListener('touchcancel', endResize);

  window.addEventListener('resize', () => {
    const currentWidth = parseFloat(dialog.style.width) || initialWidth;
    const newMaxWidth = Math.min(window.innerWidth * 0.9, MAX_WIDTH);
    dialog.style.maxWidth = `${newMaxWidth}px`;
    if (currentWidth > newMaxWidth) {
      dialog.style.width = `${newMaxWidth}px`;
      localStorage.setItem(`dialog-width-${dialogId}`, newMaxWidth);
      if (closeButton) {
        closeButton.style.left = `calc(100% - ${newMaxWidth + 40}px) !important`;
      }
    }
  });

  const observer = new MutationObserver(() => {
    const newWidth = parseFloat(getComputedStyle(dialog).width) || initialWidth;
    if (closeButton) {
      closeButton.style.left = `calc(100% - ${newWidth + 40}px) !important`;
    }
  });
  observer.observe(dialog, { attributes: true, attributeFilter: ['style'] });

  iframes.forEach(iframe => {
    iframe.style.pointerEvents = 'auto';
    iframe.style.position = 'absolute';
    iframe.style.zIndex = '20003';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.top = '0';
    iframe.style.left = '0';
  });

  const contentDiv = dialog.querySelector('div');
  if (contentDiv) {
    contentDiv.style.pointerEvents = 'auto';
    contentDiv.style.position = 'relative';
    contentDiv.style.zIndex = '20004';
    contentDiv.style.height = '100%';
  }
});