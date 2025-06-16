const translations = {
    en: {
        lastNoteReset: "This is the last note. Would you like to reset all notes?",
        resetConfirm: "Would you like to reset all notes?",
        loadError: "Note load error: Invalid file format."
    },
    ko: {
        lastNoteReset: "마지막 노트입니다. 모든 노트를 초기화하시겠습니까?",
        resetConfirm: "모든 노트를 초기화하시겠습니까?",
        loadError: "노트 불러오기 오류: 잘못된 파일 형식입니다."
    },
    ja: {
        lastNoteReset: "これが最後のノートです。すべてのノートをリセットしますか？",
        resetConfirm: "すべてのノートをリセットしますか？",
        loadError: "ノート読み込みエラー：無効なファイル形式です。"
    },
    de: {
        lastNoteReset: "Dies ist die letzte Notiz. Möchten Sie alle Notizen zurücksetzen?",
        resetConfirm: "Möchten Sie alle Notizen zurücksetzen?",
        loadError: "Fehler beim Laden der Notiz: Ungültiges Dateiformat."
    },
    es: {
        lastNoteReset: "Esta es la última nota. ¿Desea restablecer todas las notas?",
        resetConfirm: "¿Desea restablecer todas las notas?",
        loadError: "Error al cargar la nota: Formato de archivo inválido."
    },
    zh: {
        lastNoteReset: "这是最后一个便笺。是否要重置所有便笺？",
        resetConfirm: "是否要重置所有便笺？",
        loadError: "便笺加载错误：文件格式无效。"
    },
    fr: {
        lastNoteReset: "Ceci est la dernière note. Voulez-vous réinitialiser toutes les notes ?",
        resetConfirm: "Voulez-vous réinitialiser toutes les notes ?",
        loadError: "Erreur de chargement des notes : Format de fichier invalide."
    },
    ru: {
        lastNoteReset: "Это последняя заметка. Хотите сбросить все заметки?",
        resetConfirm: "Хотите сбросить все заметки?",
        loadError: "Ошибка загрузки заметок: Неверный формат файла."
    },
    pt: {
        lastNoteReset: "Esta é a última nota. Deseja redefinir todas as notas?",
        resetConfirm: "Deseja redefinir todas as notas?",
        loadError: "Erro ao carregar nota: Formato de arquivo inválido."
    },
    ar: {
        lastNoteReset: "هذه هي الملاحظة الأخيرة. هل ترغب في إعادة تعيين جميع الملاحظات؟",
        resetConfirm: "هل ترغب في إعادة تعيين جميع الملاحظات؟",
        loadError: "خطأ في تحميل الملاحظة: تنسيق الملف غير صالح."
    },
    bn: {
        lastNoteReset: "এটি শেষ নোট। আপনি কি সব নোট রিসেট করতে চান?",
        resetConfirm: "আপনি কি সব নোট রিসেট করতে চান?",
        loadError: "নোট লোড ত্রুটি: ফাইল ফরম্যাট অবৈধ।"
    },
    pa: {
        lastNoteReset: "ਇਹ ਆਖਰੀ ਨੋਟ ਹੈ। ਕੀ ਤੁਸੀਂ ਸਾਰੇ ਨੋਟਸ ਰੀਸੈਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
        resetConfirm: "ਕੀ ਤੁਸੀਂ ਸਾਰੇ ਨੋਟਸ ਰੀਸੈਟ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
        loadError: "ਨੋਟ ਲੋਡ ਗਲਤੀ: ਫਾਈਲ ਫਾਰਮੈਟ ਅਵੈਧ ਹੈ।"
    },
    hi: {
        lastNoteReset: "यह अंतिम नोट है। क्या आप सभी नोट्स रीसेट करना चाहते हैं?",
        resetConfirm: "क्या आप सभी नोट्स रीसेट करना चाहते हैं?",
        loadError: "नोट लोड त्रुटि: अमान्य फ़ाइल प्रारूप।"
    },
    ms: {
        lastNoteReset: "Ini adalah nota terakhir. Adakah anda ingin menetapkan semula semua nota?",
        resetConfirm: "Adakah anda ingin menetapkan semula semua nota?",
        loadError: "Ralat muat nota: Format fail tidak sah."
    },
    it: {
        lastNoteReset: "Questa è l'ultima nota. Vuoi ripristinare tutte le note?",
        resetConfirm: "Vuoi ripristinare tutte le note?",
        loadError: "Errore di caricamento nota: Formato file non valido."
    },
    tr: {
        lastNoteReset: "Bu son not. Tüm notları sıfırlamak ister misiniz?",
        resetConfirm: "Tüm notları sıfırlamak ister misiniz?",
        loadError: "Not yükleme hatası: Geçersiz dosya formatı."
    },
    ta: {
        lastNoteReset: "இது கடைசி குறிப்பு. அனைத்து குறிப்புகளையும் மீட்டமைக்க விரும்புகிறீர்களா?",
        resetConfirm: "அனைத்து குறிப்புகளையும் மீட்டமைக்க விரும்புகிறீர்களா?",
        loadError: "குறிப்பு ஏற்றல் பிழை: தவறான கோப்பு வடிவம்."
    },
    te: {
        lastNoteReset: "ఇది చివరి నోట్. మీరు అన్ని నోట్స్‌ని రీసెట్ చేయాలనుకుంటున్నారా?",
        resetConfirm: "మీరు అన్ని నోట్స్‌ని రీసెట్ చేయాలనుకుంటున్నారా?",
        loadError: "నోట్ లోడ్ లోపం: చెల్లని ఫైల్ ఫార్మాట్."
    },
    mr: {
        lastNoteReset: "ही शेवटची नोट आहे. तुम्ही सर्व नोट्स रीसेट करू इच्छिता का?",
        resetConfirm: "तुम्ही सर्व नोट्स रीसेट करू इच्छिता का?",
        loadError: "नोट लोडिंग त्रुटी: अवैध फाइल स्वरूप."
    },
    ur: {
        lastNoteReset: "یہ آخری نوٹ ہے۔ کیا آپ تمام نوٹس کو ری سیٹ کرنا چاہتے ہیں؟",
        resetConfirm: "کیا آپ تمام نوٹس کو ری سیٹ کرنا چاہتے ہیں؟",
        loadError: "نوٹ لوڈنگ میں خرابی: ناجائز فائل فارمیٹ۔"
    },
    gu: {
        lastNoteReset: "આ છેલ્લી નોટ છે. શું તમે બધી નોট્સ રીસેટ કરવા માંગો છો?",
        resetConfirm: "શું તમે બધી નોট્સ રીસેટ કરવા માંગો છો?",
        loadError: "નોટ લોડિંગ ભૂલ: અમાન્ય ફાઇલ ફોર્મેટ."
    }
};

