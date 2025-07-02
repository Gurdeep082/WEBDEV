// console.log('Starting server...');

// var a=20 ;
// console.log('a is ' + a);

// function add(){
//     console.log('Adding numbers...' );
// }

// var b = 30;
// console.log('b is ' + b);

// setTimeout(()=> {
//     console.log('Timeout reached, executing add function...');
//     add();
// },2000);

function studentFullDetails (first,second,third,name,fees){
    return first(name,fees)+"\n"+second(fees)+"\n"+third(name);
}

function first(name,fees){
    return "Your Name is :"+name+"\n and Fees is : "+fees;
}

function second(fees){
    return "EMI :- "+fees/10+" /month ";
}

function third(name){
    return "Welcome "+name+" beta";
}

console.log(studentFullDetails(first,second,third,"Ankit",10000));