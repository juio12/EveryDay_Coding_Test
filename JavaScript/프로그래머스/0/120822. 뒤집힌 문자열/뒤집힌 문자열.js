function solution(my_string) {
    let characters = my_string.split('');
    let Rcharacters = characters.reverse();
    let Rstring = Rcharacters.join('');
    
    return Rstring;
}


let my_string = "jaron"
let reversed = solution(my_string)
console.log(reversed);