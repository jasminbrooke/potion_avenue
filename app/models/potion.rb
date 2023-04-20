class Potion < ApplicationRecord
    has_many :potion_materials
    has_many :materials, through: :potion_materials
    belongs_to :user



end
