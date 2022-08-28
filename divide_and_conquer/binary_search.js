
/**
 * returns the index of target value in a sorted array using o(logn) if found otherwise returns -1
 * @param {[]} sortedArray  soreted array
 * @param {Number} value  target value
 * @returns {Number}
 */
function binarySearch(sortedArray,value){
    //get the first index
    let firstIndex  = 0;

    //get the last index
    let lastIndex = sortedArray.length - 1

    while(firstIndex <= lastIndex){
        // get the middleIndex
        let middleIndex = Math.floor((firstIndex +lastIndex)/2);

        // compare the target value with the mid value
        if(sortedArray[middleIndex] < value){
            firstIndex  =  middleIndex + 1;
        }
        else if (sortedArray[middleIndex] > value){
            lastIndex = middleIndex - 1;
        }
        else {
            return middleIndex;
        }
    }

    return -1;

}
let  sortedArray = [21,24,26,38,40,44]
console.log(binarySearch(sortedArray,10));
