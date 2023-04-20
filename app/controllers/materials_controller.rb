class MaterialsController < ApplicationController

    def index
        materials = Material.all
        render json: materials
    end


    def show
        material = Material.find_by(id: params[:id])
        if material
            render json: material, status: :ok
        else 
            render json: errors: { material.errors.full_messages }, status: :unprocessable_entity
    end 

end
