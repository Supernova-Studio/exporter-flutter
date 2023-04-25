function removeFigmaTokens(tokenList) {
    const figmaTokenSetId = 'a7e51a4c-b0dd-4b0b-9e90-cf254b438f2e'
    return tokenList.filter(token => token.propertyValues?.tokenSet !== figmaTokenSetId)
}

/**
 *
 * @param {string} text
 * @param {string} indentationString
 *
 * @returns {string}
 */
function createDocumentationComment(text, indentationString) {
    return text.trim().split("\n").map((line) => `${indentationString}/// ${line}`).join("\n")
}

/**
 *
 * @param {{name: string, isRoot: boolean, path: Array<string>}} tokenGroup
 *
 * @returns {Array<string>}
 */
function createFullTokenGroupPath(tokenGroup) {
    if (tokenGroup.isRoot) {
        return []
    } else {
        return tokenGroup.path.concat(tokenGroup.name)
    }
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

Pulsar.registerFunction("removeFigmaTokens", removeFigmaTokens)
Pulsar.registerFunction("createDocumentationComment", createDocumentationComment)
Pulsar.registerFunction("createFullTokenGroupPath", createFullTokenGroupPath)
Pulsar.registerFunction("arrayConcat", arrayConcat)
Pulsar.registerFunction("arrayJoin", arrayJoin)