function getLanguage() {
    const lang = navigator.language.split('-')[0];
    return translations[lang] ? lang : 'en';
}

function applyTranslations() {
    const lang = getLanguage();
    const t = translations[lang];

    document.getElementById('page-title').textContent = t.pageTitle;
    document.querySelectorAll('[data-tooltip-key]').forEach(button => {
        const key = button.getAttribute('data-tooltip-key');
        button.setAttribute('data-tooltip', t[key]);
        const tooltip = button.querySelector('.tooltip');
        if (tooltip) {
            tooltip.textContent = t[key];
        }
    });
}

let noteId = 0;
let deletedNotes = [];
let maxZIndex = 1;

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function saveDarkModeState() {
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode);
}

function loadDarkModeState() {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
    } else {
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
    }
}

function createStickyNote(savedNote = null) {
    const container = document.getElementById("sticky-container");
    const note = document.createElement("div");
    note.className = "sticky-note";
    let currentNoteId;

    if (savedNote && savedNote.id) {
        currentNoteId = savedNote.id.split('_')[1];
        note.id = savedNote.id;
        noteId = Math.max(noteId, parseInt(currentNoteId) + 1);
    } else {
        currentNoteId = noteId.toString();
        note.id = "note_" + currentNoteId;
        noteId++;
    }

    function positionNoteInCenter() {
        const noteWidth = 300;
        const noteHeight = 300;
        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;

        const leftPercent = ((containerWidth - noteWidth) / 2 / containerWidth) * 100;
        const topPercent = ((containerHeight - noteHeight) / 2 / containerHeight) * 100;

        note.style.left = `${leftPercent}%`;
        note.style.top = `${topPercent}%`;
        note.dataset.leftPercent = leftPercent;
        note.dataset.topPercent = topPercent;
    }

    if (savedNote) {
        note.style.left = `${savedNote.leftPercent}%`;
        note.style.top = `${savedNote.topPercent}%`;
        note.dataset.leftPercent = savedNote.leftPercent;
        note.dataset.topPercent = savedNote.topPercent;
        note.style.width = savedNote.width || "300px";
        note.style.height = savedNote.height || "300px";
        note.style.zIndex = savedNote.zIndex || maxZIndex;
        note.dataset.fontSize = savedNote.fontSize || "15px";
        note.dataset.fontColor = savedNote.fontColor || "#000000";
    } else {
        positionNoteInCenter();
        note.dataset.fontSize = "15px";
        note.dataset.fontColor = "#000000";
        note.style.zIndex = maxZIndex;
        note.style.width = "300px";
    }

    note.innerHTML = `
        <div class="sticky-header">
            <div class="sticky-left-group">
                <button class="sticky-add-note">+</button>
                <div class="sticky-toolbar">
                    <select class="sticky-font-size">
                        <option value="15px" selected>15</option>
                        <option value="18px">18</option>
                        <option value="24px">24</option>
                        <option value="30px">30</option>
                        <option value="36px">36</option>
                        <option value="42px">42</option>
                        <option value="48px">48</option>
                        <option value="54px">54</option>
                        <option value="60px">60</option>
                        <option value="66px">66</option>
                        <option value="72px">72</option>
                        <option value="78px">78</option>
                        <option value="84px">84</option>
                        <option value="90px">90</option>
                        <option value="96px">96</option>
                    </select>
                    <input type="color" class="sticky-font-color" value="${savedNote ? savedNote.fontColor || '#000000' : '#000000'}">
                    <button class="sticky-bold">B</button>
                    <button class="sticky-italic">I</button>
                    <button class="sticky-underline">U</button>
                    <button class="sticky-strikethrough">S</button>
                </div>
            </div>
            <button class="sticky-delete" data-id="${note.id}">✖</button>
        </div>
        <div class="sticky-content" contenteditable="true">${savedNote ? savedNote.content || "" : ""}</div>
    `;

    container.appendChild(note);

    const header = note.querySelector(".sticky-header");
    header.addEventListener("mousedown", startDrag);
    header.addEventListener("touchstart", startDrag, { passive: false });

    const content = note.querySelector(".sticky-content");
    const fontSizeSelect = note.querySelector(".sticky-font-size");
    const fontColorInput = note.querySelector(".sticky-font-color");

    if (savedNote) {
        fontSizeSelect.value = savedNote.fontSize || "15px";
        fontColorInput.value = savedNote.fontColor || "#000000";
        content.style.fontSize = savedNote.fontSize || "15px";
        if (savedNote.fontColor) content.style.color = savedNote.fontColor;
    } else {
        content.style.fontSize = note.dataset.fontSize;
    }

    content.addEventListener("input", (e) => {
        if (e.isComposing || e.inputType === "insertCompositionText") {
            return;
        }
        debounce(saveNotesToLocalStorage, 500)();
    });

    content.addEventListener("compositionend", () => {
        debounce(saveNotesToLocalStorage, 500)();
    });

    content.addEventListener("focus", () => bringToFront(note));

    content.addEventListener("paste", (e) => {
        e.preventDefault();
        const clipboardData = e.clipboardData;
        const textData = clipboardData.getData("text/plain");
        const selection = window.getSelection();
        if (selection.rangeCount) {
            const range = selection.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(textData));
            range.collapse(false);
            selection.removeAllRanges();
            selection.addRange(range);
        }
        debounce(saveNotesToLocalStorage, 500)();
    });

    content.addEventListener("keydown", (e) => {
        if (e.isComposing || e.keyCode === 229) {
            return;
        }
        if (document.activeElement !== content) {
            return;
        }
        e.stopPropagation();
        if (e.key === "Tab") {
            e.preventDefault();
            const selection = window.getSelection();
            if (selection.rangeCount) {
                const range = selection.getRangeAt(0);
                const textNode = document.createTextNode("  ");
                range.insertNode(textNode);
                range.setStartAfter(textNode);
                range.setEndAfter(textNode);
                selection.removeAllRanges();
                selection.addRange(range);
            }
            debounce(saveNotesToLocalStorage, 500)();
            return;
        }
        if (e.ctrlKey || e.metaKey) {
            const selection = window.getSelection();
            if (selection.rangeCount) {
                if (e.key === "z" || e.key === "Z") {
                    e.preventDefault();
                    document.execCommand("undo", false, null);
                    debounce(saveNotesToLocalStorage, 500)();
                    return;
                }
                if (e.key === "b" || e.key === "B") {
                    e.preventDefault();
                    document.execCommand("bold", false, null);
                    debounce(saveNotesToLocalStorage, 500)();
                    return;
                }
                if (e.key === "i" || e.key === "I") {
                    e.preventDefault();
                    document.execCommand("italic", false, null);
                    debounce(saveNotesToLocalStorage, 500)();
                    return;
                }
                if (e.key === "u" || e.key === "U") {
                    e.preventDefault();
                    document.execCommand("underline", false, null);
                    debounce(saveNotesToLocalStorage, 500)();
                    return;
                }
            }
            return;
        }
    });

    const leftResizeHandle = document.createElement("div");
    leftResizeHandle.className = "sticky-resize-handle sticky-left";
    note.appendChild(leftResizeHandle);
    leftResizeHandle.addEventListener("mousedown", startResize);
    leftResizeHandle.addEventListener("touchstart", startResize, { passive: false });

    const rightResizeHandle = document.createElement("div");
    rightResizeHandle.className = "sticky-resize-handle sticky-right";
    note.appendChild(rightResizeHandle);
    rightResizeHandle.addEventListener("mousedown", startResize);
    rightResizeHandle.addEventListener("touchstart", startResize, { passive: false });

    const bottomResizeHandle = document.createElement("div");
    bottomResizeHandle.className = "sticky-resize-handle sticky-bottom";
    note.appendChild(bottomResizeHandle);
    bottomResizeHandle.addEventListener("mousedown", startResize);
    bottomResizeHandle.addEventListener("touchstart", startResize, { passive: false });

    const bottomLeftResizeHandle = document.createElement("div");
    bottomLeftResizeHandle.className = "sticky-resize-handle sticky-bottom-left";
    note.appendChild(bottomLeftResizeHandle);
    bottomLeftResizeHandle.addEventListener("mousedown", startResize);
    bottomLeftResizeHandle.addEventListener("touchstart", startResize, { passive: false });

    const bottomRightResizeHandle = document.createElement("div");
    bottomRightResizeHandle.className = "sticky-resize-handle sticky-bottom-right";
    note.appendChild(bottomRightResizeHandle);
    bottomRightResizeHandle.addEventListener("mousedown", startResize);
    bottomRightResizeHandle.addEventListener("touchstart", startResize, { passive: false });

    fontSizeSelect.addEventListener("change", (e) => {
        note.dataset.fontSize = e.target.value;
        content.style.fontSize = note.dataset.fontSize;
        const spans = content.querySelectorAll("span[style*='font-size']");
        spans.forEach(span => {
            span.style.fontSize = '';
            if (!span.getAttribute('style')) span.removeAttribute('style');
        });
        content.focus();
        saveNotesToLocalStorage();
    });

    fontColorInput.addEventListener("input", (e) => {
        content.style.color = e.target.value;
        note.dataset.fontColor = e.target.value;
        const spans = content.querySelectorAll("span[style*='color']");
        spans.forEach(span => {
            span.style.color = '';
            if (!span.getAttribute('style')) span.removeAttribute('style');
        });
        content.focus();
        saveNotesToLocalStorage();
    });

    const applyStyleToSelection = (button, command) => {
        button.addEventListener("click", () => {
            const selection = window.getSelection();
            if (selection.rangeCount && !selection.isCollapsed) {
                document.execCommand(command, false, null);
            }
            content.focus();
            saveNotesToLocalStorage();
        });
    };

    applyStyleToSelection(note.querySelector(".sticky-bold"), "bold");
    applyStyleToSelection(note.querySelector(".sticky-italic"), "italic");
    applyStyleToSelection(note.querySelector(".sticky-underline"), "underline");
    applyStyleToSelection(note.querySelector(".sticky-strikethrough"), "strikeThrough");

    note.querySelector(".sticky-add-note").addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        content.blur();
        createStickyNote();
    });

    note.querySelector(".sticky-delete").addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        content.blur();
        const noteIdToDelete = event.currentTarget.getAttribute("data-id");
        deleteStickyNote(noteIdToDelete);
    });

    saveNotesToLocalStorage();
}

