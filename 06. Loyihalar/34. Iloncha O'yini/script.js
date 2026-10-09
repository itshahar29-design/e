
    const canvas = document.getElementById('snake-canvas');
    const ctx = canvas.getContext('2d');
    const grid = 18;
    let snake, dx, dy, food, score = 0, loopId = null;

    function reset() {
        snake = [{x: 9, y: 9}];
        dx = 1; dy = 0; score = 0;
        document.getElementById('snake-score').textContent = 0;
        spawnFood();
    }
    function spawnFood() {
        food = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
    }
    function update() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };
        if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20 || snake.some(s => s.x === head.x && s.y === head.y)) {
            clearInterval(loopId);
            alert('O\'yin tugadi! Yig\'ilgan ball: ' + score);
            return;
        }
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            document.getElementById('snake-score').textContent = score;
            spawnFood();
        } else {
            snake.pop();
        }
        draw();
    }
    function draw() {
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(food.x * grid, food.y * grid, grid - 2, grid - 2);
        ctx.fillStyle = '#10b981';
        snake.forEach(s => ctx.fillRect(s.x * grid, s.y * grid, grid - 2, grid - 2));
    }
    window.addEventListener('keydown', (e) => {
        if ((e.key === 'ArrowUp' || e.key === 'w') && dy === 0) { dx = 0; dy = -1; }
        if ((e.key === 'ArrowDown' || e.key === 's') && dy === 0) { dx = 0; dy = 1; }
        if ((e.key === 'ArrowLeft' || e.key === 'a') && dx === 0) { dx = -1; dy = 0; }
        if ((e.key === 'ArrowRight' || e.key === 'd') && dx === 0) { dx = 1; dy = 0; }
    });
    window.startSnake = () => {
        clearInterval(loopId);
        reset();
        loopId = setInterval(update, 120);
    };
    startSnake();
  