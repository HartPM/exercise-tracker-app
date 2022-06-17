class AthletesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    def index
        athletes = Athlete.all
        render json: athletes, status: :ok
    end

    def show
        athlete = Athlete.find(params[:id])
        render json: athlete, status: :ok
    end

    def create
        athlete = Athlete.create!(athlete_params)
        render json: athlete, status: :created
    end

    def update
        athlete = Athlete.find(params[:id])
        athlete.update!(athlete_params)
        render json: athlete, status: :ok
    end

    def destroy
        athlete = Athlete.find(params[:id])
        athlete.destroy
        head :no_content, status: 204
    end

    private
    def athlete_params
        params.permit(:name, :dob, :weight, :gender, :profile_img)
    end
    
    def record_not_found_response
        render json: { error: "Athlete not found" }, status: 404
    end

    def record_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end
end