let isDragging = false;
let isResizing = false;
let currentNote = null;
let initialWidth = 0;
let initialHeight = 0;
let initialX = 0;
let initialY = 0;
let initialLeft = 0;

function startResize(event) {
    event.preventDefault();
    isResizing = true;
    currentNote = event.target.closest(".sticky-note");
    bringToFront(currentNote);

    initialWidth = parseFloat(currentNote.style.width) || currentNote.offsetWidth;
    initialHeight = parseFloat(currentNote.style.height) || currentNote.offsetHeight;
    initialLeft = parseFloat(currentNote.style.left) || (currentNote.offsetLeft / window.innerWidth * 100);

    if (event.type === "touchstart") {
        const touch = event.touches[0];
        initialX = touch.clientX;
        initialY = touch.clientY;
    } else {
        initialX = event.clientX;
        initialY = event.clientY;
    }

    if (event.target.classList.contains("sticky-bottom-left")) {
        currentNote.dataset.resizeSide = "sticky-bottom-left";
    } else if (event.target.classList.contains("sticky-bottom-right")) {
        currentNote.dataset.resizeSide = "sticky-bottom-right";
    } else if (event.target.classList.contains("sticky-left")) {
        currentNote.dataset.resizeSide = "sticky-left";
    } else if (event.target.classList.contains("sticky-right")) {
        currentNote.dataset.resizeSide = "sticky-right";
    } else if (event.target.classList.contains("sticky-bottom")) {
        currentNote.dataset.resizeSide = "sticky-bottom";
    }

    document.addEventListener("mousemove", resizeNote);
    document.addEventListener("mouseup", stopResize);
    document.addEventListener("touchmove", resizeNote, { passive: false });
    document.addEventListener("touchend", stopResize);
}

