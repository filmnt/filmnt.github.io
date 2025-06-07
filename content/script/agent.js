(function(window) {
  const unknown = '-';
  let browser = unknown, version = unknown, os = unknown, osVersion = unknown, device = unknown;
  const ua = navigator.userAgent || '';
  const platform = navigator.platform || '';
  const isSamsung = /SM-[A-Z][0-9]{3}[A-Z0-9]*|SC-[A-Z0-9]+|SGH-[A-Z0-9]+|GT-[A-Z0-9]+|SCH-[A-Z0-9]+|SamsungBrowser|[A-Z](?=\))/i.test(ua);
  const isMobile = /Mobile|Tablet/.test(ua) || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || window.innerWidth < 1200 || typeof window.orientation !== 'undefined';
  let isSamsungFromUAData = false;
  if (navigator.userAgentData && navigator.userAgentData.brands) {
    isSamsungFromUAData = navigator.userAgentData.brands.some(brand => /Samsung/i.test(brand.brand));
  }
  if (/Android/.test(ua) || (isMobile && (/Firefox\/([\d.]+)/.test(ua) || /EdgA?\/([\d.]+)/.test(ua)))) {
    osVersion = ua.match(/Android\s([\d.]+)/)?.[1] || unknown;
    if (isSamsung || isSamsungFromUAData) {
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
  } else if (/Windows NT/.test(ua)) {
    os = 'Windows';
    device = 'Windows';
    osVersion = ua.match(/Windows NT ([\d.]+)/)?.[1] || unknown;
  } else if (/CrOS/.test(ua)) {
    os = 'Chrome OS';
    device = 'Chromebook';
  } else if (/Tizen/.test(ua) || /SMART-TV/.test(ua)) {
    os = 'Tizen';
    device = 'Samsung Smart TV';
  } else if (/Web0S/.test(ua) || /webOS/i.test(ua)) {
    os = 'WebOS';
    device = 'LG Smart TV';
  } else if (/Linux/.test(ua) && !/Android/.test(ua) && !isMobile) {
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
const languageMap = {'US': 'en', 'GB': 'en', 'AU': 'en', 'KR': 'ko', 'JP': 'ja', 'CN': 'zh', 'TW': 'zh', 'FR': 'fr', 'DE': 'de', 'IT': 'it', 'ES': 'es', 'RU': 'ru', 'BR': 'pt', 'MX': 'es', 'IN': 'hi', 'TH': 'th', 'VN': 'vi', 'SE': 'sv', 'FI': 'fi', 'NO': 'no', 'DK': 'da', 'PL': 'pl', 'GR': 'el', 'TR': 'tr', 'PT': 'pt', 'HU': 'hu', 'RO': 'ro', 'BG': 'bg', 'HR': 'hr', 'SK': 'sk', 'SI': 'sl', 'RS': 'sr', 'HR': 'hr', 'LT': 'lt', 'LV': 'lv', 'EE': 'et', 'IS': 'is', 'UA': 'uk', 'BY': 'be', 'AM': 'hy', 'GE': 'ka', 'AZ': 'az', 'KG': 'ky', 'UZ': 'uz', 'MN': 'mn', 'PK': 'ur', 'AF': 'fa', 'JO': 'ar', 'KW': 'ar', 'LB': 'ar', 'SY': 'ar', 'IQ': 'ar', 'AE': 'ar', 'SA': 'ar', 'OM': 'ar', 'YE': 'ar', 'EG': 'ar', 'MA': 'ar', 'TN': 'ar', 'DZ': 'ar', 'LY': 'ar', 'SD': 'ar', 'PS': 'ar', 'KW': 'ar', 'BA': 'bs', 'SR': 'sr', 'MD': 'ro', 'EE': 'et', 'ID': 'id', 'MY': 'ms', 'SG': 'en', 'PH': 'en', 'TH': 'th', 'KH': 'km', 'LA': 'lo', 'MM': 'my', 'NP': 'ne', 'BD': 'bn', 'LK': 'si', 'BT': 'dz', 'KH': 'km', 'MN': 'mn', 'MV': 'dv', 'KP': 'ko', 'KZ': 'kk', 'TJ': 'tg', 'KG': 'ky', 'TM': 'tk', 'UZ': 'uz'};
const greetingMap = {'en': 'Hello', 'ko': '안녕하세요', 'ja': 'こんにちは', 'zh': '你好', 'fr': 'Bonjour', 'de': 'Hallo', 'es': 'Hola', 'it': 'Ciao', 'ru': 'Здравствуйте', 'pt': 'Olá', 'hi': 'नमस्ते', 'th': 'สวัสดี', 'vi': 'Xin chào', 'sv': 'Hej', 'fi': 'Hei', 'no': 'Hei', 'da': 'Hej', 'pl': 'Cześć', 'el': 'Γεια σας', 'tr': 'Merhaba', 'hu': 'Helló', 'ro': 'Bună', 'bg': 'Здравей', 'hr': 'Bok', 'sk': 'Ahoj', 'sl': 'Zdravo', 'sr': 'Здраво', 'lt': 'Labas', 'lv': 'Sveiki', 'et': 'Tere', 'is': 'Halló', 'uk': 'Привіт', 'be': 'Прывітанне', 'hy': 'Բարեւ', 'ka': 'გამარჯობა', 'az': 'Salam', 'ky': 'Салам', 'uz': 'Salom', 'mn': 'Сайн байна уу', 'ur': 'ہیلو', 'fa': 'سلام', 'ar': 'مرحبا', 'bs': 'Zdravo', 'id': 'Halo', 'ms': 'Hello', 'km': 'ជំរាបសួរ', 'lo': 'ສະບາຍດີ', 'my': 'မင်္ဂလာပါ', 'ne': 'नमस्ते', 'bn': 'হ্যালো', 'si': 'හලෝ', 'dz': 'བཀྲ་ཤིས་བདེ་ལེགས', 'dv': 'ހެލޯ', 'kk': 'Сәлем', 'tg': 'Салом', 'tk': 'Salam'};
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
        const languageCode = languageMap[countryCode] || 'en';
        const greeting = greetingMap[languageCode] || 'Hello';
        const hello = `${greeting}! ${ipParts.join('.') || '-'} • ${data.region || '-'}`;
        const flag = data.country ? `<img src="https://flagcdn.com/${data.country.toLowerCase()}.svg" width="25" style="margin-right: 0.3em;margin-bottom:-2px">` : '';
        $('#hello').html(hello + ' ' + flag);
        $('#browser').text(` • ${jscd.browser} on ${jscd.os}`);
        const map = data.loc ? `<iframe src="https://maps.google.com/maps?q=${data.loc}&z=14&hl=${languageCode}&output=embed" style="width:100%; height:450px;" frameborder="0"></iframe>` : '';
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
        const languageCode = languageMap[countryCode] || 'en';
        const greeting = greetingMap[languageCode] || 'Hello';
        const hello = `${greeting}! ${ipParts.join('.') || '-'} • ${data.region || ''}`;
        const flag = data.country ? `<img src="https://flagcdn.com/${data.country.toLowerCase()}.svg" width="25" style="margin-right: 0.3em;margin-bottom:-2px"">` : '';
        const map = data.loc ? `<iframe src="https://maps.google.com/maps?q=${data.loc}&z=14&hl=${languageCode}&output=embed" style="width:100%; height:450px;" frameborder="0"></iframe>` : '';
        document.getElementById('hello').innerHTML = hello + ' ' + flag;
        document.getElementById('browser').textContent = ` • ${jscd.browser} on ${jscd.os}`;
        document.getElementById('mapping').innerHTML = map;
      });
  }
})(window);