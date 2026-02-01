const preferredVoices = {'ko-KR':['유나','Yuna','Sujin','Google 한국어','Hyun-soo','Ji-min','Seo-yeon'],'ja-JP':['Kyoko','Otoya','Hattori','Ayumi','Haruka','Taro'],'en-US':['Samantha','Albert','Joanna','Zira','Matthew','Jennifer','Linda'],'en-GB':['Daniel','Oliver','Emma','George','Hazel'],'en-AU':['Karen','Lee','Catherine','Jack'],'en-ZA':['Tessa','Kyle','Siphokazi'],'zh-CN':['Ting-Ting','Tingting','Mei-Jia','Li-Mu','Yao-Yao'],'zh-HK':['Sin-Ji','Sinji','Tiffany','Wai-Ling'],'zh-TW':['Mei-Jia','Meijia','怡君','Ya-Ling'],'es-ES':['Mónica','Pablo','Laura','Javier'],'hi-IN':['Lekha','Aditi','Raveena'],'ar-EG':['Majed','سامي','Hala'],'pt-BR':['Luciana','Carlos','Fernanda'],'fr-FR':['Thomas','Céline','Amélie','Mathieu'],'de-DE':['Anna','Stefan','Klara'],'ru-RU':['Milena','Dmitry','Katya'],'vi-VN':['Linh','Thảo','Minh'],'it-IT':['Alice','Giovanni','Federica'],'pl-PL':['Zosia','Marek','Kasia'],'nl-NL':['Xander','Lotte'],'tr-TR':['Yelda','Cem'],'th-TH':['Kanya','Narong'],'fr-CA':['Amélie','Chantal','Gabrielle'],'hu-HU':['Tünde','István'],'ro-RO':['Ioana','Andrei'],'uk-UA':['Lesya','Mykola'],'sv-SE':['Alva','Erik'],'hr-BA':['Lana','Boris'],'sk-SK':['Laura','Jakub'],'id-ID':['Damayanti','Ardi'],'nb-NO':['Nora','Henrik'],'ar-SA':['Majed','Fatima'],'da-DK':['Sara','Mads'],'fi-FI':['Satu','Onni'],'el-GR':['Melina','Nikos'],'ca-ES':['Montse','Jordi'],'sl-SI':['Tina','Luka']};
const ttsKeyboardMessages = {'ko-KR':'텍스트를 입력하여 음성으로 변환하세요...','ja-JP':'音声に変換するテキストを入力してください...','en-US':'Enter text here for text-to-speech...','en-GB':'Enter text here for text-to-speech...','en-AU':'Enter text here for text-to-speech...','en-ZA':'Enter text here for text-to-speech...','zh-CN':'在此输入文本以进行语音转换...','zh-HK':'在此輸入文本以進行語音轉換...','zh-TW':'在此輸入文字以進行語音轉換...','es-ES':'Ingresa texto aquí para convertirlo en voz...','hi-IN':'टेक्स्ट-टू-स्पीच के लिए यहां टेक्स्ट दर्ज करें...','ar-EG':'أدخل النص هنا لتحويله إلى كلام...','ar-SA':'أدخل النص هنا لتحويله إلى كلام...','pt-BR':'Digite o texto aqui para conversão em fala...','fr-FR':'Entrez le texte ici pour la synthèse vocale...','fr-CA':'Entrez le texte ici pour la synthèse vocale...','de-DE':'Geben Sie hier Text für die Sprachsynthese ein...','ru-RU':'Введите текст для преобразования в речь...','vi-VN':'Nhập văn bản tại đây để chuyển thành giọng nói...','it-IT':'Inserisci il testo qui per la sintesi vocale...','pl-PL':'Wpisz tekst tutaj, aby przekształcić w mowę...','nl-NL':'Voer hier tekst in voor tekst-naar-spraak...','tr-TR':'Metni buraya girerek sesli okumaya çevirin...','th-TH':'ป้อนข้อความที่นี่เพื่อแปลงเป็นเสียง...','hu-HU':'Írja be a szöveget a szövegfelolvasáshoz...','ro-RO':'Introduceți textul aici pentru conversia în vorbire...','uk-UA':'Введіть текст тут для перетворення в мову...','sv-SE':'Ange text här för text-till-tal...','hr-BA':'Unesite tekst ovdje za pretvaranje u govor...','sk-SK':'Zadajte text sem pre prevod do reči...','id-ID':'Masukkan teks di sini untuk konversi ke suara...','nb-NO':'Skriv inn tekst her for tekst-til-tale...','da-DK':'Indtast tekst her for tekst-til-tale...','fi-FI':'Syötä teksti tähän puheeksi muuntamista varten...','el-GR':'Εισαγάγετε κείμενο εδώ για μετατροπή σε ομιλία...','ca-ES':'Introduïu text aquí per a la conversió en veu...','sl-SI':'Vnesite besedilo tukaj za pretvorbo v govor...'};
const alertMessages = {'ko-KR':'읽고 싶은 단어나 문장을 선택하세요.','ja-JP':'読み上げたい単語や文を選んでください。','en-US':'Please select a word or sentence to read.','en-GB':'Please select a word or sentence to read.','en-AU':'Please select a word or sentence to read.','en-ZA':'Please select a word or sentence to read.','zh-CN':'请选择要朗读的单词或句子。','zh-HK':'請選擇要朗讀的單詞或句子。','zh-TW':'請選擇要朗讀的單詞或句子。','es-ES':'Por favor, selecciona una palabra o frase para leer.','hi-IN':'कृपया पढ़ने के लिए एक शब्द या वाक्य चुनें।','ar-EG':'يرجى اختيار كلمة أو جملة للقراءة.','ar-SA':'يرجى اختيار كلمة أو جملة للقراءة.','pt-BR':'Por favor, selecione uma palavra ou frase para ler.','fr-FR':'Veuillez sélectionner un mot ou une phrase à lire.','fr-CA':'Veuillez sélectionner un mot ou une phrase à lire.','de-DE':'Bitte wählen Sie ein Wort oder einen Satz zum Lesen aus.','ru-RU':'Пожалуйста, выберите слово или предложение для чтения.','vi-VN':'Vui lòng chọn một từ hoặc câu để đọc.','it-IT':'Seleziona una parola o una frase da leggere.','pl-PL':'Proszę wybrać słowo lub zdanie do przeczytania.','nl-NL':'Selecteer een woord of zin om te lezen.','tr-TR':'Lütfen okumak için bir kelime veya cümle seçin.','th-TH':'กรุณาเลือกคำหรือประโยคที่ต้องการอ่าน','hu-HU':'Kérjük, válasszon ki egy szót vagy mondatot az olvasáshoz.','ro-RO':'Vă rugăm să selectați un cuvânt sau o propoziție pentru a citi.','uk-UA':'Будь ласка, виберіть слово або речення для читання.','sv-SE':'Välj ett ord eller en mening att läsa.','hr-BA':'Molimo odaberite riječ ili rečenicu za čitanje.','sk-SK':'Vyberte slovo alebo vetu na čítanie.','id-ID':'Silakan pilih kata atau kalimat untuk dibaca.','nb-NO':'Velg et ord eller en setning å lese.','da-DK':'Vælg et ord eller en sætning at læse.','fi-FI':'Valitse sana tai lause luettavaksi.','el-GR':'Επιλέξτε μια λέξη ή πρόταση για ανάγνωση.','ca-ES':'Seleccioneu una paraula o frase per llegir.','sl-SI':'Izberite besedo ali stavek za branje.'};
const koreanLabelTranslations = {'ko-KR':'한국어','ja-JP':'韓国語','en-US':'Korean','en-GB':'Korean','en-AU':'Korean','en-ZA':'Korean','zh-CN':'韩语','zh-HK':'韓語','zh-TW':'韓語','es-ES':'coreano','hi-IN':'कोरियाई','ar-EG':'الكورية','pt-BR':'coreano','fr-FR':'coréen','de-DE':'Koreanisch','ru-RU':'корейский','vi-VN':'Tiếng Hàn','it-IT':'coreano','pl-PL':'koreański','nl-NL':'Koreaans','tr-TR':'Korece','th-TH':'ภาษาเกาหลี','fr-CA':'coréen','hu-HU':'koreai','ro-RO':'coreeană','uk-UA':'корейська','sv-SE':'koreanska','hr-BA':'korejski','sk-SK':'kórejčina','id-ID':'Bahasa Korea','nb-NO':'koreansk','ar-SA':'الكورية','da-DK':'koreansk','fi-FI':'korea','el-GR':'κορεατικά','ca-ES':'coreà','sl-SI':'korejščina'};

