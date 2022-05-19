import './styles.css';
import { API_sendScore, API_refreshScores } from './games.js';

const form = document.querySelector('form');
const refresh = document.getElementById('refresh-scores');
const name = document.getElementById('name').value;
const score = document.getElementById('score').value;

const clearFormFields = () => {

};

window.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        API_sendScore(name, score);
        clearFormFields();
    });

    refresh.addEventListener('click', API_refreshScores());
});