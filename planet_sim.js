//Math.random will not work here, as SFC uses a Gaussian Random Number Generator (normal distribution) AND a uniformly distributed random number generator. While Math.random does use an approximate uniform distribution, 'unirand' has a built in uniform RNG that I will be using instead.
const unirand = require('unirand')


module.exports = function single_simulate(slot) {
    if (slot === undefined) {
        slot = 4 //Slot 4 is considered the best, with slots 5 and 6 being close behind, simply due to these slot's normal upper limit
    }
    if (typeof slot !== "number") {
        throw new SyntaxError("Slot should be a whole number greater than or equal to 1 and less than or equal to 15")
    }
    slot = Math.floor(slot)
    if (slot > 15 || slot < 1) {
        throw new RangeError("Slot should be a whole number greater than or equal to 1 and less than or equal to 15")
    }

    const slot1 = {
        slot: 1,
        mean: 64,
        standardDiv: 16,
        lowerLimit: 48,
        upperLimit: 80
    }

    const slot2 = {
        slot: 2,
        mean: 58,
        standardDiv: 15,
        lowerLimit: 43,
        upperLimit: 73
    }

    const slot3 = {
        slot: 3,
        mean: 73,
        standardDiv: 14,
        lowerLimit: 43,
        upperLimit: 87
    }

    const slot4 = {
        slot: 4,
        mean: 173,
        standardDiv: 65,
        lowerLimit: 105,
        upperLimit: 238
    }

    const slot5 = {
        slot: 5,
        mean: 167,
        standardDiv: 72,
        lowerLimit: 95,
        upperLimit: 239
    }

    const slot6 = {
        slot: 6,
        mean: 155,
        standardDiv: 73,
        lowerLimit: 82,
        upperLimit: 228
    }

    const slot7 = {
        slot: 7,
        mean: 144,
        standardDiv: 29,
        lowerLimit: 115,
        upperLimit: 173
    }

    const slot8 = {
        slot: 8,
        mean: 140,
        standardDiv: 27,
        lowerLimit: 113,
        upperLimit: 167
    }

    const slot9 = {
        slot: 9,
        mean: 159,
        standardDiv: 30,
        lowerLimit: 129,
        upperLimit: 189
    }

    const slot10 = {
        slot: 10,
        mean: 101,
        standardDiv: 22,
        lowerLimit: 79,
        upperLimit: 123
    }

    const slot11 = {
        slot: 11,
        mean: 98,
        standardDiv: 18,
        lowerLimit: 80,
        upperLimit: 116
    }

    const slot12 = {
        slot: 12,
        mean: 105,
        standardDiv: 22,
        lowerLimit: 83,
        upperLimit: 127
    }

    const slot13 = {
        slot: 13,
        mean: 110,
        standardDiv: 50,
        lowerLimit: 60,
        upperLimit: 160
    }

    const slot14 = {
        slot: 14,
        mean: 84,
        standardDiv: 42,
        lowerLimit: 42,
        upperLimit: 126
    }

    const slot15 = {
        slot: 15,
        mean: 101,
        standardDiv: 48,
        lowerLimit: 53,
        upperLimit: 149
    }


    const slotsInfo = [null, slot1, slot2, slot3, slot4, slot5, slot6, slot7, slot8, slot9, slot10, slot11, slot12, slot13, slot14, slot15]


    const thisPlanetChance = slotsInfo[slot]
    let thisPlanetFields;
    let planetGenerated = false;
    while (planetGenerated === false) {
        thisPlanetFields = Math.floor(unirand.normal(thisPlanetChance.mean, thisPlanetChance.standardDiv).randomSync())
        if (thisPlanetFields >= thisPlanetChance.lowerLimit || thisPlanetFields <= thisPlanetChance.upperLimit) {
            if (thisPlanetFields > (thisPlanetChance.mean + thisPlanetChance.standardDiv) || thisPlanetFields < (thisPlanetChance.mean - thisPlanetChance.standardDiv)) {
                thisPlanetFields = Math.floor(unirand.uniform(40, 321).randomSync())
                planetGenerated = true
            }
        }
    }

    return thisPlanetFields







    //If the gRandom returns a value outside of 1 standard deviation away from the mean in either direction, a uniformly distributed random num generator between 40 and 320 is used instead. No planet larger than 320 or smaller than 40 will be created by colonization.

}