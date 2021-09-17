class User < ApplicationRecord
    has_secure_password

    has_many :workout_logs
    has_many :workouts, through: :workout_logs

    validates :username, presence: true, uniqueness: true
    validates :weekly_goal, presence: true, inclusion: 1..7
end
