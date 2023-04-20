class CreatePotions < ActiveRecord::Migration[7.0]
  def change
    create_table :potions do |t|
      t.string :name
      t.string :description
      t.integer :cost
      t.integer :brew_time
      t.integer :reward

      t.timestamps
    end
  end
end
