class CategoriesController < ApplicationController
    def show 
        workout = Category.find_by(id:params[:id])
        if workout.valid?
            render json: workout
            else 
                render json: render_not_found_response
            end
        end
end
