class PaymentController < ApplicationController
  def index
    @payments = Payment.all
  end
end
