# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '🌱 Seeding data...'
WorkoutExercise.destroy_all
WorkoutLog.destroy_all
User.destroy_all
Exercise.destroy_all
Workout.destroy_all
Category.destroy_all


puts 'Creating users...'

User.create(username: 'Josh', password: 'password', avatar_url: '', weekly_goal: 3)
User.create(username: 'Claire', password: 'password', avatar_url: '', weekly_goal: 5)
User.create(username: 'Sam', password: 'password', avatar_url: '', weekly_goal: 5)


puts 'Creating categories'
upper_body = Category.create(name: 'Upper Body')
lower_body = Category.create(name: 'Lower Body')
core = Category.create(name: 'Core')
cardio = Category.create(name: 'Cardio')

puts 'Creating exercises'
push_up = Exercise.create(title: 'push ups', recommended_reps: '3 x 10')
crunch = Exercise.create(title: 'crunches', recommended_reps: '3 x 10')
lunges = Exercise.create(title: 'lunges', recommended_reps: '3 x 25')
running = Exercise.create(title: 'running')

puts 'Creating workouts'
workout1 = Workout.create(category_id: upper_body.id, intensity: 1, duration: 15, name: "Chest Burner")
workout2 = Workout.create(category_id: lower_body.id, intensity: 1, duration: 15, name: "Leg Burner")
workout3 = Workout.create(category_id: core.id, intensity: 2, duration: 15, name: "Six-Pack Maker")
workout4 = Workout.create(category_id: cardio.id, intensity: 3, duration: 30, name: "Running Sucks!")

puts 'Creating workout_exercises'
WorkoutExercise.create(workout_id: workout1.id, exercise_id: push_up.id)
WorkoutExercise.create(workout_id: workout2.id, exercise_id: lunges.id)
WorkoutExercise.create(workout_id: workout3.id, exercise_id: crunch.id)
WorkoutExercise.create(workout_id: workout4.id, exercise_id: running.id)

puts 'Creating workout_log'
WorkoutLog.create(user_id: 1, workout_id: 1, is_completed: false, notes: '')
WorkoutLog.create(user_id: 1, workout_id: 4, is_completed: false, notes: '')
WorkoutLog.create(user_id: 2, workout_id: 3, is_completed: false, notes: '')


puts '✅ Seeding done...'


# Draft seeds

# puts 'seeding exercises'

#puts 'core'
# plank = Exercise.create(title: 'plank', recommended_reps: '3 x hold for 1 minute')
# supermans = Exercise.create(title: 'superman pull', recommended_reps: '3 x 1 minute')
# vups = Exercise.create(title: 'v-ups', recommended_reps: '3 x 20')
# legraise = Exercise.create(title: 'leg raises', recommended_reps: '5 x 10')
# jackknife = Exercise.create(title: 'jackknife', recommended_reps: '3 x 1 minute')
# planktap = Exercise.create(title: 'plank taps', recommended_reps: '3 x 1 minute')
# hipdip = Exercise.create(title: 'hip dips', recommended_reps: '3 x 1 minute')
# mountainclimber = Exercise.create(title: 'mountain climbers', recommended_reps: '5 x 1 minute')
# sideplank = Exercise.create(title: 'side plank', recommended_reps: '3 x hold for 30 seconds per side')

# puts 'upper body'
# clap_push_up = Exercise.create(title: 'clap pushups', recommended_reps: '3 x 10')
# overhead_press = Exercise.create(title: 'overhead press', recommended_reps: '3 x 10', equipment: 'dumbbells')
# curls = Exercise.create(title: 'curls', recommended_reps: '5 x 25', equipment: 'dumbbells')
# tricepkickback = Exercise.create(title: 'tricep kickback', recommended_reps: '5 x 10', equipment: 'dumbbells')
# tricepdips = Exercise.create(title: 'tricep dips', recommended_reps: '3 x 20')
# rows = Exercise.create(title: 'rows', recommended_reps: '3 x 25', equipment: 'dumbbells')
# chestpress = Exercise.create(title: 'chest press', recommended_reps: '3 x 25', equipment: 'dumbbells')
# tricepextension = Exercise.create(title: 'tricep extensions', recommended_reps: '3 x 20', equipment: 'dumbbells')
# kneelpushup = Exercise.create(title: 'kneeling pushup', recommended_reps: '3 x 10')


