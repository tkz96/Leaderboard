const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const sendScoreToAPI = async (name, score) => {
    await fetch(
        `'${BASE_URL}/games/lQk6PtMS8WHtKZi99VDH/scores'`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                user: name,
                score,
            }),
        }
    ).then((response) => response.json());
};

const refreshScores = async () => {
    await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/LzQ66iqiKtZlXDNStqI0/scores',
    )
    .then((response) => response.json())
    .then((json) => renderUi(json));
};