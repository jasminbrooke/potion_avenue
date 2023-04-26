class AddQualityAndQuantityToMaterials < ActiveRecord::Migration[7.0]
  def change
    add_column :materials, :quality, :integer
    add_column :materials, :quantity, :integer
  end
end
