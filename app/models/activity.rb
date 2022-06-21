class Activity < ApplicationRecord
    belongs_to :sport
    belongs_to :user

    validates :sport, inclusion: { in: %w(cycling running) }
    validates :duration, numericality: true
    validates :distance, numericality: true

end
