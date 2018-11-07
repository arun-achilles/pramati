class SessionsController < ApplicationController
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  def new 

  end

  def create 
    customer = Customer.find_by_email(params[:customer][:email])
    if customer && customer.authenticate(params[:customer][:password])
      session[:user] = customer.id
      redirect_to '/index'
    else
      redirect_to '/sign_in'
    end
      
  end

  def destroy
    session[:user] = nil
    redirect_to '/'
  end

  private
    def customer_params
      params.require(:customer).permit(:email, :password)
    end

end
