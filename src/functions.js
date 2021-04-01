/**
 * 
 * @param {Array<string>} tokenPath 
 * @param {string} tokenName 
 * 
 * @returns {string}
 */
function createTokenName(tokenPath, tokenName) {
    return `${tokenPath.join(" ")} ${tokenName}`
}

/**
 * 
 * @param {Array<any>} lhs
 * @param {Array<any>} rhs
 * 
 * @returns {Array<any>}
 */
function arrayConcat(lhs, rhs) {
    return lhs.concat(rhs)
}

/**
 * 
 * @param {Array<string>} array 
 * @param {string} separator 
 */
function arrayJoin(array, separator) {
    return array.join(separator)
}

Pulsar.registerFunction("createTokenName", createTokenName)
Pulsar.registerFunction("arrayConcat", arrayConcat)
Pulsar.registerFunction("arrayJoin", arrayJoin)