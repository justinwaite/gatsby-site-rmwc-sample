import React from 'react'
import {SimpleTopAppBar} from 'rmwc/TopAppBar'

const Header = ({ siteTitle }) => (
  <SimpleTopAppBar
    title={siteTitle}
    navigationIcon={{ onClick: () => console.log('Navigate') }}
    actionItems={[
      { onClick: () => console.log('Do Something'), use: 'file_download' },
      { onClick: () => console.log('Do Something'), use: 'print' },
      { onClick: () => console.log('Do Something'), use: 'bookmark' }
    ]}
  />
)

export default Header
