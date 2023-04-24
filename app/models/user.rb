class User < ApplicationRecord
    # has_secure_password

    has_many :materials

    validates :dispayname, presence: true
    validates :username, uniqueness: true, presence: true 
    validates :password, presence: true

end
