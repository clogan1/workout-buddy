class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :title
      t.string :equipment
      t.string :recommended_reps

    end
  end
end
