function solution(numbers) {
  const str = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    
  str.forEach((num, index) => {
    numbers = numbers.split(num).join(index)}) 
  
  return Number(numbers)
}