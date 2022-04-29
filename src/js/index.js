let order, clickedOrder = []
let score = 0

function colorDraw() {
    let selected = Math.floor(Math.random() * 4)
    order[order.length] = selected

    for (let i in order) {
        let elementeColor = creatElement(order[i])
        ligthColor(elementeColor, Number(i + 1))
    }
}

function ligthColor(elemente, time) {
    let time = time * 500
    setTimeout(() => {
        elemente.classList.add("select")
    }, time - 250 );

    setTimeout(() => {
        elemente.classList.remove("select")
    }, time - 250 );
}