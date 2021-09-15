class WorkoutLogSerializer < ActiveModel::Serializer
  attributes :id, :is_completed, :date_completed, :notes, :workout_id, :user_id, :created_at
  belongs_to :user
  belongs_to :workout

end
