class UserSerializer < ActiveModel::Serializer
    attributes :id, :displayname, :username, :store_name

    has_many :potions
end
