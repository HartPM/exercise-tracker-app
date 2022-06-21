class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response
    wrap_parameters format: []

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content, status: 204
    end


    private
    def user_params
        params.permit(:username, :password, :name, :dob, :weight, :gender, :profile_img)
    end

    def record_not_found_response
        render json: { error: "Athlete not found" }, status: 404
    end

    def record_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end
    
end
