class CreateOrderdetails < ActiveRecord::Migration[5.2]
  def change
    create_table :orderdetails do |t|
      t.integer :order_id
      t.integer :product_id
      t.integer :price
      t.integer :quantity
      t.integer :total
      t.string :size
      t.string :color
      t.date :shipping_date
      t.date :order_date

      t.timestamps
    end
  end
end
