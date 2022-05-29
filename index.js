let numbers = [2, 7, 11, 15], target = 9

function twoSumFinalSolution(numbers, target) {
  /*
  # Description for array v:
  #   - v[0] = numbers-array left-end
  #   - v[1] = numbers-array right-end
  #   - v[2] = target sum
  #   - v[3] = numbers-array input
  */
  let v = [0, numbers.length - 1, target, numbers]
  while (v[0] < v[1]) {
    if ((v[3][v[0]] + v[3][v[1]]) === v[2]) return [v[0] + 1, v[1] + 1]
    else if ((v[3][v[0]] + v[3][v[1]]) < v[2]) v[0]++
    else v[1]--
  }
}

console.log(twoSumFinalSolution(numbers, target))