class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers, if_not_exists: true do |t|
      t.string :name
      t.integer :level
      t.integer :budget
      t.string :priority
      t.integer :satisfaction
      t.string :reviews

      t.timestamps
    end
  end
end
