class CreateWorkoutLogs < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_logs do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :workout, null: false, foreign_key: true
      t.boolean :is_completed
      t.datetime :date_completed
      t.text :notes

      t.timestamps
    end
  end
end
