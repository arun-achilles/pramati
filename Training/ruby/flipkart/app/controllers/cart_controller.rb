class CartController < ApplicationController
  def index
    @total = 0
    if current_cart
      @cartitems = current_cart.cart_items
      @cartitems.each do |item|
        @total+=item.product.price*item.quantity
      end
    end
  end

  def create
    if current_cart 
     addCartItem
    else
      @cart = Cart.new({:customer_id => current_user.id, :CheckedOut => false})
      if @cart.save
        addCartItem
      end
    end
  end

  def remove
    current_cart.cart_items.where(:product_id => params[:id]).destroy_all
    redirect_to '/cart'
  end

private
  def addCartItem
    if alreadyCarted?
      prod = CartItem.find current_cart.cart_items.where(:product_id => params[:id]).first.id
      prod.increment!(:quantity)
      redirect_to '/cart'
    else
      @cItem = CartItem.new({:cart_id => current_cart.id, :product_id => params[:id], :quantity => 1} )
      if @cItem.save
        redirect_to '/cart'
      end
    end
  end

  def alreadyCarted?
    if current_cart
      current_cart.cart_items.where(:product_id => params[:id]).first
    else
      @cart.cart_items.where(:product_id => params[:id]).first
    end
  end
end
