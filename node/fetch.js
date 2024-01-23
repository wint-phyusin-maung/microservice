const getFruit =  (name) => {
    const fruits = {
        pineapple: '🍍',
        peach: '🍑',
        strawberry: '🍓',
    }

    return Promise.resolve(fruits[name]);
}

const fruits = ['pineapple','peach','strawberry'];

const smoothie = fruits.map(v => getFruit(v));

const fruitLoop = async () => {
    for await ( const emoji of smoothie)
    {
        console.log(emoji);
    }
}

fruitLoop();


const fruitInspection = async () => {
    if (await getFruit('pineapple')  === '🍍')
    {
        console.log('ok');
    }
}
fruitInspection();