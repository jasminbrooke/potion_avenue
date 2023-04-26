class Potion < ApplicationRecord

    has_many :potion_materials
    has_many :materials, through: :potion_materials
    belongs_to :user

    validates :name, presence: true
    validates :name, uniqueness: true

    def calculate_cost
        materials.sum(:cost)
    end

    def calculate_brew_time
        materials.sum(:time)
    end

    def calculate_quality
        materials.sum(:quality)
    end

    def calculate_reward
        materials.sum(:reward)
    end
end
