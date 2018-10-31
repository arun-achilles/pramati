class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :customer_id
      t.date :order_date
      t.date :shipping_date

      t.timestamps
    end
  end
end
