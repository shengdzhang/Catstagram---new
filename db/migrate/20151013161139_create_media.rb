class CreateMedia < ActiveRecord::Migration
  def change
    create_table :media do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.timestamps null: false
    end
    add_index :media, :author_id
  end
end
