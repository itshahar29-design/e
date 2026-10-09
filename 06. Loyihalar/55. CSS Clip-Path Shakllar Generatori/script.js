
    window.setClip = (path) => {
        document.getElementById('clip-box').style.clipPath = path;
        document.getElementById('clip-val').value = `clip-path: ${path};`;
    };
  