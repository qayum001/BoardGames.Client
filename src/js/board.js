export function drawCircle(divId, radius, color) {
    const div = document.getElementById(divId);
    if (!div) {
        console.error(`Div with id ${divId} not found`);
        return;
    }

    const circle = document.createElement('div');
    circle.style.width = `${radius * 2}px`;
    circle.style.height = `${radius * 2}px`;
    circle.style.backgroundColor = color;
    circle.style.borderRadius = '50%';
    circle.style.position = 'absolute';
    circle.style.top = '50%';
    circle.style.left = '50%';
    circle.style.transform = 'translate(-50%, -50%)';

    div.style.position = 'relative';
    div.appendChild(circle);
}