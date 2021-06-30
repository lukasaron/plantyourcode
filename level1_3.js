// LEVEL 1.3
// Give your plants CO2 by talking to them. Complete the following function that converts any string into
// Plant-Latin so that your plants can understand you.

// NOTES: Plant-Latin has different vowels than we do.
// Append "tiva" after every vowel "a", "llia" after every vowel "e", "mus" after every vowel "i",
// "phylum" after every vowel "o", and "rea" after every vowel "u".
// For example: "I love water!" becomes "Imus lophylumvellia wativatelliar!"

/**
 * Converts a message into Plant-Latin.
 * @param {string} message - The message to be translated in lowercase.
 * @return {string} - Translated Plant-Latin message.
 */

function translatePlantLatin(message) {
    let mapping = new Map();
    mapping.set('a', 'tiva');
    mapping.set('e', 'llia');
    mapping.set('i', 'mus');
    mapping.set('o', 'phylum');
    mapping.set('u', 'rea');

    message = message.toLocaleLowerCase();
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let letter = message.charAt(i);
        result = mapping.has(letter) ? result.concat(letter, mapping.get(letter)) : result.concat(letter);
    }
    return result;
}