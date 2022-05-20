import renderTable from './renderTable.js';

const FINAL_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iLhUHUKbK0GFKQnhs8n8/scores/';

const apiRefreshScores = async () => {
  const data = await fetch(`${FINAL_URL}`);
  const response = await data.json();
  renderTable(response);
};

const apiSendScore = async (_name, _score) => {
  const data = await fetch(`${FINAL_URL}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      user: _name,
      score: _score,
    }),
  });
  return data.json();
};

export { apiSendScore, apiRefreshScores };