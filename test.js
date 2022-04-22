function solution(progresses, speeds) {
  var answer = [];
  let arr = progresses.map((ele, index) => {
    return (100 - ele) % speeds[index] === 0 ? Math.floor((100 - ele) / speeds[index]) :  Math.floor((100 - ele) / speeds[index]) + 1
  })

  let max = arr[0]

  for(let i =0; i < arr.length; i++){
    if(max > arr[i]){
      
    }
  }
  return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))