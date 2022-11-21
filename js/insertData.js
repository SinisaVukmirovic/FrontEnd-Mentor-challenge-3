import { adviceIdNumb, adviceQuote } from "./DOMelems.js";

export default function insertData(id, quote) {
    adviceIdNumb.textContent = id;
    adviceQuote.textContent = `"${quote}"`;
}