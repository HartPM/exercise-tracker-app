class Activity < ApplicationRecord
    belongs_to :sport
    belongs_to :user

    # validates :sport, inclusion: { in: %w(cycling running) }
    validates :duration, numericality: true
    validates :distance, numericality: true

end

# Activity.all.sort_by(&:sport_id)
# Activity.where(sport_id: 2)
# Activity.limit(3).where(sport_id: 2).sort_by(&:distance)