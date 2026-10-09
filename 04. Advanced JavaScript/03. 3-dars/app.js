const openBtn = document.getElementById('open-btn');
const modal = document.getElementById('walker');
const closeBtn = document.getElementById('close-modal');

openBtn.onclick = () => modal.classList.remove('hidden');
closeBtn.onclick = () => modal.classList.add('hidden');
modal.onclick = (e) => { if (e.target === modal) modal.classList.add('hidden'); };