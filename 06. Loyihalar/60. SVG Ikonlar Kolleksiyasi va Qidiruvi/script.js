
    window.copyIco = (name) => {
        navigator.clipboard.writeText(`<i class="fa-solid ${name}"></i>`);
        alert('Ikon HTML kodi nusxalandi: ' + name);
    };
  