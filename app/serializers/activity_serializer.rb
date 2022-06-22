class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :sport_id, :title, :duration, :distance, :heart_rate, :elevation, :updated_at, :created_at, :formatted_date

  def formatted_date
    object.created_at.strftime("%m-%d-%Y")
  end
end
