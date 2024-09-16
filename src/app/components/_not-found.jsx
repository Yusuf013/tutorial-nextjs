import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div>
      <div>My 404-page</div>
      <p>
        Something went wrong. Go back to the <Link href="/">Homepage</Link>
      </p>
    </div>
  )
}
