//Declaring Variable to create break line or Element 'br'
const br = document.createElement('br');
const br1 = document.createElement('br');
const br2 = document.createElement('br');
const br3 = document.createElement('br');


//Declaring Variable to create the 'section' Element
const sec = document.createElement('section');


// Creating the Elements
//Nav 
const nav = document.createElement('nav');

// Heading
const h1 = document.createElement('h1');

//Elements of Form 
const form = document.createElement('form');
const table = document.createElement("table");
const tr = document.createElement("tr");
const td = document.createElement('td');


//Declaring Variable to create the Multiple 'button'
// First Row
const c = document.createElement('button');
const per = document.createElement('button');
const bak = document.createElement('button');
const did = document.createElement('button');

//To create input Element
const inp = document.createElement('input');

// Second Row
const seven = document.createElement('button');
const eight = document.createElement('button');
const nine = document.createElement('button');
const mul = document.createElement('button');

//Third row
const four = document.createElement('button');
const five = document.createElement('button');
const six = document.createElement('button');
const neg = document.createElement('button');

// Fourth row
const one = document.createElement('button');
const two = document.createElement('button');
const three = document.createElement('button');
const pos = document.createElement('button');

// Fifth row
const two0 = document.createElement('button');
const one0 = document.createElement('button');
const dot = document.createElement('button');
const eq = document.createElement('button');



// Declaring the Sub-Element
//Appending all the Element within the form Element
form.append(inp);
form.appendChild(table);

td.append(c);
td.append(per);
td.append(bak);
td.append(did);
td.appendChild(br);
td.append(seven);
td.append(eight);
td.append(nine);
td.append(mul);
td.appendChild(br1);
td.append(four);
td.append(five);
td.append(six);
td.append(neg);
td.appendChild(br2);
td.append(one);
td.append(two);
td.append(three);
td.append(pos)
td.appendChild(br3);
td.append(two0);
td.append(one0);
td.append(dot);
td.append(eq)

tr.appendChild(td);
table.appendChild(tr);


nav.appendChild(h1);
document.body.appendChild(nav);
sec.appendChild(form)
document.body.appendChild(sec);

//Assinging the Value in the h1 tag
h1.innerHTML = 'Calculator';

// First Row Attribute for input field
inp.setAttribute('type', 'text')
inp.setAttribute('name', 'result');
inp.setAttribute('id', 'screen');
inp.setAttribute('onkeyup', 'lettersOnly(event)');

// inp.addEventListener('keypress',function(event){
//     if(event.key == 'Enter'){
//         // alert('Enter is press');
//         equal()
//     }
//     console.log(event.key);
//     event.preventDefault();
// });

form.setAttribute('name', 'container');

// Second Row Attribute for 'C'
c.setAttribute('type', 'button')
c.setAttribute('value', 'C')
c.setAttribute('onclick', 'clr()')
c.innerText = "C"

// Second Row Attribute for '%'
per.setAttribute('type', 'button')
per.setAttribute('value', '%')
per.setAttribute('onclick', 'num(value)')
// per.setAttribute('id','p');
per.innerText = "%"

// Second Row Attribute for '<<'
bak.setAttribute('type', 'button')
bak.setAttribute('value', '<<')
bak.setAttribute('onclick', 'back()')
bak.setAttribute('id', 'p');
bak.innerText = "<<"

// Second Row Attribute for '/'
did.setAttribute('type', 'button')
did.setAttribute('value', '/')
did.setAttribute('onclick', 'num(value)')
// did.setAttribute('id','p');
did.innerText = "/"

//Third Row Attribute for '7'
seven.setAttribute('type', 'button')
seven.setAttribute('value', '7')
seven.setAttribute('onclick', 'num(value)')
// seven.setAttribute('id','p');
seven.innerText = "7"

//Third Row Attribute for '8'
eight.setAttribute('type', 'button')
eight.setAttribute('value', '8')
eight.setAttribute('onclick', 'num(value)')
eight.innerText = "8"

