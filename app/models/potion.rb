class Potion < ApplicationRecord

    has_many :potion_materials
    has_many :materials, through: :potion_materials
    belongs_to :user

    validate :validate_material_ids_count

    def validate_material_ids_count
        errors.add(:material_ids, "must include exactly three materials") unless material_ids.size == 3
    end

    validates :name, presence: true
    validates :name, uniqueness: true

    def calculate_cost
        materials.sum(:cost)
    end

    def calculate_brew_time
        materials.sum(:brew_time)
    end

    def calculate_quality
        materials.sum(:quality)
    end

    def calculate_reward
        materials.sum(:reward)
    end
end
