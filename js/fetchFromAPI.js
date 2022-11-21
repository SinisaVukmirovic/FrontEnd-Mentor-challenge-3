import { btnElem } from "./DOMelems.js";

const APIurl = 'https://api.adviceslip.com/advice';
export default APIurl;

const getAdvice = async (api) => {
    const response = await fetch(api, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });

    const advice = await response.json();
    // const textJokeData = await response.text();

    console.log(`"${advice.slip.advice}"`);
};

btnElem.addEventListener('click', () => getAdvice(APIurl));