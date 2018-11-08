class Customer < ApplicationRecord
   has_one :cart
   has_many :orders
   has_secure_password

end
