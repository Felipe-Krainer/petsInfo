const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog"
    }
];

const showInfo = () => {
    let petNum = document.querySelector('#petNum').value;
    
    if (petNum >= 1 && petNum <= petsData.length) {
        let pet = petsData[petNum - 1];
        
        let petInfo = `${pet.petName} the ${pet.breed.toLowerCase()} is ${pet.age} years old. This ${pet.breed.toLowerCase()} weighs ${pet.weightInKilos} kilos.`;

        document.querySelector('.selectedPetInfo').innerHTML = petInfo;
    } else {
        document.querySelector('.selectedPetInfo').innerHTML = "Please enter a valid number between 1 and " + petsData.length + ".";
    }
};
