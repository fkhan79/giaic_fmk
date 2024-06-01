class Bird {
    fly(): void {
        console.log('Bird is flying');
    }
}

class Fish {
    swim(): void {
        console.log('Fish is swimming');
    }
}

// Union type
type Pet = Bird | Fish;

function move(pet: Pet): void {
    if (pet instanceof Bird) {
        pet.fly();
    } else if (pet instanceof Fish) {
        pet.swim();
    }
}

const bird = new Bird();
const fish = new Fish();

move(bird); // Output: Bird is flying
move(fish); // Output: Fish is swimming
