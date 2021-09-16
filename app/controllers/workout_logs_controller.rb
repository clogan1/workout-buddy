class WorkoutLogsController < ApplicationController
    def create
        workout_log = WorkoutLog.create(workout_log_params)
        render json: workout_log, status: :created
    end

    #'/workout_logs'
    def index
        render json: WorkoutLog.all
    end

    #'/workout_logs/:id'
    def show
        workout_log =find_workout_log
        render json: workout_log
    end

    def update
        workout_log =find_workout_log
        workout_log.update(workout_log_params)
        render json: workout_log, status: :accepted
    end

    def destroy
        workout_log = find_workout_log
        workout_log.destroy
        head :no_content
    end

    private

    def find_workout_log
        WorkoutLog.find(params[:id])
    end

    def workout_log_params
        params.permit(:user_id, :workout_id, :is_completed, :date_completed, :notes)
    end

end
