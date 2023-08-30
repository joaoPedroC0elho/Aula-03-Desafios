
function distintaString(str){

    const splitString = str.split('');


    const reverseArray = splitString.reverse();

    const joinArray = reverseArray.join('');

    
    return joinArray;


}


console.log(distintaString('ola mundo'));