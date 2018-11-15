class OrderController < ApplicationController
  def index
    if current_user
      @orders = current_user.orders
    end
  end

  def create
    @order = current_user.orders.create(:orderStatus => 'On process')
    current_cart.cart_items.each do |item|
      @order.order_details.create(:quantity => item.quantity, :price => item.product.price, :product_id => item.product_id, :total => item.product.price*item.quantity)
    end
    destroyCart
    redirect_to '/order'
  end

  private 
  def destroyCart
    current_cart.cart_items.destroy_all
  end
end
