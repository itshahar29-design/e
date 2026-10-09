
    const dcv = document.getElementById('draw-canvas');
    const dctx = dcv.getContext('2d');
    let painting = false;
    dcv.onmousedown = () => painting = true;
    window.onmouseup = () => { painting = false; dctx.beginPath(); };
    dcv.onmousemove = (e) => {
        if (!painting) return;
        const r = dcv.getBoundingClientRect();
        dctx.lineWidth = document.getElementById('draw-size').value;
        dctx.lineCap = 'round';
        dctx.strokeStyle = document.getElementById('draw-color').value;
        dctx.lineTo(e.clientX - r.left, e.clientY - r.top);
        dctx.stroke();
        dctx.beginPath();
        dctx.moveTo(e.clientX - r.left, e.clientY - r.top);
    };
    window.clearDraw = () => dctx.clearRect(0, 0, dcv.width, dcv.height);
  