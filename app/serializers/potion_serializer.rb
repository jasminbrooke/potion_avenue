class PotionSerializer < ActiveModel::Serializer
    attributes :cost, :brew_time, :name, :description, :reward, :quality, :quantity

    has_many :materials
    belongs_to :user
end
