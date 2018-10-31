class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :customer_id
      t.string :product_name
      t.text :description
      t.string :size
      t.string :color
      t.integer :unit_price

      t.timestamps
    end
  end
end
