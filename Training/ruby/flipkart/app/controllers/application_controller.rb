class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  private

  def current_user
    @current_user ||= Customer.find(session[:user]) if session[:user]
  end

  helper_method :current_user
end

