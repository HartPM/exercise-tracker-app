class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :weight, :gender, :profile_img, :activities

  has_many :activities
end
