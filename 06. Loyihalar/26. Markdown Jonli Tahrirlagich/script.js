
    function parseMD(md) {
        return md
            .replace(/^# (.*$)/gim, '<h1>$1</h1>')
            .replace(/^## (.*$)/gim, '<h2>$1</h2>')
            .replace(/^### (.*$)/gim, '<h3>$1</h3>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            .replace(/\[(.*)\]\((.*)\)/gim, '<a href="$2" style="color:#38bdf8;" target="_blank">$1</a>')
            .replace(/^\- (.*$)/gim, '<li>$1</li>')
            .replace(/\n/gim, '<br>');
    }
    const input = document.getElementById('md-input');
    const out = document.getElementById('md-output');
    input.oninput = () => out.innerHTML = parseMD(input.value);
    out.innerHTML = parseMD(input.value);
  