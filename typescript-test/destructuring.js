"use strict";
// 1. excluir folder a compilar -> tsconfig.json => "exclude" :["folderToEsclude"]
// 2. IIFE => modulos (para hacer las variables 'private' en cada file)
// 3. Deconstruction params
(function () {
    var hero = {
        name: 'Pikachu',
        color: 'wheat',
        power: 'Bolt'
    };
    var villain = {
        nombre: 'Joker',
        colores: 'purple and green',
        poder: 'Laugh'
    };
    // const { PikaName, PikaColor, PikaPower } = hero; // ERROR => vars must keep original prop name
    var color = hero.color, power = hero.power, name = hero.name; // el orden no importa
    console.log(name, color, power);
    // desestrucring dentro de Fn
    (function (villain) {
        var nombre = villain.nombre, colores = villain.colores, poder = villain.poder;
        console.log(nombre, colores, poder);
    })(villain);
    // Desestructuring {} dentro de params de Fn
    function x(_a) {
        var nombre = _a.nombre, colores = _a.colores, poder = _a.poder;
        console.log(nombre, colores, poder);
    }
    x(villain);
    var heores = [hero.name, villain.nombre, 'Super López'];
    var hero1 = heores[0], hero2 = heores[1], hero3 = heores[2];
    console.log(hero1, hero2, hero3);
    // Desestructuring [] dentro de params de Fn
    (function (_a) {
        var hero1 = _a[0], hero2 = _a[1], hero3 = _a[2];
        return console.log(hero1, hero2, hero3);
    })(heores);
    // ... select inbetween
    var _a = ['Batman', 'WonderWoman', 'Wasp'], hero5 = _a[1];
    console.log(hero5); // WonderWoman
})();
