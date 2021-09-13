class SessionsController < ApplicationController

    before_action :authorize

    #'/login'
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: { errors: ["Invalid username and/or password"]}, status: :unauthorized
        end
    end

    #'/logout'
    def destroy
        session.delete :user_id
        head :no_content
    end
end
