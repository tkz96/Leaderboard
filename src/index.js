import './styles.css';
import { sendScoreToAPI, refreshScores } from './games.js';

const form = document.querySelector('form');
const refresh = document.getElementById('refresh-scores');

window.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById().value;
        const score = document.getElementById().value;
        sendScoreToAPI(name, score)
    });

    refresh.addEventListener('click', refreshScores());
});