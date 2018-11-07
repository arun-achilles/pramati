class CreateCarts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.datetime :DateCreated
      t.boolean :CheckedOut
      t.timestamps
    end
  end
end
