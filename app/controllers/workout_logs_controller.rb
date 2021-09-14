class WorkoutLogsController < ApplicationController
    def create
        workout_log = WorkoutLog.create(workout_params)
        render json: workout_log, status: :created
    end

  private

  def workout_params 
    params.permit( :user_id, :workout_id, :is_completed, :notes)
  end

end
