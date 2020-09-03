const htmlEl = document.getElementsByTagName('html')[0];
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
const darkmode_toggle = document.getElementById('darkmode_check');

if (currentTheme) {
	htmlEl.dataset.theme = currentTheme;
}

const toggleTheme = (theme) => {
	if (darkmode_check.checked == true){
		htmlEl.dataset.theme = theme;
		localStorage.setItem('theme', theme);
	}
	else {
		htmlEl.dataset.theme = null;
		localStorage.setItem('theme', null);
	}
}

/* Works with button press, not checkbox toggle

const toggleTheme = (theme) => {
	htmlEl.dataset.theme = theme;
	localStorage.setItem('theme', theme);
}
*/