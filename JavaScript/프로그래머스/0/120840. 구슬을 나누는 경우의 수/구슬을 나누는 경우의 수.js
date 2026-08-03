function solution(balls, share) {
  const factorial = (num) => {
    let result = BigInt(1);
    for (let i = num; i >= 2; i--) {
      result *= BigInt(i);
    }
    return result;
  };

  return factorial(balls) / (factorial(balls - share) * factorial(share));
}