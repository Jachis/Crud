const carsArray = [{
    marca: "Audi",
    modelo: "A4",
    color: "negro",
    año: "2019",
    precio: "$500,000.00",
    Image: "https://cdn.pixabay.com/photo/2015/05/15/14/46/bmw-768688_1280.jpg"
}
]

function showCar(data) {
let content = document.getElementById("card-item");
content.innerHTML = " ";
data.forEach((user) => {
const htmluser = `<div>
        <img src="${user.Image}" alt="cars" class="src">
    </div>
    <div>
        <span>Marca:${user.marca}</span><br>
        <span>Modelo:${user.modelo}</span><br>
        <span>Color:${user.color}</span><br>
        <span>Año:${user.año}</span><br>
        <h2>Precio:</h2><br><span class="text-center fw-bolder">${user.precio}</span>
    </div>`
content.innerHTML += htmluser;
})
};

function addCars(){
    const  carBrand= document.getElementById("Marca").value;
    const carModel = document.getElementById("Modelo").value;
    const carColor = document.getElementById("Color").value;
    const carYear = document.getElementById("Año").value;
    const carPrice = document.getElementById("Precio").value;
    const carImage = document.getElementById("Imagen").value;

    const newCar = {
        marca: carBrand,
        modelo: carModel,
        color: carColor,
        año: carYear,
        precio: carPrice,
        Image: carImage
    }
    
    carsArray.push(newCar);
    showCar(carsArray);
    HideFormContainer();
    resetform()
    
}

function resetform(){
    document.getElementById("car-form").reset();
}

function HideFormContainer(){
    document.getElementById("cars-container").classList.add("d-none");
}

function showFormContainer(){
    document.getElementById("cars-container").classList.remove("d-none");
}