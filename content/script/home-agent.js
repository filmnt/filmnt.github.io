(function(window) {
  const unknown = '-';
  let browser = unknown, version = unknown, os = unknown, osVersion = unknown, device = unknown;
  const ua = navigator.userAgent || '';
  const platform = navigator.platform || '';
  const isSamsung = /SM-[A-Z][0-9]{3}[A-Z0-9]*|SC-[A-Z0-9]+|SGH-[A-Z0-9]+|GT-[A-Z0-9]+|SCH-[A-Z0-9]+|SamsungBrowser|SAMSUNG|Galaxy/i.test(ua);
  const isMobile = /Mobile|Tablet/.test(ua) && !/Windows NT/.test(ua) && (navigator.maxTouchPoints && navigator.maxTouchPoints > 0 || typeof window.orientation !== 'undefined');
  let isSamsungFromUAData = false;
  if (navigator.userAgentData && navigator.userAgentData.brands) {
    isSamsungFromUAData = navigator.userAgentData.brands.some(brand => /Samsung|Galaxy/i.test(brand.brand));
  }
  if (/Windows NT/.test(ua)) {
    os = 'Windows';
    device = 'Windows';
    osVersion = ua.match(/Windows NT ([\d.]+)/)?.[1] || unknown;
  } else if (/Android/.test(ua) || isSamsung || isSamsungFromUAData || /EdgA?|Whale\/([\d.]+)/.test(ua)) {
    osVersion = ua.match(/Android\s([\d.]+)/)?.[1] || unknown;
    if (isSamsung || isSamsungFromUAData || /SamsungBrowser|EdgA?|Whale\/([\d.]+)/.test(ua)) {
      os = 'Galaxy';
      device = 'Galaxy';
    } else if (/Android TV/.test(ua)) {
      os = 'Android TV';
      device = 'Android TV';
    } else {
      os = 'Android';
      device = 'Android';
    }
  } else if (/AppleTV/.test(ua)) {
    os = 'tvOS';
    device = 'Apple TV';
    osVersion = ua.match(/AppleTV.*?(\d+\.\d+)/)?.[1] || unknown;
  } else if (/Nintendo Switch/.test(ua)) {
    os = 'Nintendo OS';
    device = 'Nintendo Switch';
  } else if (/PlayStation/.test(ua)) {
    os = 'Orbis OS';
    device = 'PlayStation';
  } else if (/Xbox/.test(ua)) {
    os = 'Xbox OS';
    device = 'Xbox';
  } else if (/Steam Deck/i.test(ua)) {
    os = 'SteamOS';
    device = 'Steam Deck';
    osVersion = ua.match(/SteamOS\s([\d.]+)/)?.[1] || unknown;
  } else if (/iPad/.test(ua)) {
    os = 'iPadOS';
    device = 'iPad';
    osVersion = ua.match(/OS ([\d_]+)/)?.[1]?.replace(/_/g, '.') || unknown;
  } else if (/iPhone|iPod/.test(ua)) {
    os = 'iOS';
    device = 'iPhone';
    osVersion = ua.match(/OS ([\d_]+)/)?.[1]?.replace(/_/g, '.') || unknown;
  } else if (/Macintosh/.test(ua)) {
    os = 'Mac';
    device = 'Mac';
    osVersion = ua.match(/Mac OS X ([\d_]+)/)?.[1]?.replace(/_/g, '.') || unknown;
  } else if (/CrOS/.test(ua)) {
    os = 'Chrome OS';
    device = 'Chromebook';
  } else if (/Tizen/.test(ua) || /SMART-TV/.test(ua)) {
    os = 'Tizen';
    device = 'Samsung Smart TV';
  } else if (/Web0S/.test(ua) || /webOS/i.test(ua)) {
    os = 'WebOS';
    device = 'LG Smart TV';
  } else if (/Linux/.test(ua) && !/Android/.test(ua) && !isMobile && !isSamsung && !isSamsungFromUAData) {
    if (/Ubuntu/.test(ua)) {
      os = 'Ubuntu';
    } else if (/Fedora/.test(ua)) {
      os = 'Fedora';
    } else if (/Debian/.test(ua)) {
      os = 'Debian';
    } else if (/Arch/.test(ua)) {
      os = 'Arch Linux';
    } else if (/Red Hat/.test(ua)) {
      os = 'Red Hat';
    } else if (/Mint/.test(ua)) {
      os = 'Linux Mint';
    } else if (/CentOS/.test(ua)) {
      os = 'CentOS';
    } else {
      os = 'Linux';
    }
    device = 'Linux';
    osVersion = unknown;
  } else if (isMobile && /Firefox\/([\d.]+)/.test(ua)) {
    osVersion = ua.match(/Android\s([\d.]+)/)?.[1] || unknown;
    os = (isSamsung || isSamsungFromUAData) ? 'Galaxy' : 'Android';
    device = (isSamsung || isSamsungFromUAData) ? 'Galaxy' : 'Android';
  } else if (isMobile && /Chrome\/([\d.]+)/.test(ua)) {
    os = (isSamsung || isSamsungFromUAData) ? 'Galaxy' : 'Android';
    device = (isSamsung || isSamsungFromUAData) ? 'Galaxy' : 'Android';
    osVersion = ua.match(/Android\s([\d.]+)/)?.[1] || unknown;
  } else {
    os = unknown;
    osVersion = unknown;
    device = 'Unknown';
  }
  const browserList = [
    {name: 'Samsung Internet', pattern: /SamsungBrowser\/([\d.]+)/},
    {name: 'Naver Whale', pattern: /Whale\/([\d.]+)/},
    {name: 'Microsoft Edge', pattern: /EdgA?\/([\d.]+)/},
    {name: 'Microsoft Legacy Edge', pattern: /Edge\/([\d.]+)/},
    {name: 'Yandex', pattern: /YaBrowser\/([\d.]+)/},
    {name: 'UC Browser', pattern: /UCBrowser\/([\d.]+)/},
    {name: 'Opera', pattern: /OPR\/([\d.]+)/},
    {name: 'Brave', pattern: /Brave\/([\d.]+)/},
    {name: 'Vivaldi', pattern: /Vivaldi\/([\d.]+)/},
    {name: 'Chromium', pattern: /Chromium\/([\d.]+)/},
    {name: 'Firefox', pattern: /Firefox\/([\d.]+)/},
    {name: 'Epic', pattern: /Epic\/([\d.]+)/},
    {name: 'Puffin', pattern: /Puffin\/([\d.]+)/},
    {name: 'Chrome', pattern: /Chrome\/([\d.]+)/},
    {name: 'Safari', pattern: /Version\/([\d.]+).*Safari/},
    {name: 'DuckDuckGo', pattern: /DuckDuckGo\/([\d.]+)/},
    {name: 'Lynx', pattern: /Lynx\/([\d.]+)/},
    {name: 'Internet Explorer 11', pattern: /Trident\/.*rv:([\d.]+)/},
    {name: 'Microsoft Internet Explorer', pattern: /MSIE\s([\d.]+)/}
  ];
  for (const b of browserList) {
    const match = ua.match(b.pattern);
    if (match) {
      browser = b.name;
      version = match[1];
      break;
    }
  }
  if (browser === unknown) {
    if (/Safari/.test(ua) && !/Chrome/.test(ua)) {
      browser = 'Safari';
      version = ua.match(/Version\/([\d.]+)/)?.[1] || unknown;
    }
  }
  if (browser === 'Brave' && !(navigator.brave && typeof navigator.brave.isBrave === 'function')) {
    browser = 'Chrome';
    version = ua.match(/Chrome\/([\d.]+)/)?.[1] || unknown;
  }
  window.jscd = {browser, version, os, osVersion, device};
  const weatherMap = {'ko-KR':'날씨','ja-JP':'天気','en-US':'Weather','en-GB':'Weather','en-AU':'Weather','en-ZA':'Weather','zh-CN':'天气','zh-HK':'天氣','zh-TW':'天氣','es-ES':'Tiempo','hi-IN':'मौसम','ar-EG':'الطقس','ar-SA':'الطقس','pt-BR':'Tempo','fr-FR':'Météo','de-DE':'Wetter','ru-RU':'Погода','vi-VN':'Thời tiết','it-IT':'Meteo','pl-PL':'Pogoda','nl-NL':'Weer','tr-TR':'Hava','th-TH':'สภาพอากาศ','fr-CA':'Météo','hu-HU':'Időjárás','ro-RO':'Vreme','uk-UA':'Погода','sv-SE':'Väder','hr-BA':'Vrijeme','sk-SK':'Počasie','id-ID':'Cuaca','nb-NO':'Vær','da-DK':'Vejr','fi-FI':'Sää','el-GR':'Καιρός','ca-ES':'Temps','sl-SI':'Vreme'};
  if (typeof $ !== 'undefined') {
    $(document).ready(function () {
      $.getJSON('https://ipinfo.io/json', function (data) {
        let ipParts = [];
        if (data.ip) {
          if (data.ip.includes('.')) {
            ipParts = data.ip.split('.').slice(0, 2);
          } else if (data.ip.includes(':')) {
            ipParts = data.ip.split(':').slice(0, 2).join(':');
          }
        }
        const countryCode = data.country || 'US';
        const locale = Object.keys(weatherMap).find(key => key.endsWith(countryCode)) || 'en-US';
        const weatherLabel = weatherMap[locale] || 'Weather';
        window.weatherLabel = weatherLabel;
        const greeting = {'ko-KR':'안녕하세요','ja-JP':'こんにちは','en-US':'Hello','en-GB':'Hello','en-AU':'Hello','en-ZA':'Hello','zh-CN':'你好','zh-HK':'你好','zh-TW':'你好','es-ES':'Hola','hi-IN':'नमस्ते','ar-EG':'مرحبا','ar-SA':'مرحبا','pt-BR':'Olá','fr-FR':'Bonjour','de-DE':'Hallo','ru-RU':'Здравствуйте','vi-VN':'Xin chào','it-IT':'Salve','pl-PL':'Dzień dobry','nl-NL':'Hallo','tr-TR':'Merhaba','th-TH':'สวัสดี','fr-CA':'Bonjour','hu-HU':'Szia','ro-RO':'Bună','uk-UA':'Привіт','sv-SE':'Hej','hr-BA':'Bok','sk-SK':'Dobrý deň','id-ID':'Halo','nb-NO':'Hei','da-DK':'Hej','fi-FI':'Hei','el-GR':'Γεια σας','ca-ES':'Hola','sl-SI':'Zdravo'}[locale] || 'Hello';
        const hello = `${greeting}! ${ipParts.join('.') || '-'} • ${data.region || '-'}`;
        const flag = data.country ? `<img src="https://flagcdn.com/${data.country.toLowerCase()}.svg" width="25" style="margin-right: 0.3em;margin-bottom:-2px">` : '';
        $('#hello').html(hello + ' ' + flag);
        $('#browser').text(` • ${jscd.browser} on ${jscd.os}`);
        const map = data.loc ? `<iframe src="https://maps.google.com/maps?q=${data.loc}&z=14&hl=${locale}&output=embed" style="width:100%; height:450px;" frameborder="0" loading="eager"></iframe>` : '<iframe src="https://maps.google.com/" style="width:100%; height:450px;" frameborder="0" loading="eager"></iframe>';
        $('#mapping').html(map);
      });
    });
  } else {
    fetch('https://ipinfo.io/json', {mode: 'cors'})
      .then(res => res.json())
      .then(data => {
        let ipParts = [];
        if (data.ip) {
          if (data.ip.includes('.')) {
            ipParts = data.ip.split('.').slice(0, 2);
          } else if (data.ip.includes(':')) {
            ipParts = data.ip.split(':').slice(0, 2).join(':');
          }
        }
        const countryCode = data.country || 'US';
        const locale = Object.keys(weatherMap).find(key => key.endsWith(countryCode)) || 'en-US';
        const weatherLabel = weatherMap[locale] || 'Weather';
        window.weatherLabel = weatherLabel;
        const greeting = {'ko-KR':'안녕하세요','ja-JP':'こんにちは','en-US':'Hello','en-GB':'Hello','en-AU':'Hello','en-ZA':'Hello','zh-CN':'你好','zh-HK':'你好','zh-TW':'你好','es-ES':'Hola','hi-IN':'नमस्ते','ar-EG':'مرحبا','ar-SA':'مرحبا','pt-BR':'Olá','fr-FR':'Bonjour','de-DE':'Hallo','ru-RU':'Здравствуйте','vi-VN':'Xin chào','it-IT':'Salve','pl-PL':'Dzień dobry','nl-NL':'Hallo','tr-TR':'Merhaba','th-TH':'สวัสดี','fr-CA':'Bonjour','hu-HU':'Szia','ro-RO':'Bună','uk-UA':'Привіт','sv-SE':'Hej','hr-BA':'Bok','sk-SK':'Dobrý deň','id-ID':'Halo','nb-NO':'Hei','da-DK':'Hej','fi-FI':'Hei','el-GR':'Γεια σας','ca-ES':'Hola','sl-SI':'Zdravo'}[locale] || 'Hello';
        const hello = `${greeting}! ${ipParts.join('.') || '-'} • ${data.region || ''}`;
        const flag = data.country ? `<img src="https://flagcdn.com/${data.country.toLowerCase()}.svg" width="25" style="margin-right: 0.3em;margin-bottom:-2px" />` : '';
        document.getElementById('hello').innerHTML = hello + ' ' + flag;
        document.getElementById('browser').textContent = ` • ${jscd.browser} on ${jscd.os}`;
        document.getElementById('mapping').innerHTML = '<iframe src="https://maps.google.com/" style="width:100%; height:450px;" frameborder="0" loading="eager"></iframe>';
      });
  }
})(window);