class AddOrderstatusToOrder < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :orderStatus, :string
  end
end
