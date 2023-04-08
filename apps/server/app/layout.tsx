import '../css/globals.css'
import React from 'react'

export default function Layout({ children }: any) {
	return (
	 <html lang="en">
	  <head>
		 <title>Next.js</title>
	  </head>
	   <body>
		  {children}
			</body>
	  </html>)
}