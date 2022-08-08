import React from 'react'
import SearchNote from './SearchNote'

export default function Header() {
  return (
    <div className='flex items-center justify-center px-4 border-b-2'>
        <h1 className='flex-1 text-3xl font-bold'>My Notes</h1>
        <SearchNote/>
    </div>
  )
}
