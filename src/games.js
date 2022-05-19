import { renderTable } from './renderTable.js';

const FINAL_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iLhUHUKbK0GFKQnhs8n8/scores/';

const API_sendScore = async (_name, _score) => {
    await fetch(`${FINAL_URL}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            user: _name,
            _score,
        }),
    }).then((response) => response.json());
};

const API_refreshScores = async () => {
    await fetch(`${FINAL_URL}`,)
    .then((response) => response.json())
    .then((json) => renderTable(json));
};

export { API_sendScore, API_refreshScores };