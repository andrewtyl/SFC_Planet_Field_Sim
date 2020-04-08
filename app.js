const dev = false; //Turn on if you want to measure the amount of time it takes for the simulation to run

const now = require('performance-now')
const single_simulate = require('./planet_sim')

const planetSlot = 4 //Alter this to change which planet slot you want to simulate attempts for. Can be any whole number between and including 1 and 15
const simulationCount = 400000 //Alter this to change how many times you want to run the simulation.

function simulate(slot, simCount) {
    console.log("Program has started...please wait...")
    const start = now()
    let mapresults = new Map()
    let numbers = []
    //Running the simulation x amount of times and recording all results
    for (let i = 0; i < simCount; i++) {
        let res = single_simulate(slot);
        numbers.push(res)
    }
    //Converting results into a map for easy tallying
    numbers.forEach(num => {
        let val = mapresults.get(num) || 0;
        mapresults.set(num, ++val)
    })
    //Sorting map results
    let sortedMapResults = new Map([...mapresults].sort((a, b) => a[0] > b[0] ? 1 : -1))
    
    //Responding with results in console
    console.log(sortedMapResults)
    console.log(`Out of ${simulationCount} simulation(s), ${sortedMapResults.get(320)} planets had the maximum of 320 fields. That's ${(((sortedMapResults.get(320)) / simulationCount) * 100).toPrecision(4)}% of the planets generated!`)
    
    let planetsOver300 = 0;

    for (let i = 320; i >= 300; i--) {
        planetsOver300 = planetsOver300 + sortedMapResults.get(i)
    }

    console.log(`Out of ${simulationCount} simulation(s), ${planetsOver300} planets had 300 fields or more. That's ${(planetsOver300 / simulationCount * 100).toPrecision(4)}% of the planets generated!`)
    const end = now()
    if (dev) { console.log(`Simulation took ${(end - start) / 1000} seconds to run.`) }
}

simulate(planetSlot, simulationCount)