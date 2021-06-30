// LEVEL 1.2
// Make sure your plants are thriving. The more sun they get, the more water they need.
// Write a function that locates plants in your garden that need water.

/**
 * The following represents all your plants' locations
 * in your garden and whether they need water.
 *
 * const plant_1 = {
 *      gardenLocation: [1, 1],
 *      needsWater: true
 * };
 *
 * const plant_2 = {
 *      gardenLocation: [1, 2],
 *      needsWater: false
 * };
 *
 * const plant_3 = {
 *      gardenLocation: [2, 1],
 *      needsWater: false
 * };
 *
 * const plant_4 = {
 *      gardenLocation: [2, 2],
 *      needsWater: true
 * };
 *
 * const plants = [plant_1, plant_2, plant_3, plant_4];
 */

/**
 * Write a function that takes in your array of plants and
 * returns a new array of garden locations you should water.
 *
 * @param {array} plants - Your array of plants.
 * @return {array} - An array of garden locations you should
 * water.
 */

function whereToWater(plantsArray) {
    return plantsArray
        .filter(plant => plant.needsWater)
        .map(plant => plant.gardenLocation);
}