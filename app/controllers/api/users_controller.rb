class Api::UsersController < ApplicationController 

    def show
        @user = User.find(params[:id])
    end

    def create
        @user = User.new(user_params)
        if @user.save 
            log_in!(@user)
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    private 

    def user_params
        params[:user].permit(:username, :password)
    end
end