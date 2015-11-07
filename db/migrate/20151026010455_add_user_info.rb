class AddUserInfo < ActiveRecord::Migration
  def change
    add_column :users, :link, :string
    add_column :users, :description, :string
  end
end
