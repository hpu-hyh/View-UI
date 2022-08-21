let arr = [1, 2, 3, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 3, 0]
function filter_arr(arr) {
  let left = 0
  let right = arr.length
  while (left < arr.length) {
    right = left
    while ((right, arr.length && arr[left] == arr[right])) {
      arr = arr.slice(0, left + 1) + arr.slice(right, -1)
      left -= 2
      if (left < 0) {
        left = 0
      } else {
        left++
      }
    }
  }
  console.log(arr)
}
console.log()
