class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :weekly_goal, presence: true, inclusion: 1..7
end
