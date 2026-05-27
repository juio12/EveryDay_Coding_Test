def solution(num, k):
    answer = 0
    number = str(num)
    
    for i in number:
        answer += 1
        if i  == str(k):
            return answer
    return -1
    
    return answer