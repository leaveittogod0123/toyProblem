/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){

    function inner(obj1,obj2){

        if(Object.keys(obj1).length !== Object.keys(obj2).length)
            return false;



        for(const key in obj1){

           if( Object.keys(obj1[key]).length && typeof (obj1[key]) !== "string"){

               if(!inner(obj1[key], obj2[key])){
                   return false;
               }
            }else{

               if(typeof (obj1[key]) === "string"){
                   if (obj1[key] != obj2[key]){
                       return false;
                   }
               }

               if(obj1[key] !== obj2[key]){
                   return false;
               }
           }
        }

        return true;
    }

    return inner(apple,orange);
};

