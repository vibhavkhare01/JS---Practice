// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // name IIFE
    console.log(`DB Connected`);

})();

( (name) => {
    console.log(`DB Connected Two ${name}`);
    // name IIFE
} )('Gdss')

// IIFE with parameters
