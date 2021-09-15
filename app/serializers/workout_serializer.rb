class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :intensity, :duration, :name
  belongs_to :category
  has_many :exercises
end
