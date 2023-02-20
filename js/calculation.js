// Blog page-----------------------------------------------------------------------

document.getElementById('blogBtn').addEventListener('click', function () {
    window.location.href = "./blog.html";
})
//function to get value ------------------------------------------------------------

function collectValue(id) {
    const collection = document.getElementById(id);
    const Value = parseFloat(collection.value);
    collection.value = '';
    return Value;

}

//function to calculate Area----------------------------------------------------------------

function calculation(shape, x, y) {


    if (isNaN(x) || isNaN(y) || x < 0 || y < 0) {
        alert("Please enter a valid number")
    }


    else {
        if (shape === 'square') {
            return ((x * y).toFixed(2))
        }
        else if (shape === 'ellipse') {

            return ((3.1416 * x * y).toFixed(2))
        }
        else {
            return ((.5 * x * y).toFixed(2))
        }

    }
}

// function to view result---------------------------------------------------------------

function calculationView(shape, result) {
    if (result != undefined) {
        const parent = document.getElementById('calculationView')
        const li = document.createElement('li')
        li.innerHTML = `<span>${shape} </span> <span class='result'> ${result} </span>cm<sup>2</sup> <span> <button id=${shape} class='result text-white  p-1 bg-sky-600 hover:bg-sky-800 hover:bg-sky-800 hover:bg-sky-800 hover:bg-sky-800 rounded '>Covert to m<sup>2</sup></button></span>`


        parent.appendChild(li)
        // cmToMeter(shape)
    }

}

// triangle------------------------------------------------------------------------------

document.getElementById('triangleCal').addEventListener('click', function () {
    const x = collectValue('triangleB')
    const y = collectValue('triangleH')

    const result = (calculation("triangle", x, y))
    calculationView("Triangle", result)

})

//rectangle--------------------------------------------------------------------------

document.getElementById('rectangleCal').addEventListener('click', function () {
    const x = collectValue('rectangleW')
    const y = collectValue('rectangleL')

    const result = (calculation("square", x, y))
    calculationView("Rectangle", result)

})

//parallelogram------------------------------------------------------------------------

document.getElementById('parallelogramCal').addEventListener('click', function () {
    const x = collectValue('parallelogramB')
    const y = collectValue('parallelogramH')

    const result = (calculation("square", x, y))
    calculationView("Parallelogram", result)

})

//rhombus--------------------------------------------------------------------------------

document.getElementById('rhombus').addEventListener('click', function () {
    const x = collectValue('rhombusD1')
    const y = collectValue('rhombusD2')

    const result = (calculation("square", x, y))
    calculationView("Rhombus", result)

})

//Pentagon----------------------------------------------------------------------------------

document.getElementById('pentagonCal').addEventListener('click', function () {
    const x = collectValue('pentagonP')
    const y = collectValue('pentagonB')

    const result = (calculation("pentagon", x, y))
    calculationView("Pentagon", result)

})

//Ellipse---------------------------------------------------------------------------------------

document.getElementById('ellipseCal').addEventListener('click', function () {
    const x = collectValue('ellipseA')
    const y = collectValue('ellipseB')

    const result = (calculation("ellipse", x, y))
    calculationView("Ellipse", result)

})

// background color change---------------------------------------------

function backgroundChange(id) {
    document.getElementById(id).addEventListener("mouseenter", function (e) {
        const backgroundColor = ['IndianRed ', 'MintCream ', 'Moccasin', 'LightBlue ', 'pink', 'LightGrey ', 'IndianRed ', 'MintCream ', 'Moccasin', 'LightBlue ', 'pink', 'LightGrey ']
        let random = Math.floor((Math.random() - .05) * 12);
        document.getElementById(id).style.background = backgroundColor[random];
    })

}

backgroundChange('triangle')
backgroundChange('rectangle')
backgroundChange('parallelogram')
backgroundChange('rhombus')
backgroundChange('pentagon')
backgroundChange('ellipse')






// function cmToMeter(shape) {
//     const button = document.getElementById(shape);
//     const resultInCm = button.parentElement.parentElement.childNodes[2].innerText;
//     const resultInMeter = (parseFloat(resultInCm) / 10000);
//     console.log(resultInMeter)

// }
