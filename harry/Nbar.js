import Link from 'next/link'
import React from 'react'

const Nbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link href='/'><a>Home</a></Link>
                    <Link href='/about'><a>About</a></Link>
                    <Link href='/blog'><a>Blog</a></Link>
                    <Link href='/contact'><a>Contact</a></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nbar