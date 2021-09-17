class Category < ApplicationRecord
    has_many :workouts
    validates :name, presence: true
end
