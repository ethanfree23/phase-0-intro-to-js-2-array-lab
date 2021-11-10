// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    return cats.push("Ralph");
}

function destructivelyPrependCat() {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop("Garfield");
}


function destructivelyRemoveFirstCat() {
    return cats.shift("Milo");
}


function appendCat() {
    const copyCat = [...cats, "Broom"];
    return copyCat;
}

function prependCat() {
    const copyCat2 = ["Arnold", ...cats];
    return copyCat2;
}

function removeLastCat() {
    let removeLastCat = cats.slice(0, cats.length -1);
    return removeLastCat;
}

function removeFirstCat() {
    let removeFirstCat = cats.slice(1);
    return removeFirstCat;
}
