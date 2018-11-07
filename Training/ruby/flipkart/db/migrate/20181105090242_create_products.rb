class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.integer :price
      t.string :img_url
      t.integer :quatity

      t.timestamps
    end
  end
end
