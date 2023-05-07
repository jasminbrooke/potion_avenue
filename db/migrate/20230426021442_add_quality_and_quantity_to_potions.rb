class AddQualityAndQuantityToPotions < ActiveRecord::Migration[7.0]
  def change
    add_column :potions, :quality, :integer
    add_column :potions, :quantity, :integer
  end
end



