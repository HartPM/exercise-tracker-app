class Sport < ApplicationRecord
    has_many :activities
    has_many :athletes, through: :activities
end
