const overlay = document.getElementById('scoreOverlay');
const scoreTitle = document.getElementById('scoreTitle');
const scoreValue = document.getElementById('scoreValue');
const scoreNote = document.getElementById('scoreNote');
const metaPrevious = document.getElementById('metaPrevious');
const metaLatest = document.getElementById('metaLatest');
const metaBest = document.getElementById('metaBest');
const recentScores = document.getElementById('recentScores');
const closeScore = document.getElementById('closeScore');

function openOverlay() {
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
}

function closeOverlayPanel() {
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
}

function renderRecent(list) {
  recentScores.innerHTML = '';

  if (!list.length) {
    const item = document.createElement('li');
    item.textContent = 'Aucun score recent pour le moment.';
    recentScores.appendChild(item);
    return;
  }

  list.forEach((entry) => {
    const item = document.createElement('li');
    item.innerHTML = `<span>${entry.created_at}</span><strong>${entry.score}</strong>`;
    recentScores.appendChild(item);
  });
}

async function refreshStats(mode) {
  scoreTitle.textContent = {
    previous: 'Ancien score',
    latest: 'Nouveau score',
    best: 'Meilleur score'
  }[mode];

  try {
    const payload = await apiStats();
    const stats = payload.stats;
    const valueByMode = {
      previous: stats.previous_score,
      latest: stats.last_score,
      best: stats.best_score
    };

    scoreValue.textContent = valueByMode[mode];
    scoreNote.textContent = mode === 'best'
      ? 'Le record est conserve en base de donnees et recupere a chaque visite.'
      : 'Le score est lu directement depuis la base de donnees SQLite.';
    metaPrevious.textContent = stats.previous_score;
    metaLatest.textContent = stats.last_score;
    metaBest.textContent = stats.best_score;
    renderRecent(payload.recent_scores || []);
  } catch (error) {
    scoreValue.textContent = 'N/A';
    scoreNote.textContent = 'Impossible de joindre le backend PHP pour le moment.';
    recentScores.innerHTML = '<li>Le service de score est indisponible.</li>';
  }

  openOverlay();
}

document.querySelectorAll('[data-score-mode]').forEach((button) => {
  button.addEventListener('click', () => {
    refreshStats(button.dataset.scoreMode);
  });
});

closeScore.addEventListener('click', closeOverlayPanel);
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    closeOverlayPanel();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeOverlayPanel();
  }
});
