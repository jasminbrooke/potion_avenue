class PotionMaterial < ApplicationRecord
    
    belongs_to :potion
    belongs_to :material

end
