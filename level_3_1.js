// Level 3.1

// Your new seeds come with very specific instructions.
// "Please plant me in soil that grew KALE last season."
// You’ll need to connect to an API and get last season’s growing records and then determine
// which sections of soil your new seeds will thrive in.

/**
 * Determine the locations in your garden layout where a given
 * plant was planted last year based on API data. The garden layout
 * is represented as a 2D array of Plants. Plants are represented
 * as strings by their name.
 *
 * Complete the following function that takes a plant's name,
 * garden layout API endpoint data that retrieves a 2D array of plant names,
 * and returns an array of that plant's locations {row: number, col: number}
 * from last year's garden layout.
 *
 * @param {string} plantName - The name of plant to find in garden layout
 * @param {string} endpointUrl -accept a URL endpoint to retrieve data from.
 *        Will return JSON similar to this example endpoint:
 *        https://https://plantyourcode.com/api/previous-locations
 * @return {array} - Array of locations {row: number, col: number} for each location
 */
async function findPlantLocations(plantName, endpointUrl) {
    return await fetch(endpointUrl)
        .then((response) => response.json())
        .then((jsonData) => {
            let garden = jsonData['garden-2019'];
            let plants = garden.split(',');
            let row = 0, col = 0;
            let locations = [];
            plants.forEach(plant => {
                if (plant.indexOf(plantName) > 0) {
                    locations.push({row: row, col: col});
                }
                if (plant.indexOf(']') > 0) {
                    col = 0;
                    row++;
                } else {
                    col++;
                }
            });
            return locations
        });
}