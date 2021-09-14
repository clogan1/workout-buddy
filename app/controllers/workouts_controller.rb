class WorkoutsController < ApplicationController

    def index
        render json: Workout.all
    end

    def show
        workout = Workout.find(params[:id])
        render json: workout
    end

end

  