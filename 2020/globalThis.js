/**
 * globalThis
 * Return the env global Object.
 * 
 */

 /**
  * For Browser
  */

  console.log(globalThis === window);

  /**
   * For Web workers
   */
  console.log(globalThis === self);

  /**
   * For Node.js
   */

  console.log(globalThis === global);