function resizeNote(event) {
    if (!isResizing || !currentNote) return;

    event.preventDefault();

    let deltaX, deltaY;
    if (event.type === "touchmove") {
        const touch = event.touches[0];
        deltaX = touch.clientX - initialX;
        deltaY = touch.clientY - initialY;
    } else {
        deltaX = event.clientX - initialX;
        deltaY = event.clientY - initialY;
    }

    let newWidth, newHeight, newLeftPercent;
    const resizeSide = currentNote.dataset.resizeSide;

    if (resizeSide === "sticky-bottom-left") {
        newWidth = Math.max(Math.min(initialWidth - deltaX, window.innerWidth * 0.9), 300);
        newHeight = Math.max(Math.min(initialHeight + deltaY, window.innerHeight * 0.9), 80);
        const newLeft = initialLeft + (initialWidth - newWidth) / window.innerWidth * 100;
        newLeftPercent = Math.max(0, Math.min(newLeft, 100 - (newWidth / window.innerWidth * 100)));
        currentNote.style.left = `${newLeftPercent}%`;
        currentNote.style.width = `${newWidth}px`;
        currentNote.style.height = `${newHeight}px`;
        currentNote.dataset.leftPercent = newLeftPercent;
    } else if (resizeSide === "sticky-bottom-right") {
        newWidth = Math.max(Math.min(initialWidth + deltaX, window.innerWidth * 0.9), 300);
        newHeight = Math.max(Math.min(initialHeight + deltaY, window.innerHeight * 0.9), 80);
        currentNote.style.width = `${newWidth}px`;
        currentNote.style.height = `${newHeight}px`;
    } else if (resizeSide === "sticky-left") {
        newWidth = Math.max(Math.min(initialWidth - deltaX, window.innerWidth * 0.9), 300);
        const newLeft = initialLeft + (initialWidth - newWidth) / window.innerWidth * 100;
        newLeftPercent = Math.max(0, Math.min(newLeft, 100 - (newWidth / window.innerWidth * 100)));
        currentNote.style.left = `${newLeftPercent}%`;
        currentNote.style.width = `${newWidth}px`;
        currentNote.dataset.leftPercent = newLeftPercent;
    } else if (resizeSide === "sticky-right") {
        newWidth = Math.max(Math.min(initialWidth + deltaX, window.innerWidth * 0.9), 300);
        currentNote.style.width = `${newWidth}px`;
    } else if (resizeSide === "sticky-bottom") {
        newHeight = Math.max(Math.min(initialHeight + deltaY, window.innerHeight * 0.9), 80);
        currentNote.style.height = `${newHeight}px`;
    }
}

