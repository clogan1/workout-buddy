class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :title, :equipment, :recommended_reps
end
