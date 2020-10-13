// 1. excluir folder a compilar -> tsconfig.json => "exclude" :["folderToEsclude"]

// 2. IIFE => modulos (para hacer las variables 'private' en cada file)

// 3. Deconstruction params
(() => {
    const hero = {
        name: 'Pikachu',
        color: 'wheat',
        power: 'Bolt'

    };
    const villain = {
        nombre: 'Joker',
        colores: 'purple and green',
        poder: 'Laugh'
    };

    // const { PikaName, PikaColor, PikaPower } = hero; // ERROR => vars must keep original prop name
    const { color, power, name } = hero; // el orden no importa
    console.log(name, color, power);

    // desestrucring dentro de Fn
    ((villain: any) => {
        const { nombre, colores, poder } = villain;
        console.log(nombre, colores, poder);
    })(villain);

    // Desestructuring {} dentro de params de Fn
    function x({ nombre, colores, poder }: any) {
        console.log(nombre, colores, poder);
    }
    x(villain);

    const heores: string[] = [hero.name, villain.nombre, 'Super López'];

    const [hero1, hero2, hero3] = heores;
    console.log(hero1, hero2, hero3);

    // Desestructuring [] dentro de params de Fn
    (([hero1, hero2, hero3]: string[]) => console.log(hero1, hero2, hero3))(heores);

    // ... select inbetween
    const [/* hero4 */, hero5, /* hero6 */]: string[] = ['Batman', 'WonderWoman', 'Wasp'];
    console.log(hero5); // WonderWoman
})();

