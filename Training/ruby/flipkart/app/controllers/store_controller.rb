class StoreController < ApplicationController
skip_before_action :require_signin
  def index
    @products = Product.paginate(:page => params[:page], per_page:3)
  end
end
