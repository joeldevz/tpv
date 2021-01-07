function decrement(e) {

    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const id = btn.nextElementSibling.dataset.id
    let price = btn.nextElementSibling.dataset.price
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    if (value <= 0) {
        return target.value = 1;
    }
    for (let index = 0; index < item.length; index++) {
        if (item[index].id == id) {
            item[index].cantidad = value
        }
    }
    showAllPrice(0)
    priceItem(id, price, value)
    return target.value = value;
}
function priceItem(id, price, value) {
    let item = document.getElementById(id)
    item.innerText = intlRound(price * value);

}
function intlRound(numero, decimales = 2, usarComa = false) {
    var opciones = {
        maximumFractionDigits: decimales,
        useGrouping: false
    };
    usarComa = usarComa ? "es" : "en";
    return new Intl.NumberFormat(usarComa, opciones).format(numero);
}
function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const id = btn.nextElementSibling.dataset.id
    let price = btn.nextElementSibling.dataset.price
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    if (value < 0) {
        return target.value = 0;

    }
    value++;
    for (let index = 0; index < item.length; index++) {
        if (item[index].id == id) {
            item[index].cantidad = value
        }
    }
    priceItem(id, price, value)
    showAllPrice(0)
    target.value = value;
}
function butons() {
    const decrementButtons = document.querySelectorAll(
        `button[data-action="decrement"]`
    );

    const incrementButtons = document.querySelectorAll(
        `button[data-action="increment"]`
    );
    console.log(incrementButtons)
    decrementButtons.forEach(btn => {
        btn.addEventListener("click", decrement);
    });

    incrementButtons.forEach(btn => {
        btn.addEventListener("click", increment);
    });
}
let data = [{
    id: "item-1",
    title: "Funda MAC",
    category: "PC",
    price: 10
}, {
    id: "item-2",
    title: "Funda WINDOWS",
    category: "PC",
    price: 17.32
},
{
    id: "item-3",
    title: "Funda para Xiaomi",
    category: "Mobile",
    price: 24.30
}, {
    id: "item-4",
    title: "Auriculares Samsung",
    category: "Auriculares",
    price: 17.30
},
]
/*
    {
        id:"asd",
        id_item:item-3,
        cantidad:
    }
*/
let item = {
    user: {
        name: "ANONIMOUS"
    },
    products: []
}
showItem()

