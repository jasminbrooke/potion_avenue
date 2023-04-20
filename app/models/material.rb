class Material < ApplicationRecord
    has_many :potion_materials
    has_many :potions, through: :potion_materials


end
