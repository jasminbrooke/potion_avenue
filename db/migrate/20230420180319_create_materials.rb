class CreateMaterials < ActiveRecord::Migration[7.0]
  def change
    create_table :materials do |t|
      t.string :name
      t.string :description
      t.integer :cost
      t.integer :time
      t.integer :reward

      t.timestamps
    end
  end
end
