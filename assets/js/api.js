const API_BASE = 'api/index.php';

async function apiGet(path) {
  const response = await fetch(path, {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

async function apiStats() {
  return apiGet(`${API_BASE}?action=stats`);
}

async function apiSaveScore(score) {
  return apiPost(API_BASE, { score });
}

async function apiPost(path, data) {
  const response = await fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}
