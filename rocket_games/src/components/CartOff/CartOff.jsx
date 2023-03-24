import './CartOff.css'


function CartOff(){
    return (
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Tu Carrito</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body bg-dark">
              ...
          </div>
      </div>
    )
  }
  
  export default CartOff
  