# puts 'lower body'
# squats = Exercise.create(title: 'squats', recommended_reps: '3 x 25')
# sumosquats = Exercise.create(title: 'sumo squats', recommended_reps: '3 x 25')
# jumpsquats = Exercise.create(title: 'jump squats', recommended_reps: '3 x 10')
# splitsquats = Exercise.create(title: 'split squats', recommended_reps: '3 x 10')
# glutebridge = Exercise.create(title: 'glute bridges', recommended_reps: '3 x hold for 1 minute')
# donkeykicks = Exercise.create(title: 'donkeykicks', recommended_reps: '3 x 10')
# deadlifts = Exercise.create(title: 'dead lifts', recommended_reps: '3 x 10', equipment: 'dumbbells')
# singlelegdeadlifts = Exercise.create(title: 'single leg dead lifts', recommended_reps: '3 x 10 per leg', equipment: 'dumbbells')
# forwardlunge = Exercise.create(title: 'forward lunges', recommended_reps: '3 x 10 per leg', equipment: 'dumbbells (optional)')
# laterallunge = Exercise.create(title: 'lateral lunges', recommended_reps: '3 x 10 per leg', equipment: 'dumbbells (optional)')
# reverselunge = Exercise.create(title: 'reverse lunges', recommended_reps: '3 x 10 per leg', equipment: 'dumbbells (optional)')
# calfraises = Exercise.create(title: 'calf raises', recommended_reps: '5 x 25')

# puts 'cardio'
# jogging = Exercise.create(title: 'jog')
# briskwalk = Exercise.create(title: 'brisk walk')
# moderatewalk = Exercise.create(title: 'moderate walk')
# sprints = Exercise.create(title: 'sprints')
# burpees = Exercise.create(title: 'burpees', recommended_reps: '3 x 10')
# swim = Exercise.create(title: 'swim')
# spin = Exercise.create(title: 'spin / cycle')
# rowing = Exercise.create(title: 'rowing')
# jumprope = Exercise.create(title: 'jump rope', recommended_reps: '5 x 1 minute', equipment: 'jump rope')
# stairclimber = Exercise.create(title: 'stair climber', recommended_reps: '1 x 5 minutes')
# jumpingjacks = Exercise.create(title: 'jumping jacks', recommended_reps: '3 x 1 minute')


# puts ' workouts'
# puts 'core'
# workout10 = Workout.create(category_id: core.id, intensity: 2, duration: 15, name: "Planks on Planks")
# workout11 = Workout.create(category_id: core.id, intensity: 2, duration: 15, name: "Quick Core Circuit")
# workout12 = Workout.create(category_id: core.id, intensity: 1, duration: 15, name: "Beginner's Core")
# workout13 = Workout.create(category_id: core.id, intensity: 3, duration: 10, name: "10-min 6-pack")


# puts 'upper'
# workout20 = Workout.create(category_id: upper_body.id, intensity: 2, duration: 15, name: "Tricep Focus")
# workout21 = Workout.create(category_id: upper_body.id, intensity: 2, duration: 40, name: "Full Upper Body")
# workout22 = Workout.create(category_id: upper_body.id, intensity: 2, duration: 20, name: "Dumbbell Routine")
# workout23 = Workout.create(category_id: upper_body.id, intensity: 1, duration: 20, name: "Body Weight Only Upper Body Burn")
# workout24 = Workout.create(category_id: upper_body.id, intensity: 2, duration: 10, name: "Toned Arms in 10")


# puts 'lower'
# workout30 = Workout.create(category_id: lower_body.id, intensity: 1, duration: 10, name: "Work Your Booty")
# workout31 = Workout.create(category_id: lower_body.id, intensity: 2, duration: 30, name: "Leg Day")
# workout32 = Workout.create(category_id: lower_body.id, intensity: 2, duration: 40, name: "At Home Leg Routine")
# workout33 = Workout.create(category_id: lower_body.id, intensity: 3, duration: 15, name: "Toned Legs, Round Booty")


# puts 'cardio'
# workout40 = Workout.create(category_id: cardio.id, intensity: 2, duration: 15, name: "Quick Cardio")
# workout41 = Workout.create(category_id: cardio.id, intensity: 1, duration: 15, name: "Brisk Walk")
# workout42 = Workout.create(category_id: cardio.id, intensity: 3, duration: 60, name: "Distance Run")
# workout43 = Workout.create(category_id: cardio.id, intensity: 2, duration: 40, name: "Soul Cycle")
# workout44 = Workout.create(category_id: cardio.id, intensity: 1, duration: 45, name: "Swim")
# workout45 = Workout.create(category_id: cardio.id, intensity: 3, duration: 30, name: "30-min High Burn ")

# puts 'making workout + exercises combos'

# # "Planks on Planks" / workout10
# WorkoutExercise.create(workout_id: workout10.id, exercise_id: plank.id)
# WorkoutExercise.create(workout_id: workout10.id, exercise_id: planktap.id)
# WorkoutExercise.create(workout_id: workout10.id, exercise_id: sideplank.id)

