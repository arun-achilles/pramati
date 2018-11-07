class CustomersController < ApplicationController

  def index

  end

  def new
   
  end


  def create
    customer = Customer.new(customer_params)
    if customer.save
      session[:user] = customer.id
      redirect_to '/index'
    else
      #flash[:register_errors] = customer.errors.full_messages
      redirect_to new
    end
  end

  private
    def customer_params
      params.require(:customer).permit(:name, :email, :password)
    end

end
