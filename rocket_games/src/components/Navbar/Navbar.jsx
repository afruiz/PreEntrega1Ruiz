


function Navbar(){
    return(
        <>
            <header>
                <h1>Rocket Games</h1>
                <h2>Fan Store</h2>
            </header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                            <a class="navbar-brand" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                            <a class="navbar-brand" href="#">Marvel</a>
                            </li>
                            <li class="nav-item">
                            <a class="navbar-brand" href="#">Harry Potter</a>
                            </li>
                            <li class="nav-item">
                            <a class="navbar-brand" href="#">DC Comics</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar