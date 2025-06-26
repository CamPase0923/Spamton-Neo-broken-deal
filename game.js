
// Basic setup for Spamton NEO: Broken Deal prototype

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

let gameState = 'intro'; // intro, fight, deal, end
let dialogueText = document.getElementById('dialogue-text');
const menu = document.getElementById('menu');
const dealChoice = document.getElementById('deal-choice');

// Simple player soul position
let player = { x: 320, y: 400, width: 16, height: 16 };
let keysDown = {};

// Basic input handlers
window.addEventListener('keydown', (e) => {
  keysDown[e.key] = true;
});

window.addEventListener('keyup', (e) => {
  delete keysDown[e.key];
});

// Setup buttons
document.getElementById('btn-fight').onclick = () => startFight();
document.getElementById('btn-act').onclick = () => showDialogue("You try to ACT but Spamton ignores you.");
document.getElementById('btn-item').onclick = () => showDialogue("You have no items.");
document.getElementById('btn-mercy').onclick = () => showDialogue("You try to show MERCY but Spamton is relentless.");

document.getElementById('btn-deal-yes').onclick = () => acceptDeal();
document.getElementById('btn-deal-no').onclick = () => refuseDeal();

function showDialogue(text) {
  dialogueText.textContent = text;
}

function startFight() {
  gameState = 'fight';
  showDialogue("Spamton NEO: DID YOU MISS ME?!");
  menu.style.display = 'block';
  dealChoice.classList.add('hidden');
}

function acceptDeal() {
  showDialogue("Deal accepted! Your attacks will be stronger, but Spamton's attacks too!");
  dealChoice.classList.add('hidden');
  menu.style.display = 'block';
  // Modify game state accordingly
}

function refuseDeal() {
  showDialogue("Deal refused. Spamton looks furious!");
  dealChoice.classList.add('hidden');
  menu.style.display = 'block';
  // Modify game state accordingly
}

// Game loop
function update() {
  // Simple movement
  if (keysDown['ArrowLeft'] && player.x > 0) player.x -= 5;
  if (keysDown['ArrowRight'] && player.x + player.width < canvas.width) player.x += 5;
  if (keysDown['ArrowUp'] && player.y > 0) player.y -= 5;
  if (keysDown['ArrowDown'] && player.y + player.height < canvas.height) player.y += 5;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw player soul as a red square for now
  ctx.fillStyle = 'red';
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Draw Spamton (placeholder)
  ctx.fillStyle = 'cyan';
  ctx.fillRect(280, 100, 80, 80);
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Start
startFight();
gameLoop();
