/*Dado un array devolver otro array elevando los items al cuadrado*/
function powArray(numbers: number[]): number[] {
  let result:number[] = []
  for (let number of numbers) {
    result.push(number*number)
  }
  return result
}

powArray([1,2,3,4,5,6])