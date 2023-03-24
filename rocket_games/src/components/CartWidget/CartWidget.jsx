import './CartWidget.css'

function CartWidget(){
    return(
        <>
            <button className="btn btn-ligth" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Agregar al carrito</button>
        </>
    )
}

export default CartWidget