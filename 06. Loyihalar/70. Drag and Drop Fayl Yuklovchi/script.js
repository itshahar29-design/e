
    const da = document.getElementById('drop-area');
    da.ondragover = (e) => e.preventDefault();
    da.ondrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length) {
            document.getElementById('file-name').textContent = 'Yuklandi: ' + e.dataTransfer.files[0].name;
        }
    };
  