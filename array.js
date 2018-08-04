var cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars.valueOf());

for (var i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

console.log(cars.join(" and "));

cars.push("Honda");
cars.push("Yamaha");
cars.push("Toyota");
console.log(cars.valueOf());

while (cars.length > 0) {
    cars.pop();
    console.log(cars.valueOf());
}