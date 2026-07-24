function solution(my_string, letter) {
    let result = '';
    let arr = my_string.split('');
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== letter) {
            result += arr[i];
        }
    }
    return result;
}