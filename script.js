const boxes = prompt('How many squares?');

createGrid(boxes);
mouseOver();

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