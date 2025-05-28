'use strict'

const THEME_KEY = 'user-theme'

function saveTheme(bgColor) {
    localStorage.setItem(THEME_KEY, bgColor)
}

function loadTheme() {
    const bgColor = localStorage.getItem(THEME_KEY)
    if (!bgColor) return
    document.documentElement.style.setProperty('--bg1', bgColor)
}

window.onSaveTheme = function () {
    const bgColor = document.getElementById('bgColorPicker').value
    saveTheme(bgColor)
    loadTheme()
}

window.toggleThemeMenu = function () {
    const elMenu = document.querySelector('.theme-menu')
    elMenu.hidden = !elMenu.hidden
}

loadTheme()