function stopResize() {
    isResizing = false;
    currentNote = null;
    document.removeEventListener("mousemove", resizeNote);
    document.removeEventListener("mouseup", stopResize);
    document.removeEventListener("touchmove", resizeNote);
    document.removeEventListener("touchend", stopResize);
    saveNotesToLocalStorage();
}

function startDrag(event) {
    const header = event.target.closest(".sticky-header");
    if (!header || event.target.tagName === "BUTTON" || event.target.tagName === "SELECT" || event.target.tagName === "INPUT") return;

    event.preventDefault();
    isDragging = true;
    const note = header.closest(".sticky-note");
    bringToFront(note);

    const rect = note.getBoundingClientRect();
    let offsetX, offsetY;

    if (event.type === "touchstart") {
        const touch = event.touches[0];
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
    } else {
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
    }

    function dragNote(event) {
        event.preventDefault();
        if (!isDragging) return;

        const containerWidth = window.innerWidth;
        const containerHeight = window.innerHeight;
        let newNoteX, newNoteY;

        if (event.type === "touchmove") {
            const touch = event.touches[0];
            newNoteX = touch.clientX - offsetX;
            newNoteY = touch.clientY - offsetY;
        } else {
            newNoteX = event.clientX - offsetX;
            newNoteY = event.clientY - offsetY;
        }

        let leftPercent = (newNoteX / containerWidth) * 100;
        let topPercent = (newNoteY / containerHeight) * 100;
        leftPercent = Math.max(0, Math.min(leftPercent, 100 - (note.offsetWidth / containerWidth) * 100));
        topPercent = Math.max(0, Math.min(topPercent, 100 - (note.offsetHeight / containerHeight) * 100));

        note.style.left = `${leftPercent}%`;
        note.style.top = `${topPercent}%`;
        note.dataset.leftPercent = leftPercent;
        note.dataset.topPercent = topPercent;
    }

    function stopDrag() {
        isDragging = false;
        document.removeEventListener("mousemove", dragNote);
        document.removeEventListener("mouseup", stopDrag);
        document.removeEventListener("touchmove", dragNote);
        document.removeEventListener("touchend", stopDrag);
        saveNotesToLocalStorage();
    }

    document.addEventListener("mousemove", dragNote);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchmove", dragNote, { passive: false });
    document.addEventListener("touchend", stopDrag);
}

