type Bird = {
    fly: () => void;
    layEggs: () => void;
};

type Fish = {
    swim: () => void;
    layEggs: () => void;
};

// Union type for a pet that can be either Bird or Fish
type Pet = Bird | Fish;

// Intersection type for a pet that can both fly and swim
type SuperPet = Bird & Fish;

function getPet(): Pet {
    return Math.random() > 0.5 ? { fly: () => console.log('Flying'), layEggs: () => console.log('Laying eggs') } : { swim: () => console.log('Swimming'), layEggs: () => console.log('Laying eggs') };
}

const pet = getPet();
pet.layEggs(); // Common method in both Bird and Fish

if ('fly' in pet) {
    pet.fly(); // Type guard for Bird
} else if ('swim' in pet) {
    pet.swim(); // Type guard for Fish
}
