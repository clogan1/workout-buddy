class UsersController < ApplicationController

    before_action :authorize, except: :create

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

    def update
        user = User.find_by(id: session[:user_id])
        user.update(user_params)
        render json: user, status: :accepted
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :avatar_url, :weekly_goal)
    end

end
