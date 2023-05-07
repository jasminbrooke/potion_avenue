class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :class
      t.integer :level
      t.integer :budget
      t.integer :request
      t.string :priority
      t.integer :satisfaction
      t.string :reviews

      t.timestamps
    end
  end
end
