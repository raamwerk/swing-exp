const isObject = (x) => typeof x === 'object' && x !== null

module.exports = function select (x, cases = {}) {
  if (!isObject(cases)) throw new TypeError('Need Cases Object as second argument')
  if (String(x) in cases) return cases[String(x)]
  return cases.default
}
