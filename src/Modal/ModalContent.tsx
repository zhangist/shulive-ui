import * as React from 'react'

export default ({ children, ...other }: any) => (
  <div className="Sui_Modal-content" {...other}>
    {children}
  </div>
)
