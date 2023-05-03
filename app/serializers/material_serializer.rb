class MaterialSerializer < ActiveModel::Serializer
    attributes :id, :name, :cost, :brew_time, :reward, :description, :quality, :quantity

    has_many :potions
end
