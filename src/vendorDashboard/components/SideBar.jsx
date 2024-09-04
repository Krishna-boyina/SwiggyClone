import React from 'react'

const SideBar = ({ showProductHandler, showFirmHandler, showAllProductsHandler, showFirmTitle }) => {
    return (
        <div className="sideBarSection">
            <ul>
                {showFirmTitle ? <li onClick={showFirmHandler}>Add Firm</li> : ""}
                <li onClick={showProductHandler}>Add Product</li>
                <li onClick={showAllProductsHandler} >All products</li>
                <li>User Details</li>
            </ul>
        </div>
    )
}

export default SideBar
