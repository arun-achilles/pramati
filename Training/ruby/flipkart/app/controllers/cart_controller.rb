class CartController < ApplicationController
  def index
  end

  def create
    cart = Cart.new(current_user.id,params[:id])
    cart.save
    redirect_to 'cart/index'
  end

end
