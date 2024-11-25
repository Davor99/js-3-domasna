function zbir(niza) {
    var zb = 0;
    for (var i = 0; i < niza.length; i++) {
        zb = zb + niza[i];

    }
    return zb;
}

console.log(zbir([1, 2, 3, 4, 5, 69]));




var studenti = [
    { ime: "Yara", prezime: "Daniels", prosek: 9.2, grad: "Skopje" },
    { ime: "Rayne", prezime: "Clements", prosek: 7.5, grad: "Skopje" },
    { ime: "Scout", prezime: "Lambert", prosek: 8.6, grad: "Skopje" },
    { ime: "Megan", prezime: "Allen", prosek: 6.9, grad: "Sofija" },
    { ime: "Colette", prezime: "Young", prosek: 9.5, grad: "Skopje" }
];

studenti.forEach(student => {
    student.stipendija = student.prosek > 8;
});
var studentiSoStipendija = studenti.filter(student => student.stipendija);
console.log("Studenti:", studenti);
console.log("Studenti so stipendija:", studentiSoStipendija);




var city = [

    { grad: "Bitola", ziteli: 400000 },
    { grad: "Ohrid", ziteli: 150000 },
    { grad: "Alexandria", ziteli: 5000000 }





]

var najnaseleniGradovi = city
    .sort((prv, vtor) => vtor.population - prv.population)
    .slice(0, 3);

var gradoviNaA = city.filter(
    grad => grad.grad.startsWith("А")
);


function zbirNaZiteli(gradovi) {
    var zb = 0
    gradovi.forEach(grad => {
        zb = zb + grad.ziteli
    });
    return zb;
 
}
var vkupnoZiteli = zbirNaZiteli(city);
var prosecnoZiteli = vkupnoZiteli / city.length;

console.log(najnaseleniGradovi)
console.log(gradoviNaA)
console.log(vkupnoZiteli)
console.log(prosecnoZiteli)
