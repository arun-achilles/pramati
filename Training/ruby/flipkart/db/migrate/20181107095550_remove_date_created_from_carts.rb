class RemoveDateCreatedFromCarts < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :DateCreated, :datetime
  end
end
