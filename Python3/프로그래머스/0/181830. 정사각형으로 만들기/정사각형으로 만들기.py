def solution(arr):
    col = len(arr)
    row = len(arr[0])
    
    num = col if col > row else row
    
    if num > col:
        for i in range(num-col):
            arr.append([0] * row)
    if num > row:
        for j in range(num):
            for _ in range(num-row):
                arr[j].append(0)
    
    return arr