function deleteStickyNote(noteId) {
    const note = document.getElementById(noteId);
    if (!note) return;

    const container = document.getElementById("sticky-container");
    const notes = container.getElementsByClassName("sticky-note");
    const lang = getLanguage();
    const t = translations[lang];

    if (notes.length === 1) {
        if (confirm(t.lastNoteReset)) {
            resetNotes();
        }
    } else {
        deletedNotes.push({
            id: note.id,
            content: note.querySelector(".sticky-content").innerHTML,
            leftPercent: note.dataset.leftPercent || (parseFloat(note.style.left) / window.innerWidth * 100) || 50,
            topPercent: note.dataset.topPercent || (parseFloat(note.style.top) / window.innerHeight * 100) || 50,
            height: note.style.height || "300px",
            width: note.style.width || "300px",
            zIndex: note.style.zIndex || 1,
            fontSize: note.dataset.fontSize || "15px",
            fontColor: note.dataset.fontColor || "#000000"
        });
        note.remove();
        saveNotesToLocalStorage();
    }
}

function undoDelete() {
    if (deletedNotes.length === 0) return;

    const deletedNote = deletedNotes.pop();
    createStickyNote(deletedNote);
}

function resetNotes() {
    const container = document.getElementById("sticky-container");
    container.innerHTML = "";
    noteId = 0;
    deletedNotes = [];
    maxZIndex = 1;
    localStorage.removeItem("stickyNotes");
    createStickyNote();
    saveNotesToLocalStorage();
}

