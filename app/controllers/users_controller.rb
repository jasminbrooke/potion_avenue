class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    def update
        user = User.find_by(id: params[:id])
        user.update(user_params)
        if user.valid?
            render json: user, status: :ok
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    def destroy
        user = User.find_by(id: params[:id])
        session.delete(:user_id)
        user.destroy
        render json: {}, status: :no_content
    end 

    def show
        user = User.find(session[:id])
        if user
            render json: user, status: :ok
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end 

    private 

    def user_params
        params.permit(:username, :password, :password_confirmation, :displayname)
    end
end
