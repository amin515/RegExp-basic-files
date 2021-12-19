

// let txt = 'makjicyhmn-kiu_kcis@gmail.com'

// let pattern = /^[a-z0-9\._\-]*@[a-z0-9]*\.[a-z]{2,4}$/;
// console.log(pattern.test(txt));


// let text = 'hallo_uyx_kjci-54210@gmail.com'

// let pattern = /^[a-z0-9\-_]*@[a-z0-9]*\.[a-z0-9]{2,5}$/;

// console.log(pattern.test(text));


// let text1 ='txyuscjcpoascjuicso5422-kcsacj_5465@net-work.co.ukm'

// let pattern = /^[a-z0-9\-_]*@[a-z0-9-]*\.|[\.a-z]{2,1}$/;
// console.log(pattern.test(text1));


// let password = 'nur'

// // let pattern = /^(?=[a-zA-Z0-9])*$/;
// let pattern = /^[a-zA-Z0-9\.#\$]{8,}$/;
// console.log(pattern.test(password)); 



// let color = '#2A2A2A'
// let pattern =/^#[0-9a-zA-Z]{6}$/
// console.log(pattern.test(color));


// let tel = '+8801303292586'
// let pattern = /^(01|0088|\+8801)[0-9]{9}$/;
// console.log(pattern.test(tel));


// let zip = '2130'

// let pattern = /^[0-9]{4}/;
// console.log(pattern.test(zip));




//create email Pattern

let mail = ('developer-amin32@gmail.com')
let mpattern = /^[a-z0-9_\.-]{2,}@[a-z0-9]{2,}\.[\.a-z]{2,}$/;
console.log(`
 Email validation matching========
 This is code == /^[a-z0-9_\.-]{2,}@[a-z0-9]{2,}\.[\.a-z]{2,}$/

 developeramin32@gmail.com or developeramin32@gmail.co.uk

: ${mail}
`)
console.log(mpattern.test(mail))



//create
let nnumber = '+8801303292586';
let npattern = /^(01|\+8801|0088)[0-9]{9}/;
console.log(`==================================================`)
console.log(`
Bangladeshi Phone Number Validation Matching======
This is code == /^(01|\+8801|0088)[0-9]{9}/
Phone Number : ${nnumber}
`)
console.log(npattern.test(nnumber));
console.log(`==================================================`)


//create username pattern

let uname = 'amin_0420'
let upattern = /^[a-zA-Z0-9_\.-@]{8,9}$/;
console.log(`
UserName Validation Matching======
This is code == /^[a-zA-Z0-9_\.-@]{8,9}$/
User Name  :  ${uname};
`)
console.log(upattern.test(uname));
console.log(`==================================================`)


// create password length pattern

let pas = 'an!352#%&`~@.lki'
let ppattern = /^[a-zA-Z0-9!#%\&~`@\.]{8,16}$/;
console.log(`
Password Length Pattern Validation Matching===
This is code == /^[a-zA-Z0-9!#%\&~@\.]{8,16}$/
Password Length : ${pas}
`)
console.log(ppattern.test(pas));
console.log(`==================================================`)


//create zip code pattern 

let zip = '2244'
let zpattern = /^[0-9]{4}$/;
console.log(`
Zip Code Validation matching
This is code == /^[0-9]{4}$/
Zip Code : ${zip}
`)
console.log(zpattern.test(zip));
console.log(`==================================================`)
