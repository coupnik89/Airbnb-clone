import React from 'react'
import Router from 'next/router'
import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
    size: 4,
    color: 'salmon',
    className: 'z-50',
    delay: 100,
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

function ProgressBar() {
  return (
    <div></div>
  )
}

export default ProgressBar