class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :intensity, :duration, :name
  has_one :category
end