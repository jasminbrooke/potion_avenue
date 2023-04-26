class User < ApplicationRecord
    has_secure_password
    has_many :potions
    has_many :materials

    validates :displayname, presence: true
    validates :username, uniqueness: true, presence: true 
    validates :password, presence: true
end
