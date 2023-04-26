class MaterialSerializer < ActiveModel::Serializer
    attributes :id, :name, :cost, :time, :reward, :description, :quality, :quantity

    has_many :potions
end
