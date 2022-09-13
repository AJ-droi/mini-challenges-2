function removeDuplicates(obj) {
    let Keys = Object.keys(obj) // Assigning the object keys to a variable

    // Using the sort method to arrange the keys in descending order
    let sortKeys = Keys.sort((a,b) => b-a); 

    // Creating an Object Variable and testObject Variable to check for duplicates
    let newObject = {};
    let testObject = {};
   
    //Using forEach Method to loop through the iobject
    sortKeys.forEach((item) =>{
        let array = [] // created an Array to push non duplicates

        // This loops check for duplicates of object values
        obj[item].forEach( element => {
            if(!testObject[element]){
                testObject[element] = true;
                
                array.push(element)
            }
        })

        // Assigning the duplicate array to its corresponding key in the new object
        newObject[item] = array; 
        
    })

    console.log(newObject);
    return(newObject);

    
   
}
removeDuplicates({
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"]
  }
  )
module.exports = removeDuplicates;