//Third Row Attribute for '9'
nine.setAttribute('type', 'button')
nine.setAttribute('value', '9')
nine.setAttribute('onclick', 'num(value)')
nine.innerText = "9"

//Third Row Attribute for '*'
mul.setAttribute('type', 'button');
mul.setAttribute('value', '*');
mul.setAttribute('onclick', 'num(value)');
mul.innerText = "*";

//Fourth Row Attribute for '4'
four.setAttribute('type', 'button');
four.setAttribute('value', '4');
four.setAttribute('onclick', 'num(value)');
four.innerText = "4";

//Fourth Row Attribute for '5'
five.setAttribute('type', 'button');
five.setAttribute('value', '5');
five.setAttribute('onclick', 'num(value)');
five.innerText = "5";

//Fourth Row Attribute for '6'
six.setAttribute('type', 'button');
six.setAttribute('value', '6');
six.setAttribute('onclick', 'num(value)');
six.innerText = "6";

//Fourth Row Attribute for '-'
neg.setAttribute('type', 'button');
neg.setAttribute('value', '-');
neg.setAttribute('onclick', 'num(value)');
neg.innerText = "-";

//Fifth Row Attribute for '1'
one.setAttribute('type', 'button');
one.setAttribute('value', '1');
one.setAttribute('onclick', 'num(value)');
one.innerText = "1";

//Fifth Row Attribute for '2'
two.setAttribute('type', 'button');
two.setAttribute('value', '2');
two.setAttribute('onclick', 'num(value)');
two.innerText = "2";

//Fifth Row Attribute for '3'
three.setAttribute('type', 'button');
three.setAttribute('value', '3');
three.setAttribute('onclick', 'num(value)');
three.innerText = "3";

//Fifth Row Attribute for '+'
pos.setAttribute('type', 'button');
pos.setAttribute('value', '+');
pos.setAttribute('onclick', 'num(value)');
pos.innerText = "+";

//Sixth Row Attribute for '00'
two0.setAttribute('type', 'button');
two0.setAttribute('value', '00');
two0.setAttribute('onclick', 'num(value)');
two0.innerText = "00";

//Sixth Row Attribute for '0'
one0.setAttribute('type', 'button');
one0.setAttribute('value', '0');
one0.setAttribute('onclick', 'num(value)');
one0.innerText = "0";

//Sixth Row Attribute for '.'
dot.setAttribute('type', 'button');
dot.setAttribute('value', '.');
dot.setAttribute('onclick', 'num(value)');
dot.innerText = ".";

//Sixth Row Attribute for '='
eq.setAttribute('type', 'button');
eq.setAttribute('value', '=');
eq.setAttribute('onclick', 'equal()');
// eq.setAttribute('onkeyup','lettersOnly(this)');
eq.innerText = "=";
eq.style.backgroundColor = 'rgb(235, 54, 54)';


// Calling the function
function num(value) {
    document.container.result.value += value;
}

function clr() {
    document.container.result.value = "";
}

function back() {
    var a = document.container.result.value;
    document.container.result.value = a.substr(0, a.length - 1);
}

function equal() {
    if (document.container.result.value.length > 0) {
        document.container.result.value = eval(document.container.result.value);
    } else {
        document.container.result.value = '';
    }
}

function lettersOnly(event) {
    event.preventDefault();
    console.log(event);
    // var regex = /[^0-9]/gi;
    if (!(event.key >= 0 && event.key <= 9) && event.key != '+' && event.key != '-' && event.key != '*' && event.key != '/' && event.key != '%') {
        document.container.result.value = document.container.result.value.replace(event.key,'');
    }
    if (event.key == 'Enter' || event.key == 'NumpadEnter') {
        equal();
        event.preventDefault();
    }

    // if(document.container.result.value ==  regex){
    //     // document.container.result.value = document.container.result.value.replace(regex,'');
    //     document.container.result.value = '';
    // }else{
    //     document.container.result.value += value;
    // }
}
