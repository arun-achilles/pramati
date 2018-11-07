class Customer < ApplicationRecord
   has_one :cart
   has_secure_password

end
