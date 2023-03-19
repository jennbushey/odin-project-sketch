createGrid();

function createGrid() {
    //creates i number of div squares
    const container = document.querySelector('.container');
    const row = document.querySelector('.container');
    const rootBox = squareGrid();

    for (let i = 0; i < rootBox; i++) {
        //creates row
        let row = document.createElement('div');
        row.classList.add('row');
        row.textContent = i;
        container.appendChild(row);

        for (let i = 0; i < rootBox; i++) {
            //creates columns within rows
            let square = document.createElement('div');
            square.classList.add('square');
            square.textContent = i;
            row.appendChild(square);
        };
    };
};

function squareGrid() {
    //find nearest square of a given number
    let j = Math.floor(Math.sqrt(16));
    console.log(j);
    return j;
};
