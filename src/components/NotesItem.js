import React from 'react'
import { showFormattedDate } from '../utils/data'

export default function NotesItem({title, createdAt, body}) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{showFormattedDate(createdAt)}</p>
      <p>{body}</p>
    </div>
  )
}
