class CustomersController < ApplicationController

    def index
        customers = Customer.all
        render json: customers
    end

    def show
        customer = Customer.find_by(id: params[:id])
        if customer
            render json: customer, status: :ok
        else 
            render json: { errors: customer.errors.full_messages }, status: :unprocessable_entity
        end
    end 

end
