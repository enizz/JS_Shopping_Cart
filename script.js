let productsArray = []
let pricesArray = []

function AddOne(){
    productsArray.push("Crutches")
    pricesArray.push(59.99)
}

function AddTwo(){
    productsArray.push("Aircast Boot")
    pricesArray.push(67.99)
}

function AddThree(){
    productsArray.push("Knee Scooter")
    pricesArray.push(125.00)
}


function CheckOut(){
    let total = 0
    pricesArray.forEach(x => {
        total += x
    })
    
    productsArray.forEach(x => {
        let index = productsArray.indexOf(x)
        let price = pricesArray[index]
        let lineBreak = document.createElement("br")
        let product = `${x}`
        document.body.append(`${product}: ${price}`)
        document.body.appendChild(lineBreak)
    })

    
    let totalAppend = `Total: $${Number(total)}`
    document.body.append(totalAppend)
}