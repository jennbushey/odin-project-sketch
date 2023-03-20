clickButton();

function clickButton() {
    click = document.querySelector('button');
    click.addEventListener('click', () => start());
}

function start() {
    //prompts user for size of etch-a-sketch
    boxes = prompt('Pick a number between 1 and 100');
    checkBoxes(boxes);
    mouseOver();
}

function checkBoxes(boxes) {
    //validates user input
    if ((boxes < 1) || (boxes > 100)){
        start();
    } else {
        createGrid(boxes);
    }
}

function mouseOver() {
    //on mouseover adds hover id
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', () => {
        square.id = 'hover';
    }));
}

function createGrid(boxes) {
    //creates i number of div squares
    const container = document.querySelector('.container');
    const row = document.querySelector('.container');

    for (let i = 0; i < boxes; i++) {
        //creates row
        let row = document.createElement('div');
        row.classList.add('row');
        //row.textContent = i;
        container.appendChild(row);

        for (let j = 0; j < boxes; j++) {
            //creates columns within rows
            let square = document.createElement('div');
            square.classList.add('square');
            //square.textContent = j;
            row.appendChild(square);
        };
    };
};