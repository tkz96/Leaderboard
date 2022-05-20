import './styles.css';
import { apiSendScore, apiRefreshScores } from './games.js';

window.onload = apiRefreshScores();

const form = document.querySelector('form');
const refresh = document.getElementById('refresh-scores');

refresh.onclick = () => {
  apiRefreshScores();
};

window.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    apiSendScore(name, score);
    form.reset();
  });
});