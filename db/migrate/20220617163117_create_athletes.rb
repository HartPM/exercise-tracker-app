class CreateAthletes < ActiveRecord::Migration[7.0]
  def change
    create_table :athletes do |t|
      t.string :name
      t.datetime :dob
      t.integer :weight
      t.string :gender
      t.string :profile_img

      t.timestamps
    end
  end
end
