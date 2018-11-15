class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  before_action :require_signin
  

  private

  def current_user
    @current_user ||= Customer.find(session[:user]) if session[:user]
  end

  def current_cart
    @current_cart ||= current_user.cart if current_user
  end

  def require_signin
    redirect_to sign_in_path if current_user.blank?
  end

 
  helper_method :current_user
  helper_method :current_cart
end

