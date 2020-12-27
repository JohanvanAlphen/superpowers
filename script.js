const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
];

// 1
const superheroNames = superheroes.map((superhero) => {
    return superhero.name;
});
console.log(superheroNames);

// 2
const lightSuperheroes = superheroes.filter((superhero) => {
    return superhero.weight < 190;
});
console.log("Weigh less than 190 pounds: ", lightSuperheroes);

// 3
const pound200heroes = superheroes.filter((superhero) => {
    return superhero.weight === "200";
}).map((superhero) => {
    return superhero.name;
});
console.log("Weigh 200 pounds: ", pound200heroes);

// 4
const firstAppearance = superheroes.map((superhero) => {
    return "First appearance of " + superhero.name + ": "+ superhero.first_appearance;
})
console.log(firstAppearance);

// 5a
const DCComics = superheroes.filter((superhero) => {
    return superhero.publisher === "DC Comics";
});
console.log("DC heroes: ", DCComics);

// 5b
const marvel = superheroes.filter((superhero) => {
    return superhero.publisher === "Marvel Comics";
});
console.log("Marvel heroes: ", marvel);

// 6
const countWeightDC = superheroes.filter((superhero) => {
    return superhero.weight !== "unknown" && superhero.publisher === "DC Comics";
}).reduce((currentTotal, superhero) => {
    return parseInt(superhero.weight) + currentTotal;
}, 0);
console.log("Total Weight DC: " + countWeightDC);

// 7
const countWeightMarvel = superheroes.filter((superhero) => {
    return superhero.weight !== "unknown" && superhero.publisher === "Marvel Comics";
}).reduce((currentTotal, superhero) => {
    return parseInt(superhero.weight) + currentTotal;
}, 0);
console.log("Total Weight Marvel: " + countWeightMarvel);

// 8
let highestWeight = 0;
const heaviestSuperhero = superheroes.map((superhero) => {
    if(superhero.weight !== "unknown" && parseInt(superhero.weight) > highestWeight) {
        highestWeight = parseInt(superhero.weight);
    };
    return superhero;   
}).filter((superhero) => {
    return superhero.weight === '' + highestWeight;
});
console.log("Heaviest superhero: ", heaviestSuperhero);
