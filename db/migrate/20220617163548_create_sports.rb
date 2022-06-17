class CreateSports < ActiveRecord::Migration[7.0]
  def change
    create_table :sports do |t|
      t.string :title
      t.string :image_icon

      t.timestamps
    end
  end
end
