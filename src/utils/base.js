class base {
  /**
   * [公共方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  static noop() {
    return null
  }
  static hasOwn(obj, type) {
    return Object.prototype.hasOwnProperty.call(obj, type)
  }
  /**
   * [isXXX 基础方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  static isUndefined(item) {
    return typeof item === 'undefined'
  }
  static isDefined(item) {
    return !this.isUndefined(item)
  }
  static isString(item) {
    return typeof item === 'string'
  }
  static isNumber(item) {
    return typeof item === 'number'
  }
  static isArray(item) {
    return Object.prototype.toString.apply(item) === '[object Array]'
  }
  static isObject(item) {
    return typeof item === 'object' && !this.isArray(item)
  }
  static isFunction(item) {
    return typeof item === 'function'
  }
  /**
   * [getXXX 增强方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  static getString(item, defaultStr) {
    if (this.isString(item)) return item.trim()
    if (this.isNumber(item)) return `${item}`.trim()
    return defaultStr || ''
  }
  static getNumber(item, defaultNum) {
    var matches = this.getString(item).match(/\d+/)
    return this.isNumber(matches && +matches[0]) ? +matches[0] : defaultNum
  }
  static getArray(item, defaultArr) {
    return this.isArray(item) ? item : defaultArr || []
  }
  static getObject(item, defaultObj) {
    return this.isObject(item) ? item : defaultObj || {}
  }
  static getFunction(item) {
    return this.isFunction(item) ? item : null
  }
  /**
   * [JSON方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  static $json(item) {
    let str = {
      type: Object.prototype.toString.call(item)
    }
    try {
      str = JSON.stringify(item)
    } catch (e) {
      str.error = e && (e.stack || '')
    }
    return this.isString(str) ? str : this.$json(str)
  }
  static $parse(item) {
    let obj = {
      type: Object.prototype.toString.call(item)
    }
    try {
      obj = JSON.parse(item)
    } catch (e) {
      obj.error = e && (e.stack || '')
    }
    return this.isObject(obj) ? obj : this.$parse(obj)
  }
  /**
   * [功能方法]
   * @param  {[type]}  item [description]
   * @return {Boolean}      [description]
   */
  static isPhone(str) {
    return /^1(3|4|5|7|8)\d{9}$/.test(str)
  }
}
export default base
