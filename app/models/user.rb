class User < ApplicationRecord
    has_secure_password

    has_many :materials

    validates :name, presence: true
    validates :username, uniqueness: true, presence: true 

end
