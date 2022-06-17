class AthleteSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :weight, :gender, :profile_img
end
