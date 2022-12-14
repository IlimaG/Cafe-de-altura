// PRODUCTOS

axios
    .get(`https://cafe-de-altura-api.vercel.app/api/products`)
    .then(response => {
        const products = response.data.products
        const indexProducts = products.slice(0, 4)

        let indexShop = document.getElementById(`section3Shop`)

        indexProducts.forEach(coffe => {

            let target = document.createElement(`div`)
            target.setAttribute(`class`, `col-sm-6 col-lg-3 buy`)
            indexShop.appendChild(target)

            let coffePicture = document.createElement(`img`)
            coffePicture.setAttribute(`src`, `${coffe.img_url}`)
            target.appendChild(coffePicture)

            let coffeName = document.createElement(`h5`)
            coffeName.innerText = coffe.brand
            target.appendChild(coffeName)

            let coffePrice = document.createElement(`p`)
            coffePrice.innerText = `${coffe.price},00 €`
            target.appendChild(coffePrice)

            let coffeBtn = document.createElement(`button`)
            coffeBtn.innerText = `Añadir`
            target.appendChild(coffeBtn)

            coffe.quantity = 1
            coffeBtn.onclick = () => {

                const existe = coffeStorage.some(prod => prod._id === coffe._id) 

                if (existe) { 
                    coffeStorage.map(prod => { 
                        if (prod._id === coffe._id) {
                            prod.quantity++
                        }
                    })
                } else {
                    coffeStorage.push(coffe)
                }
                cest.style.display = "flex"
                actCart()
            }


        })

    })

