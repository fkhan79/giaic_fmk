interface Animal {
    name: string;
}

interface Pet {
    owner: string;
}

// Intersection type
type PetAnimal = Animal & Pet;

const myPet: PetAnimal = {
    name: 'Buddy',
    owner: 'John'
};

console.log(`My pet ${myPet.name} is owned by ${myPet.owner}.`);
// Output: My pet Buddy is owned by John.
