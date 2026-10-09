
    window.formatDoc = (cmd) => document.execCommand(cmd, false, null);
    window.downloadTxt = () => {
        const text = document.getElementById('editor-body').innerText;
        const blob = new Blob([text], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'matn.txt';
        a.click();
    };
  