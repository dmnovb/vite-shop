import { useShoppingCart } from "../context/ShoppingCartContext";

export function CartItem(item:any) {
    const {removeFromCart} = useShoppingCart()

    return (
        <div>
            <div className="me-auto fs-4"key={item.id}>
                    {item.name} - {item.price} BGN 
                    x{item.quantity} 
                </div>
            <button onClick={() => removeFromCart(item.id)}>&times;</button>
        </div>
        
    )

}