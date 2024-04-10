
function changeLanguage(language) {
    if (language === 'es') {
        window.location.href = 'index.html';
    } else if (language === 'en') {
        window.location.href = 'indexenglish.html';
    }
}

export default changeLanguage