class Api::SessionsController < ApplicationController 

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            log_in!(@user)
            redirect_to api_user_url(@user)
        else
            render json: "Invalid credentials", status: 404
        end
    end

    def destroy
        if logged_in?
            current_user.reset_session_token!
            session[:session_token] = nil
            render json: {}
        else
            render json: "No user is logged in!", status: 404 
        end
    end

end