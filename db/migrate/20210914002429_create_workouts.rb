class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.belongs_to :category, null: false, foreign_key: true
      t.integer :intensity
      t.integer :duration
      t.string :name

    end
  end
end
