class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :product_name
      t.text :description
      t.char :size
      t.string :color
      t.integer :unit_price

      t.timestamps
    end
  end
end
