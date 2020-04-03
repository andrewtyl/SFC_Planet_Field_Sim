const dev = true; //Turn on if you want to measure the amount of time it takes for the simulation to run

if (dev === true) {
    const now = require('performance-now')
}
const single_simulate = require('./planet_sim')

console.log(single_simulate(4))