class UserSerializer < ActiveModel::Serializer
    attributes :displayname, :username, :password

    has_many :potions
end
