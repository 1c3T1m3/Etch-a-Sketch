const container = document.querySelector("#container");
let unique = 0;
//This for loop creates an array of 16 'row' divs.
for (let i = 0; i < 16; i++) {

    const rows = document.createElement("div");
    rows.classList.add("rows");
    //rows.textContent = i;

    container.appendChild(rows);
    for (let j = 0; j < 16; j++){
        const colum = document.createElement("div");
        colum.id = `b${unique}`;
        colum.classList.add("column");
        colum.textContent = " . ";
        unique++;
        rows.appendChild(colum);
    }
  }

for (let i = 0; i < unique; i++) {

  const element = document.querySelector(`#b${i}`);

  element.addEventListener('mouseenter', () => {
    element.style.backgroundColor = 'black';
  });
}