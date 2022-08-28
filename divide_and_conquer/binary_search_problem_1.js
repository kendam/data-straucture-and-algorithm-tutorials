/*
A teacher instructs his trainees to queue in ascending order of their scores.
An Interesting pattern was a common difference in the scores. 
When he compared his record with the queue he realised one of the trainee was no where to be found  Write an Algorithm to locate the lacking trainee

Assumptions:  
 1. Given that the misplaced score is between the first item in the list  and third item from the end;
 2. There will be at least 6 known scores

Expected output:  The missing score is <score> 

where <score> and <position> are placeholders

*/

function locator(scores){
    let firstIndex  = 0;
    let lastIndex = scores.length - 3

    while(firstIndex <= lastIndex){
       
        //find the middel index
        let middleIndex = Math.floor((firstIndex +lastIndex)/2);


        // calculate the common difference from the known space
        let commonDifference = scores[lastIndex + 1] - scores[lastIndex];

        // Compare the difference between the middle score and the succeding score with the common difference
        if(scores[middleIndex + 1] - scores[middleIndex] !== commonDifference  ){
            return  scores[middleIndex + 1  ] -  commonDifference

        }

        // Compare the difference between the middle score and the preceeding score with the common difference
        if(scores[middleIndex] - scores[middleIndex - 1] !== commonDifference  ){
            return  scores[middleIndex - 1  ] +  commonDifference

        }

        // using the formular for the last term of an arithmetic progression => L = a + (n-1)d
        // Check if the middle score matches its actual value
        // A match implies the missing score is from numbers greater than the middle score
        // else it 

        if(scores[middleIndex] !== (scores[firstIndex] + ((middleIndex-1)* commonDifference))){
            
           
            lastIndex = middleIndex - 1;
           
        }
        else {
            firstIndex  =  middleIndex + 1;
        }
       
    }

    return -1;

}

let  sortedArray = [45,50,55,65,70,75,80,85,90,95]
//console.log(sortedArray)
console.log('missing number is ', locator(sortedArray));
