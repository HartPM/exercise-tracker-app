class ActivitySerializer < ActiveModel::Serializer
  attributes :title, :duration, :distance, :heart_rate, :elevation
  # :id, :athlete_id, :sport_id, 
end
