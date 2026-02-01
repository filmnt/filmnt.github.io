function openSchedule() {
  try {
    var modal = document.getElementById('schedule-dialog');
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
    if (!openDialogs.includes('schedule-dialog')) {
      openDialogs.push('schedule-dialog');
      try {
        localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
      } catch (e) {}
    }
  } catch (error) {
    console.error('Error in openSchedule:', error);
  }
}

function closeSchedule() {
  try {
    var modal = document.getElementById('schedule-dialog');
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
    openDialogs = openDialogs.filter(id => id !== 'schedule-dialog');
    try {
      localStorage.setItem('openDialogs', JSON.stringify(openDialogs));
    } catch (e) {}
  } catch (error) {
    console.error('Error in closeSchedule:', error);
  }
}

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
iframe.style.cssText = 'position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;border:none !important;margin:0 !important;padding:0 !important;display:block !important;box-sizing:border-box !important;pointer-events:auto !important;z-index:20002 !important;';
iframe.allowFullscreen = true;
const container = document.getElementById('calendar-container');
container.appendChild(iframe);

const dialog = document.getElementById('schedule-dialog');
if (dialog) {
  const RESIZE_HANDLE_WIDTH = 50;
  let resizeHandle = dialog.querySelector('div[style*="left: -50px"]') || dialog.querySelector('div[style*="cursor: col-resize"]');
  if (!resizeHandle) {
    resizeHandle = document.createElement('div');
    resizeHandle.style.cssText = `
      position:absolute !important;left:-${RESIZE_HANDLE_WIDTH}px !important;top:0 !important;
      width:${RESIZE_HANDLE_WIDTH}px !important;height:100% !important;
      background:rgba(0,0,0,0.1) !important;cursor:col-resize !important;
      z-index:20005 !important;pointer-events:auto !important;
      border-left:2px solid #ccc !important;
    `;
    dialog.appendChild(resizeHandle);
  }

  let isResizing = false;
  let startX = 0;
  let startWidth = 0;
  const iframeEl = container.querySelector('iframe');

  const disableIframe = () => { if (iframeEl) iframeEl.style.pointerEvents = 'none'; };
  const enableIframe = () => { if (iframeEl) iframeEl.style.pointerEvents = 'auto'; };

  const onMouseMove = (e) => {
    if (!isResizing) return;
    const deltaX = startX - e.clientX;
    const newWidth = startWidth + deltaX;
    const MIN_WIDTH = 412;
    const MAX_WIDTH = 850;
    if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
      dialog.style.width = `${newWidth}px`;
      localStorage.setItem('dialog-width-schedule-dialog', newWidth);
    }
  };

  const onMouseUp = () => {
    if (isResizing) {
      isResizing = false;
      enableIframe();
      document.removeEventListener('mousemove', onMouseMove);
    }
  };

  resizeHandle.addEventListener('mousedown', (e) => {
    isResizing = true;
    startX = e.clientX;
    startWidth = dialog.getBoundingClientRect().width;
    disableIframe();
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp, { once: true });
    e.preventDefault();
    e.stopPropagation();
  });

  const observer = new MutationObserver(() => {
    if (dialog.style.display !== 'none' && !dialog.querySelector('div[style*="left: -50px"]')) {
      const handle = document.createElement('div');
      handle.style.cssText = `
        position:absolute !important;left:-${RESIZE_HANDLE_WIDTH}px !important;top:0 !important;
        width:${RESIZE_HANDLE_WIDTH}px !important;height:100% !important;
        background:rgba(0,0,0,0.1) !important;cursor:col-resize !important;
        z-index:20005 !important;pointer-events:auto !important;
        border-left:2px solid #ccc !important;
      `;
      dialog.appendChild(handle);
    }
  });
  observer.observe(dialog, { attributes: true, attributeFilter: ['style'] });
}