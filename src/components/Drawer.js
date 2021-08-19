function Drawer(){
    return(
        <div style={{display:'none'}} className="overlay">
            <div className="drawer ">
            <h2 className="d-flex justify-between mb-30 mt-30">Корзина<img className="removeBtn cu-p" src="/img/plus.svg"alt="plus" /></h2>

            <div className="items ">

            <div className="cartItem d-flex align-center mb-20">
                
                <div style={{ backgroundImage: 'url(/img/1.jpg)'}} className="cartItemImg"></div>
                <div className="mr-20 flex">
                <p className="mb-5">Красивый комплект ляяляляdadadada</p>
                <b>12 999 руб.</b>
                </div>
                <img className="removeBtn" src="/img/plus.svg"alt="plus" />
                
            </div>

            <div className="cartItem d-flex align-center mb-20">
                
                <div style={{ backgroundImage: 'url(/img/1.jpg)'}} className="cartItemImg"></div>
                <div className="mr-20 flex">
                <p className="mb-5">Красивый комплект ляяляляdadadada</p>
                <b>12 999 руб.</b>
                </div>
                <img className="removeBtn" src="/img/plus.svg"alt="plus" />
                
            </div>

            </div>
        
        <div className="cartTotalBlock">
            <ul >
                <li className="d-flex">
                <span>Итого: </span>
                <div></div>
                <b>99 999руб. </b>
                </li>
                <li className="d-flex">
                <span>Налог 5%:</span>
                <div></div>
                <b>50 000руб. </b>
                </li>
            </ul>

            <button className="greenButton">Оформить заказ
            <img src="/img/strel.svg" alt="Arrow"/></button>
        </div>
        
        </div>
    </div>
    );
}

export default Drawer;