/**
 * DYNAMIC IMPORT
 * Import a module on the fly, when required.
 */

async function someFun() {
    const module = await import("./dynamicModule.js");
    const result = module.moduleFun(10, 20);
}