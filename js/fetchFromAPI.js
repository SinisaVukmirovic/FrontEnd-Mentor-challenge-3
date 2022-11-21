import { btnElem } from "./DOMelems.js";
import insertData from "./insertData.js";

const APIurl = 'https://api.adviceslip.com/advice';
// export default APIurl;

const getAdvice = async (api) => {
    const response = await fetch(api, {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    });

    const data = await response.json();
    const { id, advice } = data.slip;

    insertData(id, advice);
};

btnElem.addEventListener('click', () => getAdvice(APIurl));