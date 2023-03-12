const user = {
    id: 12,
    district: 'Chittagong',
    relegion: 'islam',
    login: true
}

//json=javascript object notation

//from user database to server

let stringifyFormat = JSON.stringify(user);

//console.log(stringifyFormat);

let objectConvert = JSON.parse(stringifyFormat);
//console.log(objectConvert);

const product = {
    buyer: 'Faiza',
    total: 50000,
    product: {
        laptop: 'Asus',
        mobile: 'Xiomi',
        earphone: 'xiomi',
        speaker: 'Havit'
    },

    date: '12 January,2022'
};

stringifyFormat = JSON.stringify(product);
console.log(stringifyFormat);

objectConvert = JSON.parse(stringifyFormat);
console.log(objectConvert);
