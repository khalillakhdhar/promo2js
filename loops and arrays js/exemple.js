cars=["volvo","bmw","mercedes","bmw","jeep"];
occurences=0;
search="jeep";
cars.forEach(car => {
    if(search===car)
    occurences++;

}
)

    
console.log(`le nombre des occurences de ${search} est ${occurences}`)