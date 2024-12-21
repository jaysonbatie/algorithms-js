//Algorithm for the Fisher Yates Shuffle
//Parameters: Finite Array 
//Purpose: Shuffles the elements of a finite sequence
function fisherYatesShuffle(array) {
    // Loop through the array from the end to the beginning
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Swap the elements at i and randomIndex
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}