class UserSerializer < ActiveModel::Serializer
    attributes :id, :displayname, :username

    has_many :potions
end
