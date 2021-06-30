// LEVEL 2.2

// A plant needs help. Using the same rules of Plant-Latin as before,
// write a function that sorts through the array of plants and returns the one calling out for "help".

/**
 * Converts a message from Plant-Latin.
 * @param {string} message - The Plant-Latin message to be translated.
 * @return {string} - Translated message.
 */
function translate(message) {
    const vowelReplacements = {
        tiva: "a",
        llia: "e",
        mus: "i",
        phylum: "o",
        rea: "u"
    };
    for (const prop in vowelReplacements) {
        message = message.replaceAll(prop, '');
    }
    return message;
}

/**
 * The Plant class has an instance property called message
 * which is a string. The Plant's message is in Plant-Latin.
 * Write a function that takes in an array of Plants, a message
 * in human language, and returns all the Plants whose Plant-Latin
 * matches the message.
 *
 * @param {array} plants - Array of Plants to be searched
 * @param {string} message - The message in human language to search for
 * @return {array} - Array of Plants whose Plant-Latin translates to message
 */
function searchPlantsForMessage(plants, message) {
    return plants.filter(plant => translate(plant.message) === message);
}
