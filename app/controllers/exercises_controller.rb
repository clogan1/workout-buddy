class ExercisesController < ApplicationController
    def index
        render json: Exercise.all.order('title ASC')
    end

    def show
        exercise = Exercise.find(params[:id])
        render json: exercise
    end
end
