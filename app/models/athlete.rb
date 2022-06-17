class Athlete < ApplicationRecord
    has_many :activities
    has_many :sports, through: :activities

    validates :name, presence: true
    validate :dob_check

    def dob_check
        unless dob <= 18.years.ago
            errors.add(:dob, ": Must be 18 or older")
        end
    end
end
