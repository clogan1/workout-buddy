class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :avatar_url, :weekly_goal, :total_workouts_completed, :weekly_goal_tracker

  has_many :workout_logs
  has_many :workouts

  def total_workouts_completed
    self.object.workout_logs.where(is_completed: true).count
  end

  def weekly_goal_tracker
    "#{total_workouts_completed} / #{self.weekly_goal}"
  end
  
end
