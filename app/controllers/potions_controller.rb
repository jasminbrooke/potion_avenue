class PotionsController < ApplicationController

    def index
        potions = Potion.all
        render json: potions
    end
    
    def create
        potion = Potion.create(potion_params)
        if potion.valid?
            render json: potion, status: :ok
        else
            render  { errors: potion.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    def update
        potion = Potion.find_by(id: params[:id])
        potion.update(potion_params)
        if potion.valid?
            render json: potion, status: :ok
        else
            render errors: { potion.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    def destroy
        potion = Potion.find_by(id: params[:id])
        potion.destroy
        render json: {}, status: :no_content
    end 

    def show
        potion = Potion.find_by(id: params[:id])
        if potion
            render json: potion, status: :ok
        else 
            render json: errors: { potion.errors.full_messages }, status: :unprocessable_entity
    end 

    private 

    def potion_params
        params.permit(:name)
    end

end
