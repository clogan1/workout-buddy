class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :avatar_url, :weekly_goal, :total_workouts_completed, :weekly_goal_tracker, :workouts_this_week

  has_many :workout_logs
  has_many :workouts

  def total_workouts_completed
    self.object.workout_logs.where(is_completed: true).count
  end

  def weekly_goal_tracker
    "#{total_workouts_completed}"
  end

  def workouts_this_week
    self.object.workout_logs.where(is_completed: true).group_by_week(:date_completed, last: 1).count
  end
  
end

