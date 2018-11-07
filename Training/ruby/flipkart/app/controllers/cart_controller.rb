class CartController < ApplicationController
  def index
    @cart = Cart.find_by_customer_id(current_user.id)
    @cartitems = @cart.cart_items
  end

  def create
    @cart = Cart.find_by_customer_id(current_user.id)
    if @cart 
     saveCartItem
    else
      @cart = Cart.new({:customer_id => current_user.id, :CheckedOut => false})
      if @cart.save
        saveCartItem
      end
    end
  end

  def remove
    @cartitems.where(:product_id => params[:id]).destroy
    redirect_to '/cart'
  end

  def saveCartItem
   @cItem = CartItem.new({:cart_id => @cart.id, :product_id => params[:id], :quantity => 1} )
    if @cItem.save
      redirect_to '/cart'
    end
  end

end
