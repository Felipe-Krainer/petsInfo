const petsData = [
    {
        petName: "Stella",
        age: 7,
        weightInKilos: 24,
        breed: "Dalmation",
        imageUrl: "images/stella.jpeg"
    },
    {
        petName: "Cody",
        age: 8,
        weightInKilos: 22,
        breed: "Corgi",
        imageUrl: "images/cody.jpeg"
    },
    {
        petName: "Mango",
        age: 2,
        weightInKilos: 11,
        breed: "Persian",
        imageUrl: "images/mango.jpeg"
    },
    {
        petName: "Lucy",
        age: 4,
        weightInKilos: 35,
        breed: "Ball Python",
        imageUrl: "images/lucy.jpeg"
    },
    {
        petName: "Buhmie",
        age: 1,
        weightInKilos: 28,
        breed: "Bull-dog",
        imageUrl: "images/buhmie.jpeg"
    }
];

const showInfo = () => {
    let petNum = document.querySelector('#petNum').value;
    console.log(`Pet number selected: ${petNum}`);
    
    if (petNum >= 1 && petNum <= petsData.length) {
        let pet = petsData[petNum - 1];
        
        let petInfo = `${pet.petName} the ${pet.breed.toLowerCase()} is ${pet.age} years old. This ${pet.breed.toLowerCase()} weighs ${pet.weightInKilos} kilos.`;

        document.querySelector('.selectedPetInfo').innerHTML = petInfo;

        // Display the pet's image
        const petImage = document.querySelector('#petImage');
        petImage.src = pet.imageUrl;
        petImage.style.display = 'block'; // Show the image if it's hidden
        
        console.log(`Displayed info for ${pet.petName}.`);
    } else {
        document.querySelector('.selectedPetInfo').innerHTML = "Please enter a valid number between 1 and " + petsData.length + ".";
        document.querySelector('#petImage').style.display = 'none'; // Hide the image when input is invalid
        alert('Invalid pet number entered. Please try again.');
    }
};
