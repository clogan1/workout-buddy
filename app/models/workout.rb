class Workout < ApplicationRecord
  belongs_to :category
  
  has_many :workout_logs
  has_many :workout_exercises
  has_many :exercises, through: :workout_exercises

  validates :intensity, presence: true, inclusion: 1..3
  validates :duration, presence: true, inclusion: 1..120
  validates :name, presence: true
end
