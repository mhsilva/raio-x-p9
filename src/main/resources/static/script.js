const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

const dropzonesTotal = document.querySelectorAll('.dropzone-total')

document.getElementById("total").textContent = 'R$ 0,00';

const convertPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

/** our cards */
cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    // log('CARD: Start dragging ')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))
    dropzonesTotal.forEach(dropzone => dropzone.classList.add('highlight'))

    // this = card
    this.classList.add('is-dragging')
}

function drag() {
    // log('CARD: Is dragging ')
}

function dragend() {
    let calc;
    let total;
    let childrens = [];
    let arrayValues = [];

    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
    dropzonesTotal.forEach(dropzone => dropzone.classList.remove('highlight'));

    // this = card
    this.classList.remove('is-dragging');

    if (dropzonesTotal[0].children && dropzonesTotal[0].children.length > 0) {
        childrens = dropzonesTotal[0].children;
        arrayValues = Array.prototype.slice.call(childrens);
    } else {
        childrens = [];
        arrayValues = [];
        calc = []
        total = 0;
    }

    calc = arrayValues.map((item) => {
        return item.attributes.value.value
    });

    if (calc.length > 0) {
        total = calc.map((elt) => {
            return parseFloat(elt);
        }).reduce((a, b) => {
            return a + b
        })

    }

    document.getElementById("total").textContent = convertPrice.format(total);
}

/** place where we will drop cards */
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

dropzonesTotal.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    // log('DROPZONE: Enter in zone ')
}

function dragover() {
    // this = dropzone
    this.classList.add('over')

    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    // this = dropzone
    this.appendChild(cardBeingDragged)
}

function dragleave() {
    // log('DROPZONE: Leave ')
    // this = dropzone
    this.classList.remove('over')
}

function drop() {
    // log('DROPZONE: dropped ')
    this.classList.remove('over')
}