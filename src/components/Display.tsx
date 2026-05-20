import React from 'react'

interface DisplayProps {
  value: string
}

export const Display: React.FC<DisplayProps> = ({ value }) => {
  return (
    <div id="display" className="display" data-testid="display">
      {value}
    </div>
  )
}
