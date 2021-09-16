class WorkoutsController < ApplicationController

    def index
        render json: Workout.all
    end

    def show
        workout = Workout.find(params[:id])
        render json: workout
    end

    def create
        workout = Workout.create!(workout_params)
        render json: workout, status: :created
    end

    private
    def workout_params
        params.permit(:category_id, :name, :duration, :intensity)
    end

end

  