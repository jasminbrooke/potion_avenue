class CreatePotionMaterials < ActiveRecord::Migration[7.0]
  def change
    create_table :potion_materials do |t|
      t.integer :potion_id
      t.integer :material_id

      t.timestamps
    end
  end
end
