class WorkoutLogSerializer < ActiveModel::Serializer
  attributes :id, :is_completed, :date_completed, :notes
  has_one :user
  has_one :workout

end
