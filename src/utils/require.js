/* eslint-disable-next-line */
import React from 'react'

import Loadable from 'react-loadable'

function RequireComponent(comPonentPath) {
  let temp = null
  temp = Loadable({
    loader: async() => await import(`@/views${comPonentPath}`),
    loading() {
      // console.log(React, 'react')
      return <div>Loading...</div>
    }
  })
  return temp
}
export default RequireComponent
