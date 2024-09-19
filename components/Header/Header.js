import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import MobileMenu from '../MobileMenu/MobileMenu'



const Header = (props) => {


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header">
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home">
                                        <Image src={props.Logo} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link onClick={ClickHandler} href="/">Home</Link></li>
                                        <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                        <li><Link onClick={ClickHandler} href="/service">Service</Link></li>
                                        <li><Link onClick={ClickHandler} href="/project">Project</Link></li>
                                        <li><Link onClick={ClickHandler} href="/blog">Blog</Link></li>
                                        <li><Link onClick={ClickHandler} href="/">Pages</Link></li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right" >
                                    <Link onClick={ClickHandler} href="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default (Header);