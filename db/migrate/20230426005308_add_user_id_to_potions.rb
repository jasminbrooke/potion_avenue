class AddUserIdToPotions < ActiveRecord::Migration[7.0]
  def change
    add_column :potions, :user_id, :integer
  end
end
