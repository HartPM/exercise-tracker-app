class ActivitiesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid_response

    def index
        # if params[:user_id]
        #     user = User.find(params[:user_id])
        #     activities = user.activities
        # else
        activities = Activity.all
        # end
        render json: activities, status: :ok
    end

    def show
        activity = Activity.find(params[:id])
        render json: activity, status: :ok
    end

    def create
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
    end

    def update
        activity = Activity.find(params[:id])
        activity.update!(activity_params)
        render json: activity, status: :ok
    end

    def destroy
        activity = Activity.find(params[:id])
        activity.destroy
        head :no_content, status: 204
    end

    def longest_runs
        activities = Activity.limit(3).where(sport_id: 2).order(distance: :desc)
        render json: activities, status: :ok
    end

    def longest_rides
        activities = Activity.limit(3).where(sport_id: 1).order(distance: :desc)
        render json: activities, status: :ok
    end

    private
    def activity_params
        params.permit(:user_id, :sport_id, :title, :duration, :distance, :heart_rate, :elevation)
    end

    def record_not_found_response
        render json: { error: "Activity not found" }, status: 404
    end

    def record_invalid_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: 422
    end

end
