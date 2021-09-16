class ExercisesController < ApplicationController
    def index
        render json: Exercise.all
    end

    def show
        exercise = Exercise.find(params[:id])
        render json: exercise
    end
end
