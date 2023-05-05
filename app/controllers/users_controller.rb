class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]

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
        user = User.find(session[:user_id])
        if user
            render json: user, include: ['potions', 'potions.materials'], status: :ok
        else 
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end 

    private 

    def user_params
        params.permit(:username, :displayname, :store_name, :password, :password_confirmation)
    end
end