function saveNotesToLocalStorage() {
    const notes = document.getElementsByClassName("sticky-note");
    const notesArray = Array.from(notes).map(note => ({
        id: note.id,
        content: note.querySelector(".sticky-content").innerHTML,
        leftPercent: note.dataset.leftPercent || (parseFloat(note.style.left) / window.innerWidth * 100) || 50,
        topPercent: note.dataset.topPercent || (parseFloat(note.style.top) / window.innerHeight * 100) || 50,
        height: note.style.height || "300px",
        width: note.style.width || "300px",
        zIndex: note.style.zIndex || 1,
        fontSize: note.dataset.fontSize || "15px",
        fontColor: note.dataset.fontColor || "#000000"
    }));
    const data = {
        notes: notesArray,
        deletedNotes: deletedNotes,
        noteId: noteId,
        maxZIndex: maxZIndex
    };
    localStorage.setItem("stickyNotes", JSON.stringify(data));
}

function loadNotesFromLocalStorage() {
    const savedNotes = localStorage.getItem("stickyNotes");
    if (savedNotes) {
        try {
            const data = JSON.parse(savedNotes);
            const container = document.getElementById("sticky-container");
            container.innerHTML = "";
            noteId = data.noteId || 0;
            maxZIndex = data.maxZIndex || 1;
            deletedNotes = data.deletedNotes || [];
            (data.notes || []).forEach(note => {
                note.leftPercent = Math.max(0, Math.min(note.leftPercent || 50, 100));
                note.topPercent = Math.max(0, Math.min(note.topPercent || 50, 100));
                createStickyNote(note);
            });
        } catch (error) {
            const lang = getLanguage();
            const t = translations[lang];
            alert(t.loadError);
            createStickyNote();
        }
    } else {
        createStickyNote();
    }
}

function bringToFront(note) {
    maxZIndex++;
    note.style.zIndex = maxZIndex;
    saveNotesToLocalStorage();
}

window.onload = () => {
    loadDarkModeState();
    loadNotesFromLocalStorage();
    applyTranslations();
    setupTooltips();
};


document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById("toggleContainer");
    if (!toggle) {
        console.error("toggleContainer not found");
        return;
    }

    const container = document.getElementById("sticky-container");
    if (!container) {
        console.error("sticky-container not found");
        return;
    }

    container.style.display = "none";

    toggle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        container.style.display = container.style.display === "none" ? "block" : "none";
    });
});