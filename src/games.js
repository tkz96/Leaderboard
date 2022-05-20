import renderTable from './renderTable.js';

const FINAL_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iLhUHUKbK0GFKQnhs8n8/scores/';

const apiRefreshScores = async () => {
  await fetch(`${FINAL_URL}`)
    .then((response) => response.json())
    .then((json) => renderTable(json));
};

const apiSendScore = async (_name, _score) => {
  await fetch(`${FINAL_URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: _name,
      score: _score,
    }),
  }).then((response) => response.json());
  apiRefreshScores();
};

export { apiSendScore, apiRefreshScores };