var simplemde = new SimpleMDE({
	autosave: {
		enabled: true,
		uniqueId: "MyMarkdownNotes",
		delay: 1000,
	},
	element: $("#mkd")[0],
    placeholder: "Type here...",
    showIcons: ["table"],
    hideIcons:["guide"],
	toolbarTips: false,
    status: false,
    hideIcons: ["guide", "fullscreen", "side-by-side"],
    spellChecker: false,
});

function mdonoff(){
    $('#markdown-editor').toggle();
  }