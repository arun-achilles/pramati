# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_31_132603) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.string "mailid"
    t.text "address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orderdetails", force: :cascade do |t|
    t.integer "order_detail_id"
    t.string "primary"
    t.string "key"
    t.integer "order_id"
    t.integer "product_id"
    t.integer "price"
    t.integer "quantity"
    t.integer "total"
    t.string "size"
    t.string "color"
    t.date "shipping_date"
    t.date "order_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer "order_id"
    t.date "order_date"
    t.integer "customer_id"
    t.date "shipping_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "product_name"
    t.text "description"
    t.string "size"
    t.string "color"
    t.integer "unit_price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
