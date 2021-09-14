class WorkoutLog < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  # validates :is_completed, presence: true, inclusion: [true, false]
  # validates :notes, length: {maximum: 500}

end