(function() {
  const clientLang = navigator.language || 'en-US';
  const langKey = koreanLabelTranslations[clientLang] ? clientLang : (clientLang.split('-')[0] + '-' + clientLang.split('-')[1] || 'en-US');
  const label = koreanLabelTranslations[langKey] || 'Korean';
  const ttsSelect = document.getElementById('tts-lang');
  if (ttsSelect && ttsSelect.options.length > 0) {
    ttsSelect.options[0].textContent = label;
  }
})();

function setSpeech() {
  return new Promise((resolve, reject) => {
    const synth = window.speechSynthesis;
    const timeout = setTimeout(() => {
      alert('Failed to load voices. Please try again.');
      reject('Voice loading timed out.');
      clearInterval(id);
    }, 5000);
    const id = setInterval(() => {
      const voices = synth.getVoices();
      if (voices.length !== 0) {
        clearTimeout(timeout);
        clearInterval(id);
        resolve(voices);
      }
    }, 10);
  });
}

function keyonoff() {
  $('#tts-keyboard').toggle();
}

function updatePlaceholder(lang) {
  const placeholderText = ttsKeyboardMessages[lang] || ttsKeyboardMessages['en-US'];
  $('#tts-input').attr('placeholder', placeholderText);
}

$(document).ready(function () {
  const clientLang = navigator.language || navigator.userLanguage || 'en-US';
  updatePlaceholder(clientLang);
});

