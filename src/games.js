import { renderTable } from './renderTable.js';

// const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
// const GAME_ID = 'iLhUHUKbK0GFKQnhs8n8';
const FINAL_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iLhUHUKbK0GFKQnhs8n8/scores/';

const API_sendScore = async (_name, _score) => {
    await fetch(
        `${FINAL_URL}`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                user: _name,
                _score,
            }),
        }
    ).then((response) => response.json())
    .then((response) => alert(response));
};

const API_refreshScores = async () => {
    await fetch(
        `${FINAL_URL}`,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
    .then((response) => response.json())
    .then((json) => renderTable(json));
};

export { API_sendScore, API_refreshScores };