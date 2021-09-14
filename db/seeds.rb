# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '🌱 Seeding data...'

# puts 'Creating users...'

# User.create(username: 'Josh', password: 'password', avatar_url: '', weekly_goal: 3)
# User.create(username: 'Claire', password: 'password', avatar_url: '', weekly_goal: 5)

# puts 'creating categories'
# upper_body = Category.create(name: 'Upper Body')
# lower_body = Category.create(name: 'Lower Body')
# core = Category.create(name: 'Core')
# cardio = Category.create(name: 'Cardio')

# puts 'creating exercises'
# push_up = Exercise.create(title: 'push ups', recommended_reps: '3 x 10')
# crunch = Exercise.create(title: 'crunches', recommended_reps: '3 x 10')
# lunges = Exercise.create(title: 'lunges', recommended_reps: '3 x 25')
# running = Exercise.create(title: 'running')

# puts 'creating workouts'
# workout1 = Workout.create(category_id: upper_body.id, intensity: 1, duration: 15, name: "Chest Burner")
# workout2 = Workout.create(category_id: lower_body.id, intensity: 1, duration: 15, name: "Leg Burner")
# workout3 = Workout.create(category_id: core.id, intensity: 2, duration: 15, name: "Six-Pack Maker")
# workout4 = Workout.create(category_id: cardio.id, intensity: 3, duration: 30, name: "Running Sucks!")

# puts 'creating workout_exercises'
# WorkoutExercise.create(workout_id: workout1.id, exercise_id: push_up.id)
# WorkoutExercise.create(workout_id: workout2.id, exercise_id: lunges.id)
# WorkoutExercise.create(workout_id: workout3.id, exercise_id: crunch.id)
# WorkoutExercise.create(workout_id: workout4.id, exercise_id: running.id)

puts 'creating workout_log'
# WorkoutLog.create(user_id: 1, workout_id: 1, is_completed: false, notes: '')
# WorkoutLog.create(user_id: 1, workout_id: 4, is_completed: false, notes: '')
WorkoutLog.create(user_id: 2, workout_id: 3, is_completed: false, notes: '')


puts '✅ Seeding done...'