import './styles.css';
import { API_sendScore, API_refreshScores } from './games.js';

window.onload = API_refreshScores();

const form = document.querySelector('form');
const refresh = document.getElementById('refresh-scores')

refresh.onclick = () => {
    API_refreshScores();
}

window.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const score = document.getElementById('score').value;
        console.log(name);
        console.log(score);
        API_sendScore(name, score);
        form.reset()
    });
    
});