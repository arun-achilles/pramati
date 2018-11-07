class FixColumnNameQuantity < ActiveRecord::Migration[5.2]
  def change
    rename_column :products, :quatity, :quantity
  end
end
