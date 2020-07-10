export function makeCatBox(cat) {
    const div = document.createElement('div');
    div.classList.add('cat-box');

    const h2 = document.createElement('h2');
    h2.textContent = cat.name;

    const img = document.createElement('img');
    img.src = cat.url;

    const pTag = document.createElement('p');
    
    const span = document.createElement('span');
    span.textContent = cat.weight;
    span.classList.add('weight');

    pTag.append(span);

    div.append(h2, img, pTag);
    
    return div;
}