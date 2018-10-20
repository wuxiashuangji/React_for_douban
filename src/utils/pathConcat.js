export const pathConcat = (path) => {
  if (typeof path !== 'string') {
    return '/'
  }
  path = path.trim()
  return path.indexOf('/') === 0 ? path : '/' + path
}
