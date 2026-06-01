function solution(my_string) {
    var answer = '';
    const new_my_string = new Set([...my_string])
    for(let i of new_my_string){
        answer += i
    }
    return answer;
}