function findPreferredVoice(lang, voices) {
  const langCode = lang.split('-')[0];
  if (lang.startsWith('en')) {
    if (preferredVoices[lang]) {
      for (const name of preferredVoices[lang]) {
        const voice = voices.find(v => v.lang === lang && (v.name === name || v.name.includes(name)));
        if (voice) return voice;
      }
    }
    const voice = voices.find(v => v.lang === lang) || voices.find(v => v.lang.startsWith('en'));
    if (voice) return voice;
    return null;
  }
  if (preferredVoices[lang]) {
    for (const name of preferredVoices[lang]) {
      const voice = voices.find(v => v.lang === lang && (v.name === name || v.name.includes(name)));
      if (voice) return voice;
    }
  }
  const exactMatch = voices.find(v => v.lang === lang);
  if (exactMatch) return exactMatch;
  if (lang === 'ja-JP') {
    const jpVoice = voices.find(v => v.lang === 'ja-JP' && v.name === 'Kyoko') || 
                   voices.find(v => v.lang === 'ja-JP');
    if (jpVoice) return jpVoice;
  }
  const fallback = voices.find(v => v.lang.startsWith(langCode));
  if (fallback) return fallback;
  return null;
}

function isMacFirefox() {
  const ua = navigator.userAgent.toLowerCase();
  return ua.includes('macintosh') && ua.includes('firefox');
}

const btns = document.querySelectorAll('#TTS-btn');
let isSpeaking = false;

btns.forEach((el) => {
  el.addEventListener('click', () => {
    const txt = $("#tts-input").val() || window.getSelection().toString();
    const selectedLang = $("#tts-lang").find(':selected').attr('data-lang');
    const clientLang = navigator.language || navigator.userLanguage || 'en-US';
    const lang = selectedLang;
    if (!txt) {
      const alertMsg = alertMessages[clientLang] || alertMessages['en-US'];
      alert(alertMsg);
      return;
    }
    if (window.speechSynthesis.speaking && isSpeaking) {
      window.speechSynthesis.cancel();
      isSpeaking = false;
      return;
    }
    setSpeech().then((voices) => {
      const selectedVoice = findPreferredVoice(lang, voices);
      if (!selectedVoice) {
        const alertMsg = alertMessages[clientLang] || alertMessages['en-US'];
        alert(alertMsg);
        return;
      }
      const utterance = new SpeechSynthesisUtterance(txt);
      utterance.voice = selectedVoice;
      utterance.lang = lang;
      utterance.volume = (isMacFirefox() && selectedVoice.name === 'Kyoko') ? 1.0 : 0.8;
      utterance.rate = 0.8;
      utterance.pitch = 1.0;
      $("#tts-input").val("");
      isSpeaking = true;
      utterance.onend = () => { isSpeaking = false; };
      speechSynthesis.speak(utterance);
    });
  });
});

const textarea = document.getElementById('tts-input');
const maxRows = 5;

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';
  const lineHeight = 20;
  const lines = textarea.scrollHeight / lineHeight;
  if (lines <= maxRows) {
    textarea.style.height = textarea.scrollHeight + 'px';
    textarea.style.overflowY = 'hidden';
  } else {
    textarea.style.height = lineHeight * maxRows + 'px';
    textarea.style.overflowY = 'auto';
  }
});