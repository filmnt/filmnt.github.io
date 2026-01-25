"use strict";
const tickerBaseURL = 'https://s.tradingview.com/embed-widget/ticker-tape/?locale=en#';
  const tickerConfig = {
symbols: [
  { proName: 'IG:NASDAQ', title: 'Nasdaq' },
  { proName: 'NASDAQ:AAPL', title: 'Apple' },
  { proName: 'GETTEX:SSU', title: 'Samsung Electronics(GDR)' },
  { proName: 'NYSE:NET', title: 'Cloudflare' },
  { proName: 'NASDAQ:QCOM', title: 'Qualcomm' },
  { proName: 'NASDAQ:AMD', title: 'AMD' },
  { proName: 'CRYPTO:BTCUSD', title: 'Bitcoin' },
  { proName: 'FX_IDC:USDKRW', title: 'USD/KRW' },
  { proName: 'FX_IDC:JPYKRW', title: 'JPY/KRW' },
  { proName: 'NASDAQ:GOOGL', title: 'Alphabet' }
],

    colorTheme: 'dark',
    isTransparent: false,
    displayMode: 'regular',
    locale: 'en',
  };

  function buildSrc(theme, type) {
    try {
      const config = { ...tickerConfig, colorTheme: theme };
      return `${tickerBaseURL}${encodeURIComponent(JSON.stringify(config))}`;
    } catch (error) {
      return '';
    }
  }

  function updateIframe(theme, id, containerSelector) {
    try {
      const container = document.querySelector(containerSelector);
      if (!container) return;
      const oldIframe = document.getElementById(id);
      if (!oldIframe) return;
      const src = buildSrc(theme, 'ticker');
      if (src) {
        const newIframe = document.createElement('iframe');
        newIframe.id = id;
        newIframe.width = '100%';
        newIframe.height = '45';
        newIframe.frameBorder = '0';
        newIframe.scrolling = 'no';
        newIframe.style.boxSizing = 'border-box';
        newIframe.style.background = 'transparent';
        newIframe.style.border = 'none';
        newIframe.src = src;
        container.replaceChild(newIframe, oldIframe);
      }
    } catch (error) {}
  }

  function getCurrentTheme() {
    try {
      const savedTheme = document.documentElement.getAttribute('saved-theme');
      if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme;
      const isDark = document.documentElement.classList.contains('dark') || document.body.classList.contains('dark');
      return isDark ? 'dark' : 'light';
    } catch (error) {
      return 'dark';
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    try {
      updateIframe(getCurrentTheme(), 'tradingview-widget', '.tradingview-widget-container');
      document.addEventListener('themechange', (e) => {
        const theme = e.detail?.theme || getCurrentTheme();
        updateIframe(theme, 'tradingview-widget', '.tradingview-widget-container');
      });
      window.addEventListener('storage', (e) => {
        if (e.key === 'theme') {
          updateIframe(getCurrentTheme(), 'tradingview-widget', '.tradingview-widget-container');
        }
      });
      document.addEventListener('nav', () => {
        updateIframe(getCurrentTheme(), 'tradingview-widget', '.tradingview-widget-container');
      });
    } catch (error) {}
  });