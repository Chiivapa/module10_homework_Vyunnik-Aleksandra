let planets = new Map([

    ["sun", "yellow"],
    ["moon", "white"],
    ["mars", "red"],
    ["uranus", "blue"]
    
    ]);
    
    for (let name of planets.keys()) {
     console.log(`Ключ - ${name}, Значение - ${planets.get(name)}`)
    
    } 