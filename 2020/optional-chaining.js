/**
 * Optional Chaining
 * Optional chaining allow to do chaining on nested properties without worrying if the property exists or not.
 * Optional chaining can be used for object?.prop, object?.function, object?.[key] 
 * optional chaining can be used in multilevel chaining as well
 * Note: Do not use optional chaining in each syntax, it may make 
 */

 const user = {
     name: "Ayush Srivastava"
 };

const address =  user?.address;
const street = user?.address?.street;