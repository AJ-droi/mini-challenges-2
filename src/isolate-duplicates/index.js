function isolateDuplicates(text) {
    let result = []; //created the first array to put the open bracket
    let finalResult = []; // created the second array to put the closing bracket
   
    // The first For-loop to input the opening bracket
    for(let i=0; i<text.length;i++){
        result.push(text[i]);
       if (result[result.length-1] === result[result.length-2]) {
            result.push('[')
       }
    }

    // The second For-loop to input the opening bracket
    for(let i=0; i<result.length; i++){
        finalResult.push(result[i])
        if(finalResult[finalResult.length-3] === '[' && finalResult[finalResult.length-2] === finalResult[finalResult.length-1]){
            finalResult.push(']')
        }
    }

    console.log(finalResult.join(''));
    return (finalResult.join(''));
    // let output =[]
    // output.push(result.join(''),count)
    // console.log(output)
    // return output
}

isolateDuplicates("aaaabbcdefffffff");

module.exports = isolateDuplicates;