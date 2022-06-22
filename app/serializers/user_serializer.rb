class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :weight, :gender, :profile_img

  has_many :activities
end