# #workout11 / quick core circuit
# WorkoutExercise.create(workout_id: workout11.id, exercise_id: jackknife.id)
# WorkoutExercise.create(workout_id: workout11.id, exercise_id: legraise.id)
# WorkoutExercise.create(workout_id: workout11.id, exercise_id: mountainclimber.id)

# # Beginner's Core / 12
# WorkoutExercise.create(workout_id: workout12.id, exercise_id: vups.id)
# WorkoutExercise.create(workout_id: workout12.id, exercise_id: legraise.id)
# WorkoutExercise.create(workout_id: workout12.id, exercise_id: mountainclimber.id)
# # 13 / 10-min 6-pack"
# WorkoutExercise.create(workout_id: workout13.id, exercise_id: supermans.id)
# WorkoutExercise.create(workout_id: workout13.id, exercise_id: jackknife.id)
# WorkoutExercise.create(workout_id: workout13.id, exercise_id: mountainclimber.id)
# WorkoutExercise.create(workout_id: workout13.id, exercise_id: hipdip.id)

# #"Tricep Focus" / 20
# WorkoutExercise.create(workout_id: workout20.id, exercise_id: tricepkickback.id)
# WorkoutExercise.create(workout_id: workout20.id, exercise_id: tricepdips.id)
# WorkoutExercise.create(workout_id: workout20.id, exercise_id: tricepextension.id)

# #Full Upper Body / 21
# WorkoutExercise.create(workout_id: workout21.id, exercise_id: overhead_press.id)
# WorkoutExercise.create(workout_id: workout21.id, exercise_id: curls.id)
# WorkoutExercise.create(workout_id: workout21.id, exercise_id: tricepkickback.id)
# WorkoutExercise.create(workout_id: workout21.id, exercise_id: rows.id)
# WorkoutExercise.create(workout_id: workout21.id, exercise_id: chestpress.id)

# #Dumbbell Routine / 22
# WorkoutExercise.create(workout_id: workout22.id, exercise_id: tricepkickback.id)
# WorkoutExercise.create(workout_id: workout22.id, exercise_id: rows.id)
# WorkoutExercise.create(workout_id: workout22.id, exercise_id: chestpress.id)
# WorkoutExercise.create(workout_id: workout22.id, exercise_id: curls.id)

# # "Body Weight Only / 23
# WorkoutExercise.create(workout_id: workout23.id, exercise_id: tricepdips.id)
# WorkoutExercise.create(workout_id: workout23.id, exercise_id: kneelpushup.id)

# # "Toned Arms in 10/ 24
# WorkoutExercise.create(workout_id: workout22.id, exercise_id: tricepkickback.id)
# WorkoutExercise.create(workout_id: workout22.id, exercise_id: clap_push_up.id)
# WorkoutExercise.create(workout_id: workout22.id, exercise_id: tricepextension.id)

# # Work Your Booty / 30
# WorkoutExercise.create(workout_id: workout30.id, exercise_id: squats.id)
# WorkoutExercise.create(workout_id: workout30.id, exercise_id: glutebridge.id)
# WorkoutExercise.create(workout_id: workout30.id, exercise_id: donkeykicks.id)

# # Leg Day  / 31
# WorkoutExercise.create(workout_id: workout31.id, exercise_id: squats.id)
# WorkoutExercise.create(workout_id: workout31.id, exercise_id: jumpsquats.id)
# WorkoutExercise.create(workout_id: workout31.id, exercise_id: forwardlunge.id)
# WorkoutExercise.create(workout_id: workout31.id, exercise_id: laterallunge.id)
# WorkoutExercise.create(workout_id: workout31.id, exercise_id: reverselunge.id)

# # At Home Leg Routine / 32
# WorkoutExercise.create(workout_id: workout32.id, exercise_id: forwardlunge.id)
# WorkoutExercise.create(workout_id: workout32.id, exercise_id: reverselunge.id)
# WorkoutExercise.create(workout_id: workout32.id, exercise_id: calfraises.id)
# WorkoutExercise.create(workout_id: workout32.id, exercise_id: glutebridge.id)

# # "Toned Legs, Round Booty"  / 33
# WorkoutExercise.create(workout_id: workout33.id, exercise_id: glutebridge.id)
# WorkoutExercise.create(workout_id: workout33.id, exercise_id: sumosquats.id)
# WorkoutExercise.create(workout_id: workout33.id, exercise_id: reverselunge.id)
# WorkoutExercise.create(workout_id: workout33.id, exercise_id: donkeykicks.id)

#Quick Cardio / 40
# WorkoutExercise.create(workout_id: workout40.id, exercise_id: burpees.id)
# WorkoutExercise.create(workout_id: workout40.id, exercise_id: jumprope.id)
# WorkoutExercise.create(workout_id: workout40.id, exercise_id: reverselunge.id)






































































