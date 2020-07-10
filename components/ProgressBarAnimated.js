import React from 'react'

export const ProgressBarAnimated = ({ style, progress, on }) => {
  return (
    <div className="w-100 bg-light progressBar" style={style}>
      <div className="progressBar bg-success " style={on ? { width: `${progress}%` } : { width: 0 }} >
      </div>
    </div>
  )
}
