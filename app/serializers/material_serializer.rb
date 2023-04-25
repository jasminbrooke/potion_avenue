class MaterialSerializer < ActiveModel::Serializer
    attributes :id, :name, :cost, :time, :reward, :description

    has_many :potions
end
