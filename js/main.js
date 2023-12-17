function toggleTheme() {
    const htmlTag = document.querySelector('html');
    if (htmlTag.classList.contains('dark')) {
        htmlTag.classList.remove('dark');
    } else {
        htmlTag.classList.add('dark');
    }
    class_change()
}