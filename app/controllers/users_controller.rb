class UsersController < ApplicationController

    before_action :authorize

    #'/me'
    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :created
    end
    
    #'/signup'
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :avatar_url, :weekly_goal)
    end

end
