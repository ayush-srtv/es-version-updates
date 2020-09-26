/**
 * Promise.allSettled([...Promises])
 * Returns results when all the promises are settled(Resolved, Rejected) in the list.
 * 
 */

 const promiseList = [Promise.resolve("Resolved"), Promise.reject("Rejected")];

 Promise.allSettled(promiseList).then(results =>{
     console.log("All Promises Settled", results);
     /**
      * [{status: "fulfilled", value: "Resolved"}, {status: "rejected", reason: "Rejected"}]
      */
 })