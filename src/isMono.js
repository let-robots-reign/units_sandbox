/**
 * Проверка массива на монотонность
 * Например:
 *  isMono([0, 1, 5, 9, 15]) вернет true
 *  isMono([0, 1, 1]) вернет true
 *  isMono([0, 1, 0]) вернет false
 */
export function isMono(values) {
    if (!Array.isArray(values)) {
        throw new TypeError("invalid params: 'values' is not an Array");
    }
    if (typeof values[0] !== 'number') {
        throw new TypeError("invalid params: 'values' elements are not all numbers");
    }

    let isIncreasing = true;
    let isDecreasing = true;
  
    for (let i = 0; i < values.length - 1; ++i) {
      if (values[i] > values[i + 1]) {
        isIncreasing = false;
      }
  
      if (values[i] < values[i + 1]) {
        isDecreasing = false;
      }
    }
  
    return isIncreasing || isDecreasing;
}
