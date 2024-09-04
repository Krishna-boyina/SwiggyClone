import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'

const LandingPage = () => {



    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [showProduct, setShowProduct] = useState(false)
    const [showFirm, setShowFirm] = useState(false)
    const [showWelcome, setShowWelcome] = useState(false);
    const [showAllProducts, setShowAllProducts] = useState(false)
    const [showLogOut, setShowLogOut] = useState(false)
    const [showFirmTitle, setShowFirmTitle] = useState(true)

    useEffect(() => {
        const loginToken = localStorage.getItem('loginToken')
        if (loginToken) {
            setShowLogOut(true)
            setShowWelcome(true)
        }
    }, [])

    useEffect(() => {
        const firmName = localStorage.getItem('firmName')
        if (firmName) {
            setShowFirmTitle(false)
        }
    }, [])

    const logOutHandler = () => {
        confirm("Are you sure want to Logout??")
        localStorage.removeItem('loginToken')
        localStorage.removeItem('firmId')
        localStorage.removeItem('username')
        localStorage.removeItem('firmName')
        setShowLogOut(false)
        setShowFirmTitle(true)
    }

    const showLoginHandler = () => {
        setShowLogin(true);
        setShowRegister(false)
        setShowFirm(false);
        setShowWelcome(false)
        setShowProduct(false);
        setShowAllProducts(false)
    }

    const showRegisterHandler = () => {
        setShowRegister(true);
        setShowLogin(false)
        setShowFirm(false);
        setShowProduct(false);
        setShowWelcome(false)
        setShowAllProducts(false)
    }

    const showProductHandler = () => {
        if (showLogOut) {
            setShowProduct(true);
            setShowLogin(false);
            setShowRegister(false);
            setShowFirm(false);
            setShowWelcome(false)
            setShowAllProducts(false)
        } else {
            alert("Please Login to add")
            setShowLogin(true)
        }
    }

    const showFirmHandler = () => {
        if (showLogOut) {
            setShowLogin(false);
            setShowRegister(false);
            setShowFirm(true);
            setShowProduct(false);
            setShowWelcome(false)
            setShowAllProducts(false)
        } else {
            alert("Please Login to add..")
            setShowLogin(true)
        }
    }

    const showWelcomeHandler = () => {
        setShowLogin(false);
        setShowRegister(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowWelcome(true)
        setShowAllProducts(false)
    }


    const showAllProductsHandler = () => {
        if (showLogOut) {
            setShowLogin(false);
            setShowRegister(false);
            setShowFirm(false);
            setShowProduct(false);
            setShowWelcome(false)
            setShowAllProducts(true)
        } else {
            alert("Please Login to View All Products..")
            setShowLogin(true)
        }
    }
    return (
        <>
            <section className='landingSection'>
                <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler} showLogOut={showLogOut} logOutHandler={logOutHandler} />
                <div className="collectionSection">
                    <SideBar showProductHandler={showProductHandler} showFirmHandler={showFirmHandler} showAllProductsHandler={showAllProductsHandler} showFirmTitle={showFirmTitle} />
                    {showFirm && showLogOut && <AddFirm />}
                    {showProduct && showLogOut && <AddProduct showAllProductsHandler={showAllProductsHandler} />}
                    {showWelcome && <Welcome />}
                    {showAllProducts && showLogOut && <AllProducts />}
                    {showLogin && <Login showWelcomeHandler={showWelcomeHandler} />}
                    {showRegister && <Register showLoginHandler={showLoginHandler} />}

                </div>
            </section>
        </>
    )
}

export default LandingPage

