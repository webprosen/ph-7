const lyrics = 'Tumi bondhu kala pakhi ami jeno ki bosonto kale tomar bolte pari ni, sada sada kala kala rong jomese sada kala';

const doesExist1 = lyrics.includes('Tumi'); // true
const doesExist2 = lyrics.indexOf('kala'); // 12
const doesExist3 = lyrics.lastIndexOf('sada'); // 101
const doesExist4 = lyrics.startsWith('Tumi'); // true
const doesExist5 = lyrics.endsWith('kala'); // true

console.log(doesExist5);