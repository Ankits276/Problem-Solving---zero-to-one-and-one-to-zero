/**
 * Algo for create funtion for seprate array
 *
 * Step 1 :-Check if input data is not array,
 * Step 1.1:-If step-1 is truthy ,return please enter correct value
 * Step 2:-Itrate array from index 0(i) to length and one for loop (j) n-1 to 0
 * Step 2.1:-Check first loop index value and second loop value
 * Step 2.2:-If first loop index 0 value is 1 then stop increment and run second loop
 * Step 2.3:-Second loop any 0 then swap with first loop index value
 * Step 3:-loop break once all pointer at same place and return current array
 *
 */

function seprateArray(arr) {
  var abc = arr.length;
  var k = abc - 1;
  for (let i = 0; i <= abc - 1; i++) {
    if (arr[i] === 0) {
      continue;
    }
    if (i >= j) {
      console.log("LINE 20 : ", arr);
      break;
    }
    for (var j = k; j >= 0; j--) {
      if (i >= j) {
        break;
      }
      if (arr[j] === 1) {
        continue;
      }

      let temp = [];
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      k = j;
      break;
    }
  }
}

console.log(seprateArray([1, 1, 0, 1, 1, 0, 0, 0, 1]));
