const container = document.querySelector("#container");

//This for loop creates an array of 16 'row' divs.
for (let i = 0; i < 16; i++) {

    const rows = document.createElement("div");
    rows.id ="rows";
    //rows.textContent = i;

    container.appendChild(rows);
    for (let j = 0; j < 16; j++){
        const kouti = document.createElement("div");
        kouti.id ="box";
        kouti.textContent = "seira "+i+" kouti "+j;

        rows.appendChild(kouti);
    }
  }