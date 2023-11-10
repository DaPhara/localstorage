// const input=document.querySelector("");
//     h2=document.querySelector("h2");

// input.addEventListener("keyup",display);

// function display(){
//     // h2.innerHtml=input.value;
//     localStorage.setItem('value',input.value);
//     console.log(localStorage.getItem('value'));
// }
// function storeUsername() {
//     var username = document.getElementById('username').value;

//     localStorage.setItem('username', username);
// }


function setLocalStorageItem() {
    var value = prompt('Please enter Amount:');
    var key = "amount";
    
    if (key && value) {
        localStorage.setItem(key, value);
        console.log('Key:', key, 'Value:', value, 'stored in local storage');
    }
}

var a=window.localStorage.getItem('amount');

const num=parseInt(a);
var gett=num*13;
console.log(gett);

function setLocalStorageItem1() {
    var value = prompt('Please enter Amount:');
    var key = "amount1";
    
    if (key && value) {
        localStorage.setItem(key, value);
        console.log('Key:', key, 'Value:', value, 'stored in local storage');
    }
}

var a=window.localStorage.getItem('amount1');

const num1=parseInt(a);
var gett1=num1*10;
console.log(gett1);

function setLocalStorageItem2() {
    var value = prompt('Please enter Amount:');
    var key = "amount2";
    
    if (key && value) {
        localStorage.setItem(key, value);
        console.log('Key:', key, 'Value:', value, 'stored in local storage');
    }
}

var a=window.localStorage.getItem('amount2');

const num2=parseInt(a);
var gett2=num2*15;
console.log(gett2);

function setLocalStorageItem3() {
    var value = prompt('Please enter Amount:');
    var key = "amount3";
    
    if (key && value) {
        localStorage.setItem(key, value);
        console.log('Key:', key, 'Value:', value, 'stored in local storage');
    }
}

var a=window.localStorage.getItem('amount3');

const num3=parseInt(a);
var gett3=num3*20;
console.log(gett3);

function setLocalStorageItem4() {
    var value = prompt('Please enter Amount:');
    var key = "amount4";
    
    if (key && value) {
        localStorage.setItem(key, value);
        console.log('Key:', key, 'Value:', value, 'stored in local storage');
    }
}

var a=window.localStorage.getItem('amount4');

const num4=parseInt(a);
var gett4=num4*10;
console.log(gett4);

function setLocalStorageItem5() {
    var value = prompt('Please enter Amount:');
    var key = "amount5";
    
    if (key && value) {
        localStorage.setItem(key, value);
        console.log('Key:', key, 'Value:', value, 'stored in local storage');
    }
}

var a=window.localStorage.getItem('amount5');

const num5=parseInt(a);
var gett5=num5*20;
console.log(gett5);

var sum=gett+gett1+gett2+gett3+gett4+gett5;
console.log(sum);



// function setLocalStorageItem() {
//     var key = prompt('Please enter the key:');
//     var value = prompt('Please enter the value:');
//     if (key && value) {
//         localStorage.setItem(key, value);
//         console.log('Key:', key, 'Value:', value, 'stored in local storage');
//     }
// }

// function getLocalStorageItem() {
//     var key = prompt('Please enter the key:');
//     if (key) {
//         var value = localStorage.getItem(key);
//         console.log('Key:', key, 'Value:', value, 'retrieved from local storage');
//     }
// }