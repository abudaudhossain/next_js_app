import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">
                    <h3>
                        Logo
                    </h3>
                </Link>

            </div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/product">product</Link>
                <Link href='/blog'>Blog</Link>
            </div>
        </nav>
    )
}
