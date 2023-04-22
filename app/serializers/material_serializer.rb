class MaterialSerializer < ActiveModel::Serializer
    attributes :id, :name, :cost, :time, :reward
end