function showItem() {
    let idShow = document.getElementById('cesta')
    let show = ``
    let priceAll = 0
    item.products.map((v) => {
        let category;
        if (v.category === 'PC') {
            category = `<path
            d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />`
        }
        if (v.category === 'Mobile') {
            category = `  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>`
        }
        if (v.category === 'Auriculares') {
            category = `<path fill-rule="evenodd" d="M6.825 4.138c.596 2.141-.36 3.593-2.389 4.117a4.432 4.432 0 0 1-2.018.054c-.048-.01.9 2.778 1.522 4.61l.41 1.205a.52.52 0 0 1-.346.659l-.593.19a.548.548 0 0 1-.69-.34L.184 6.99c-.696-2.137.662-4.309 2.564-4.8 2.029-.523 3.402 0 4.076 1.948zm-.868 2.221c.43-.112.561-.993.292-1.969-.269-.975-.836-1.675-1.266-1.563-.43.112-.561.994-.292 1.969.269.975.836 1.675 1.266 1.563zm3.218-2.221c-.596 2.141.36 3.593 2.389 4.117a4.434 4.434 0 0 0 2.018.054c.048-.01-.9 2.778-1.522 4.61l-.41 1.205a.52.52 0 0 0 .346.659l.593.19c.289.092.6-.06.69-.34l2.536-7.643c.696-2.137-.662-4.309-2.564-4.8-2.029-.523-3.402 0-4.076 1.948zm.868 2.221c-.43-.112-.561-.993-.292-1.969.269-.975.836-1.675 1.266-1.563.43.112.561.994.292 1.969-.269.975-.836 1.675-1.266 1.563z"/>`
        }
        let total = v.cantidad * v.price
        priceAll = total + priceAll

        show = show + `<div class="grid grid-cols-3 p-4 rounded border border-light-blue-500 mb-3"
        style="border-color: rgba(255, 255, 255, 0.5);">
        <div class="flex flex-col2 flex-grow">
            <div
                class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-500 bg-blue-100 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                    stroke="currentColor" fill="currentColor" viewBox="0 0 16 16">
                    ${category
            }
                    
                </svg>
            </div>
            <div class="flex flex-col flex-grow ml-4 ">
                <div class="font-semibold text-gray-400 text-md">
                   ${v.title}
                </div>
                <div class="text-lg font-bold"> ${v.price}€</div>
            </div>
        </div>
        <div class="flex flex-col flex-grow ml-4 text-center">
            <div class="font-semibold text-gray-400 text-md">
                Total
            </div>
            <div class="text-lg font-bold" id="${v.id}"> ${total}€</div>
        </div>
        <div class="flex flex-col flex-grow ml-4 ">
            <div class="custom-number-input h-10 w-32 ml-auto">
                <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    <button data-action="decrement"
                        class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                        <span class="m-auto text-2xl font-thin"> ${'-'} </span>
                    </button>
                    <input type="number"
                        class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                        name="custom-input-number" value="${v.cantidad}" data-id="${v.id}"
                        data-price="${v.price}"></input>
                    <button data-action="increment"
                        class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span class="m-auto text-2xl font-thin">+</span>
                    </button>
                </div>
            </div>
        </div>
    </div>`
    })
    idShow.innerHTML = show
    showAllPrice(priceAll)
    butons()
}
function showAllPrice(priceAll) {
    if (priceAll === 0) {
        item.products.map((v) => {
            console.log((v.cantidad * v.price) + priceAll)
            priceAll = (v.cantidad * v.price) + priceAll
        })
    }
    let Siniva = priceAll / 1.21
    let iva = priceAll - Siniva
    console.log(Siniva, iva)
    document.getElementById('IVA').value = iva.toFixed(2)
    document.getElementById('total').value = priceAll.toFixed(2)
}
function addItem(code, count, data) {
    for (let index = 0; index < data.length; index++) {
        if (data[index].id === code) {
            item.products.push({
                id: Math.random(),
                title: data[index].title,
                category: data[index].category,
                price: data[index].price,
                cantidad: count
            })
            return showItem()
        }
    }
    item.products.push({
        id: Math.random(),
        title: data.title,
        category: data.category,
        price: data.price,
        cantidad: count
    })
    return showItem()
}
const form = document.querySelector('#addProduct');
const formCode = document.querySelector('#formCode');
formCode.addEventListener('submit', event => {
    event.preventDefault();
    let code = document.getElementById('code')
    let name = document.getElementById('nameProduct')
    let price = document.getElementById('priceProduct')
    let cantidad = document.getElementById('countProduct')
    let category = document.getElementById('categoryProduct')
    for (let index = 0; index < data.length; index++) {
        if (code.value === data[index].id) {
            name.value = data[index].title
            category.value = data[index].category
            cantidad.value = 1
            price.value = data[index].price
        }
    }
    return
})
form.addEventListener('submit', event => {
    event.preventDefault();
    // actual logic, e.g. validate the form
    let code = document.getElementById('code')
    let name = document.getElementById('nameProduct')
    let price = document.getElementById('priceProduct')
    let cantidad = document.getElementById('countProduct')
    let category = document.getElementById('categoryProduct')

    if (name.value.length == 0 || price.value < 0 || cantidad.value < 1) {
        if (code.value.length == 0) {
            return alert("rellene los datos")
        }
        for (let index = 0; index < data.length; index++) {
            if (code.value === data[index].id) {
                name.value = data[index].title
                category.value = data[index].category
                cantidad.value = 1
                price.value = data[index].price
            }
        }
        return
    }
    addItem(code.value, cantidad.value, { title: name.value, category: category.value, price: price.value })
    document.getElementById('code').value = ""
    document.getElementById('nameProduct').value = ""
    document.getElementById('priceProduct').value = " "
    document.getElementById('countProduct').value = " "
});