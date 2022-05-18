import './styles.css';

const form = document.querySelector('form');
const refreshScores = document.getElementById('refresh-scores');

window.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => sendScoreToAPI(e));
    refreshScores.addEventListener('click', refreshScores());
});