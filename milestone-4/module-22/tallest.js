const heights = [156, 134, 167, 189, 233];

function tallestPerson(heights){
    
    tallest = heights[0];

    for(let i = 0; i < heights.length; i++){
        height = heights[i];
        if(height > tallest){
            tallest = height;
        }
    }

    return tallest;
}

const result = tallestPerson(heights);
console.log(result);