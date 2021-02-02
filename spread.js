const ages = [11, 14, 16, 18, 20];
const ages2 = [15,12, 13, 17, 19];
const ages3 = [25, 26, 32, 29, 30]
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);


const business = 650;
const minister = 1050;
const sochib = 250;
const takaPoisha = [650, 1050, 250, 12560];
const maximum = Math.max(...takaPoisha);
console.log(maximum);