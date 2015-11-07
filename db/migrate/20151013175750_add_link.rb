class AddLink < ActiveRecord::Migration
  def change
    add_column :media, :link, :string, null: false
  end
end
