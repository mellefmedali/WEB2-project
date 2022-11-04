import React from 'react'

export const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg sticky-top">
                <div class="container-fluid">
                    <div class="navbar-brand">
                        <img src="./data/logo/logo-original941x1147-transp.png" alt="logo" />
                        <div class="nav-title">
                            <p class="nav-title1">TWEMMAN</p>
                        </div>
                    </div>
                    {/* <!---------------------------------------------------------------------------------> */}
                    {/* <!-- collapsible navbar __________________________ --> */}
                    <div id="mySidenav" class="sidenav">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                        <div id="menu-navbar">
                            <a class="nav-link active" aria-current="page" href="#id-div-about">Home</a>
                            <div class="nav-item dropdown">
                                <a class="nav-link" href="#id-div-sport" role="button" data-bs-toggle="dropdown" style=" margin-right:10px;">Sport
                                </a>
                                <ul class="dropdown-menu" id="dropdown-sport">
                                    <li>
                                        <a class="dropdown-item" href="./boutique.html">Boutique en ligne</a>
                                    </li>
                                </ul>
                            </div>
                            <a class="nav-link" href="#id-div-industrie">Industrie</a>
                            <div class="dropdown ">
                                <a class="nav-link" href="#div-deco" role="button" data-bs-toggle="dropdown"
                                    style=" margin-right:10px;">Decoration
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="./boutique-deco.html">Produits Standards</a></li>
                                    <li><a class="dropdown-item" data-toggle="modal" data-target="#atelier-decoupe-modal" href="#">Découpe
                                        plasma</a></li>
                                    <li><a class="dropdown-item" data-toggle="modal" data-target="#exprimez-vous-modal" href="#">Autre
                                        produits</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <span id="mySidenavLogo" style="font-size:20px;cursor:pointer" onclick="openNav()">&#9776;</span>
                    {/* <!-- fin collapsible navbar __________________________ --> */}
                </div>
            </nav>
        </div>
    )
}
