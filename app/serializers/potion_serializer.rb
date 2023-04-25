class PotionSerializer < ActiveModel::Serializer
    attributes :cost, :brew_time, :name, :description, :reward

    has_many :materials
end
