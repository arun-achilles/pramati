class Customer < ApplicationRecord
   has_one :cart
   has_many :orders
   has_many :cart_items, through: :cart
   has_secure_password

end
