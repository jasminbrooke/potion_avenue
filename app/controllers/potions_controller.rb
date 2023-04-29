class PotionsController < ApplicationController

    def index
        potions = Potion.all
        render json: potions
    end
    
    def create
        potion = Potion.create(potion_params)
        potion.update(
                cost: potion.calculate_cost,
                brew_time: potion.calculate_brew_time,
                quality: potion.calculate_quality,
                reward: potion.calculate_reward
            )
        if potion.valid?
            materials = Material.where(id: params[:material_ids]).uniq
            potion.materials << materials # associate materials with the potion
            render json: potion, status: :ok
        else
            render json: { errors: potion.errors.messages }, status: :unprocessable_entity
        end
    end 

    def update
        potion = Potion.find_by(id: params[:id])
        potion.update(potion_params)
        if potion.valid?
            user = User.find(params[:user_id])
            render json: user.potions, status: :ok
        else
            render json: { errors: potion.errors.messages }, status: :unprocessable_entity
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
            render json: { errors: potion.errors.full_messages }, status: :unprocessable_entity
        end
    end 

    private 

    def potion_params
        params.permit(:name, :description, :cost, :brew_time, :reward, :user_id, :quantity, :quality, material_ids: [])
    end

end
