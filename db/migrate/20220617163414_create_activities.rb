class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.integer :athlete_id
      t.integer :sport_id
      t.string :title
      t.integer :duration
      t.integer :distance
      t.integer :heart_rate
      t.integer :elevation

      t.timestamps
    end
  end
end
