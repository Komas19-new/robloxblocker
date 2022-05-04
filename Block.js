document.body.textContent = "Site blocked."
document.title = "BLOCKED"

var link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = 'https://cdn.discordapp.com/attachments/965627089862656031/971391864492159096/icon-48.ico';
