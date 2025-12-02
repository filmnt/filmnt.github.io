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

const countryMap = {
  'KR': 'ko.south_korea', 'US': 'en.usa', 'JP': 'ja.japanese', 'CN': 'zh.cn', 'DE': 'de.german', 'FR': 'fr.french', 'GB': 'en.uk',
  'CA': 'en.canadian', 'AU': 'en.australian', 'IN': 'en.indian', 'BR': 'pt.brazilian', 'ES': 'es.spain', 'IT': 'it.italian',
  'RU': 'ru.russian', 'MX': 'es.mexican', 'NL': 'nl.dutch', 'SE': 'sv.swedish', 'PL': 'pl.polish', 'TR': 'tr.turkish',
  'ZA': 'en.south_african', 'AR': 'es.argentine', 'CL': 'es.chilean', 'CO': 'es.colombian', 'PE': 'es.peruvian',
  'ID': 'id.indonesian', 'TH': 'th.thai', 'VN': 'vi.vietnamese', 'PH': 'en.philippines', 'MY': 'en.malaysia',
  'SG': 'en.singapore', 'NZ': 'en.new_zealand', 'CH': 'de.swiss', 'AT': 'de.austrian', 'BE': 'fr.belgian',
  'DK': 'da.danish', 'FI': 'fi.finnish', 'NO': 'no.norwegian', 'IL': 'he.israeli', 'SA': 'ar.saudi',
  'AE': 'ar.emirates', 'EG': 'ar.egyptian', 'MA': 'fr.moroccan', 'NG': 'en.nigerian', 'KE': 'en.kenyan',
  'GH': 'en.ghana', 'TZ': 'en.tanzanian', 'UG': 'en.ugandan', 'PT': 'pt.portuguese', 'GR': 'el.greek',
  'HU': 'hu.hungarian', 'RO': 'ro.romanian', 'CZ': 'cs.czech', 'SK': 'sk.slovak', 'HR': 'hr.croatian',
  'SI': 'sl.slovenian', 'BG': 'bg.bulgarian', 'UA': 'uk.ukrainian', 'LT': 'lt.lithuanian', 'LV': 'lv.latvian',
  'EE': 'et.estonian', 'IS': 'is.icelandic', 'IE': 'en.ireland', 'LU': 'fr.luxembourg', 'MT': 'en.malta',
  'CY': 'el.cyprus', 'LI': 'de.liechtenstein', 'MC': 'fr.monaco', 'SM': 'it.sanmarino', 'VA': 'it.vatican',
  'AD': 'ca.andorra', 'BY': 'be.belarusian', 'KZ': 'ru.kazakh', 'UZ': 'uz.uzbek', 'TM': 'tk.turkmen',
  'TJ': 'tg.tajik', 'KG': 'ky.kyrgyz', 'AM': 'hy.armenian', 'AZ': 'az.azerbaijan', 'GE': 'ka.georgian',
  'MD': 'ro.moldova', 'AL': 'sq.albanian', 'BA': 'bs.bosnia', 'XK': 'sq.kosovo', 'ME': 'sr.montenegro',
  'RS': 'sr.serbia', 'MK': 'mk.macedonian', 'SI': 'sl.slovenian', 'FO': 'fo.faroe_islands', 'GL': 'kl.greenland',
  'TW': 'zh.taiwan', 'HK': 'zh.hong_kong', 'MO': 'zh.macau', 'MN': 'mn.mongolian', 'NP': 'ne.nepali',
  'BT': 'dz.bhutanese', 'LK': 'si.sri_lanka', 'MV': 'dv.maldivian', 'PK': 'ur.pakistani', 'AF': 'ps.afghan',
  'BD': 'bn.bangladeshi', 'MM': 'my.myanmar', 'LA': 'lo.laotian', 'KH': 'km.khmer', 'BN': 'ms.brunei',
  'TL': 'tet.east_timor', 'PG': 'en.papua_new_guinea', 'SB': 'en.solomon_islands', 'VU': 'bi.vanuatu',
  'FJ': 'en.fiji', 'WS': 'sm.samoan', 'TO': 'to.tongan', 'NU': 'niu.niue', 'TK': 'tkl.tokelau',
  'NF': 'en.norfolk_island', 'CK': 'en.cook_islands', 'NC': 'fr.new_caledonia', 'WF': 'wls.wallis_futuna',
  'PF': 'fr.french_polynesia', 'PY': 'es.paraguayan', 'UY': 'es.uruguayan', 'BO': 'es.bolivian',
  'EC': 'es.ecuadorian', 'GY': 'en.guyanese', 'SR': 'nl.surinamese', 'TT': 'en.trinidad_tobago',
  'BB': 'en.barbados', 'JM': 'en.jamaican', 'HT': 'fr.haitian', 'DO': 'es.dominican', 'CU': 'es.cuban',
  'BZ': 'en.belize', 'GT': 'es.guatemalan', 'SV': 'es.salvadoran', 'HN': 'es.honduran', 'NI': 'es.nicaraguan',
  'CR': 'es.costa_rican', 'PA': 'es.panamanian', 'VE': 'es.venezuelan', 'GY': 'en.guyanese',
  'SR': 'nl.surinamese', 'GY': 'en.guyanese', 'DM': 'en.dominica', 'GD': 'en.grenada', 'LC': 'en.saint_lucia',
  'VC': 'en.saint_vincent_grenadines', 'KN': 'en.saint_kitts_nevis', 'AG': 'en.antigua_barbuda',
  'BS': 'en.bahamas', 'HT': 'fr.haitian', 'HT': 'fr.haitian', 'PR': 'es.puerto_rican', 'VI': 'en.virgin_islands',
  'CW': 'nl.curacao', 'AW': 'pap.aruban', 'SX': 'nl.sint_maarten', 'BQ': 'pap.bonaire'
};
const locale = navigator.language || 'en-US';
const country = locale.split('-')[1] || 'US';
const holidayKey = countryMap[country] || 'en.usa';
const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const src = `https://calendar.google.com/calendar/embed?mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&ctz=${encodeURIComponent(userTimeZone)}&src=${holidayKey}%23holiday%40group.v.calendar.google.com`;
const iframe = document.createElement('iframe');
iframe.src = src;
iframe.style.cssText = 'position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;border:none !important;margin:0 !important;padding:0 !important;display:block !important;box-sizing:border-box !important;';
iframe.allowFullscreen = true;
document.getElementById('calendar-container').appendChild(iframe);