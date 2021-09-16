# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '🌱 Seeding data...'

puts 'deleting old seeds'
WorkoutExercise.destroy_all
WorkoutLog.destroy_all
User.destroy_all
Exercise.destroy_all
Workout.destroy_all
Category.destroy_all


puts 'Creating users...'

josh = User.create(username: 'Josh', password: 'password', avatar_url: '', weekly_goal: 3)
claire = User.create(username: 'Claire', password: 'password', avatar_url: '', weekly_goal: 5)
sam = User.create(username: 'Sam', password: 'password', avatar_url: '', weekly_goal: 5)


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
WorkoutLog.create(user_id: claire.id, workout_id: 1, is_completed: false, notes: '')
WorkoutLog.create(user_id: josh.id, workout_id: 4, is_completed: false, notes: '')
WorkoutLog.create(user_id: josh.id, workout_id: 3, is_completed: false, notes: '')


puts '✅ Seeding done...'


# Draft seeds

puts 'seeding exercises'

puts 'core'
plank = Exercise.create(title: 'plank', recommended_reps: '3 x hold for 1 minute')
supermans = Exercise.create(title: 'superman pulls', recommended_reps: '3 x 1 minute')
vups = Exercise.create(title: 'v-ups', recommended_reps: '3 x 20')
legraise = Exercise.create(title: 'leg raises', recommended_reps: '5 x 10')
jackknife = Exercise.create(title: 'jackknife', recommended_reps: '3 x 1 minute')
planktap = Exercise.create(title: 'plank taps', recommended_reps: '3 x 1 minute')
hipdip = Exercise.create(title: 'hip dips', recommended_reps: '3 x 1 minute')
mountainclimber = Exercise.create(title: 'mountain climbers', recommended_reps: '5 x 1 minute')
sideplank = Exercise.create(title: 'side plank', recommended_reps: '3 x hold for 30 seconds per side')
knee_to_elbow_crunch = Exercise.create(title: 'knee to elbow crunch', recommended_reps: '30')
bicycle_crunch = Exercise.create(title: 'bicycle crunch', recommended_reps: '30')
double_knees_to_elbows_crunch = Exercise.create(title: 'double knees to elbows crunch', recommended_reps: '40')
weighted_crunch = Exercise.create(title: 'weighted crunch', recommended_reps: '3 x 12-20', equipment: 'cable')
hanging_leg_raise = Exercise.create(title: 'weighted crunch', recommended_reps: '3 x 6-15', equipment: 'pull-up bar')
overhead_lunge = Exercise.create(title: 'weighted crunch', recommended_reps: '10 x 6', equipment: 'dumbbels / plate')


puts 'upper body'
push_ups = Exercise.create(title: 'classic push-ups', recommended_reps: '3 x 10-20')
diamond_push_ups = Exercise.create(title: 'diamond push-ups', recommended_reps: '3 x 10-20')
clap_push_up = Exercise.create(title: 'clap push-ups', recommended_reps: '3 x 10-20')
overhead_press = Exercise.create(title: 'overhead press', recommended_reps: '3 x 10', equipment: 'dumbbells')
curls = Exercise.create(title: 'curls', recommended_reps: '5 x 25', equipment: 'dumbbells / barbell /cable')
seated_hammer_curls = Exercise.create(title: 'seated hammer curls', recommended_reps: '3 x 10', equipment: 'dumbbells & chair')
tricepkickback = Exercise.create(title: 'tricep kickbacks', recommended_reps: '5 x 10', equipment: 'dumbbells / cable')
tricepdips = Exercise.create(title: 'tricep dips', recommended_reps: '3 x 20')
rows = Exercise.create(title: 'rows', recommended_reps: '3 x 25', equipment: 'dumbbells')
chestpress = Exercise.create(title: 'chest press', recommended_reps: '3 x 25', equipment: 'dumbbells')
tricepextension = Exercise.create(title: 'tricep extensions', recommended_reps: '3 x 20', equipment: 'dumbbells')
kneelpushup = Exercise.create(title: 'kneeling push-ups', recommended_reps: '3 x 10')
benchpress = Exercise.create(title: 'bench press', recommended_reps: '3 x 8-12', equipment: 'dumbbells / barbell')
incline_benchpress = Exercise.create(title: 'incline bench press', recommended_reps: '3 x 8-12', equipment: 'dumbbells / barbell & incline bench')
cable_chest_flys = Exercise.create(title: 'cable chest flys', recommended_reps: '3 x 10-12', equipment: 'cable')
lateral_raises = Exercise.create(title: 'lateral raises', recommended_reps: '3 x 10', equipment: 'dumbbells / cable / resistance bands')
vertical_raises = Exercise.create(title: 'vertical raises', recommended_reps: '3 x 10', equipment: 'dumbbells / cable / resistance bands')
lat_pulldown = Exercise.create(title: 'lat pulldown', recommended_reps: '3 x 10', equipment: 'lat pull down machine')
pull_ups = Exercise.create(title: 'pull-ups', recommended_reps: '3 x 8-10', equipment: 'weights (optional)')
t_bar_row = Exercise.create(title: 't-bar rows', recommended_reps: '3 x 10', equipment: 't-bar row machine / barbell')
rope_face_pull = Exercise.create(title: 'rope face pulls', recommended_reps: '3 x 10', equipment: 'cable')
shoulder_shrugs = Exercise.create(title: 'shoulder shrugs', recommended_reps: '3 x 10-15', equipment: 'dumbbells / plates')


puts 'lower body'
squats = Exercise.create(title: 'squats', recommended_reps: '3 x 25')
sumosquats = Exercise.create(title: 'sumo squats', recommended_reps: '3 x 25')
jumpsquats = Exercise.create(title: 'jump squats', recommended_reps: '3 x 10')
splitsquats = Exercise.create(title: 'split squats', recommended_reps: '3 x 10')
glutebridge = Exercise.create(title: 'glute bridges', recommended_reps: '3 x hold for 1 minute')
donkeykicks = Exercise.create(title: 'donkeykicks', recommended_reps: '3 x 10')
deadlifts = Exercise.create(title: 'dead lifts', recommended_reps: '3 x 10', equipment: 'dumbbells / barbell')
singlelegdeadlifts = Exercise.create(title: 'single leg dead lifts', recommended_reps: '3 x 10 per leg', equipment: 'dumbbells')
forwardlunge = Exercise.create(title: 'forward lunges', recommended_reps: '3 x 10 per leg', equipment: 'dumbbells (optional)')
laterallunge = Exercise.create(title: 'lateral lunges', recommended_reps: '3 x 10 per leg', equipment: 'dumbbells (optional)')
reverselunge = Exercise.create(title: 'reverse lunges', recommended_reps: '3 x 10 per leg', equipment: 'dumbbells (optional)')
calfraises = Exercise.create(title: 'calf raises', recommended_reps: '5 x 25')
back_squat = Exercise.create(title: 'squats', recommended_reps: '3 x 8-10', equipment: 'barbell')
weighted_calf_raises = Exercise.create(title: 'weighted calf raises', recommended_reps: '3 x 10-20', equipment: 'dumbbells / plates / leg press machine')
seated_calf_raises = Exercise.create(title: 'seated calf raises', recommended_reps: '3 x 10-20', equipment: 'seated calf raise machine')
leg_press = Exercise.create(title: 'leg press', recommended_reps: '3 x 10', equipment: 'leg press machine')
lying_leg_curls = Exercise.create(title: 'lying leg curls', recommended_reps: '3 x 10-12', equipment: 'leg curl machine')
single_leg_extensions = Exercise.create(title: 'single leg extensions', recommended_reps: '3 x 10 per leg', equipment: 'leg extension machine')

puts 'cardio'
jogging = Exercise.create(title: 'jog')
briskwalk = Exercise.create(title: 'brisk walk')
moderatewalk = Exercise.create(title: 'moderate walk')
sprints = Exercise.create(title: 'sprints')
burpees = Exercise.create(title: 'burpees', recommended_reps: '3 x 10')
swim = Exercise.create(title: 'swim')
spin = Exercise.create(title: 'spin / cycle')
rowing = Exercise.create(title: 'rowing')
jumprope = Exercise.create(title: 'jump rope', recommended_reps: '5 x 1 minute', equipment: 'jump rope')
stairclimber = Exercise.create(title: 'stair climber', recommended_reps: '1 x 5 minutes')
jumpingjacks = Exercise.create(title: 'jumping jacks', recommended_reps: '3 x 1 minute')
basketball = Exercise.create(title: 'basketball')
suicide_drills = Exercise.create(title: 'basketball suicide drills', recommended_reps: '5', equipment: 'basketball court / cones')


puts 'workouts'
puts 'core'
workout10 = Workout.create(category_id: core.id, intensity: 2, duration: 15, name: "Planks on Planks")
workout11 = Workout.create(category_id: core.id, intensity: 2, duration: 15, name: "Quick Core Circuit")
workout12 = Workout.create(category_id: core.id, intensity: 1, duration: 15, name: "Beginner's Core")
workout13 = Workout.create(category_id: core.id, intensity: 3, duration: 10, name: "10-min 6-pack")
core1 = Workout.create(category_id: core.id, intensity: 3, duration: 40, name: "Core Challenger")
core2 = Workout.create(category_id: core.id, intensity: 2, duration: 15, name: "The 100")


puts 'upper'
workout20 = Workout.create(category_id: upper_body.id, intensity: 2, duration: 15, name: "Tricep Focus")
workout21 = Workout.create(category_id: upper_body.id, intensity: 2, duration: 40, name: "Full Upper Body")
workout22 = Workout.create(category_id: upper_body.id, intensity: 2, duration: 20, name: "Dumbbell Routine")
workout23 = Workout.create(category_id: upper_body.id, intensity: 1, duration: 20, name: "Body Weight Only Upper Body Burn")
workout24 = Workout.create(category_id: upper_body.id, intensity: 2, duration: 10, name: "Toned Arms in 10")
upper1 = Workout.create(category_id: upper_body.id, intensity: 3, duration: 60, name: "Chest Day")
upper2 = Workout.create(category_id: upper_body.id, intensity: 3, duration: 60, name: "Back Day")
upper3 = Workout.create(category_id: upper_body.id, intensity: 3, duration: 60, name: "Back Day 2")
upper4 = Workout.create(category_id: upper_body.id, intensity: 3, duration: 30, name: "Push-up Challenger")
upper5 = Workout.create(category_id: upper_body.id, intensity: 3, duration: 60, name: "All Arms")


puts 'lower'
workout30 = Workout.create(category_id: lower_body.id, intensity: 1, duration: 10, name: "Work Your Booty")
workout31 = Workout.create(category_id: lower_body.id, intensity: 2, duration: 30, name: "Leg Day")
workout32 = Workout.create(category_id: lower_body.id, intensity: 2, duration: 40, name: "At Home Leg Routine")
workout33 = Workout.create(category_id: lower_body.id, intensity: 3, duration: 15, name: "Toned Legs, Round Booty")
lower1 = Workout.create(category_id: lower_body.id, intensity: 3, duration: 60, name: "Leg Day 2")
lower2 = Workout.create(category_id: lower_body.id, intensity: 3, duration: 60, name: "Leg Day 3")
lower3 = Workout.create(category_id: lower_body.id, intensity: 3, duration: 60, name: "Leg Day 4")


puts 'cardio'
workout40 = Workout.create(category_id: cardio.id, intensity: 2, duration: 15, name: "Quick Cardio")
workout41 = Workout.create(category_id: cardio.id, intensity: 1, duration: 15, name: "Brisk Walk")
workout42 = Workout.create(category_id: cardio.id, intensity: 3, duration: 60, name: "Distance Run")
workout43 = Workout.create(category_id: cardio.id, intensity: 2, duration: 40, name: "Soul Cycle")
workout44 = Workout.create(category_id: cardio.id, intensity: 1, duration: 45, name: "Swim")
workout45 = Workout.create(category_id: cardio.id, intensity: 3, duration: 30, name: "30-min High Burn")
cardio1 = Workout.create(category_id: cardio.id, intensity: 3, duration: 60, name: "Basketball")
cardio2 = Workout.create(category_id: cardio.id, intensity: 3, duration: 60, name: "Basketball Suicide Drills")

puts 'making workout + exercises combos'

#Leg Day 2 / lower1
WorkoutExercise.create(workout_id: lower1.id, exercise_id: jumprope.id)
WorkoutExercise.create(workout_id: lower1.id, exercise_id: back_squat.id)
WorkoutExercise.create(workout_id: lower1.id, exercise_id: leg_press.id)
WorkoutExercise.create(workout_id: lower1.id, exercise_id: forwardlunge.id)
WorkoutExercise.create(workout_id: lower1.id, exercise_id: weighted_calf_raises.id)

#Leg Day 3 / lower2
WorkoutExercise.create(workout_id: lower2.id, exercise_id: jumpingjacks.id)
WorkoutExercise.create(workout_id: lower2.id, exercise_id: back_squat.id)
WorkoutExercise.create(workout_id: lower2.id, exercise_id: deadlifts.id)
WorkoutExercise.create(workout_id: lower2.id, exercise_id: lying_leg_curls.id)
WorkoutExercise.create(workout_id: lower2.id, exercise_id: weighted_calf_raises.id)

#Leg Day 4 / lower3
WorkoutExercise.create(workout_id: lower3.id, exercise_id: jumpsquats.id)
WorkoutExercise.create(workout_id: lower3.id, exercise_id: back_squat.id)
WorkoutExercise.create(workout_id: lower3.id, exercise_id: deadlifts.id)
WorkoutExercise.create(workout_id: lower3.id, exercise_id: single_leg_extensions.id)
WorkoutExercise.create(workout_id: lower3.id, exercise_id: seated_calf_raises.id)

#Chest Day /upper1
WorkoutExercise.create(workout_id: upper1.id, exercise_id: benchpress.id)
WorkoutExercise.create(workout_id: upper1.id, exercise_id: incline_benchpress.id)
WorkoutExercise.create(workout_id: upper1.id, exercise_id: cable_chest_flys.id)
WorkoutExercise.create(workout_id: upper1.id, exercise_id: tricepextension.id)
WorkoutExercise.create(workout_id: upper1.id, exercise_id: diamond_push_ups.id)

#Back Day /upper2
WorkoutExercise.create(workout_id: upper2.id, exercise_id: overhead_press.id)
WorkoutExercise.create(workout_id: upper2.id, exercise_id: vertical_raises.id)
WorkoutExercise.create(workout_id: upper2.id, exercise_id: lateral_raises.id)
WorkoutExercise.create(workout_id: upper2.id, exercise_id: rows.id)
WorkoutExercise.create(workout_id: upper2.id, exercise_id: lat_pulldown.id)
WorkoutExercise.create(workout_id: upper2.id, exercise_id: shoulder_shrugs.id)

#Back Day 2 /upper3
WorkoutExercise.create(workout_id: upper3.id, exercise_id: overhead_press.id)
WorkoutExercise.create(workout_id: upper3.id, exercise_id: vertical_raises.id)
WorkoutExercise.create(workout_id: upper3.id, exercise_id: lateral_raises.id)
WorkoutExercise.create(workout_id: upper3.id, exercise_id: t_bar_row.id)
WorkoutExercise.create(workout_id: upper3.id, exercise_id: pull_ups.id)
WorkoutExercise.create(workout_id: upper3.id, exercise_id: shoulder_shrugs.id)

#Push-up Challenger /upper4
WorkoutExercise.create(workout_id: upper4.id, exercise_id: push_ups.id)
WorkoutExercise.create(workout_id: upper4.id, exercise_id: diamond_push_ups.id)
WorkoutExercise.create(workout_id: upper4.id, exercise_id: clap_push_up.id)

#All Arms /upper5
WorkoutExercise.create(workout_id: upper5.id, exercise_id: curls.id)
WorkoutExercise.create(workout_id: upper5.id, exercise_id: seated_hammer_curls.id)
WorkoutExercise.create(workout_id: upper5.id, exercise_id: tricepextension.id)
WorkoutExercise.create(workout_id: upper5.id, exercise_id: tricepdips.id)
WorkoutExercise.create(workout_id: upper5.id, exercise_id: pull_ups.id)
WorkoutExercise.create(workout_id: upper5.id, exercise_id: push_ups.id)

#Core Challenger / core1
WorkoutExercise.create(workout_id: core1.id, exercise_id: plank.id)
WorkoutExercise.create(workout_id: core1.id, exercise_id: sideplank.id)
WorkoutExercise.create(workout_id: core1.id, exercise_id: knee_to_elbow_crunch.id)
WorkoutExercise.create(workout_id: core1.id, exercise_id: bicycle_crunch.id)
WorkoutExercise.create(workout_id: core1.id, exercise_id: double_knees_to_elbows_crunch.id)
WorkoutExercise.create(workout_id: core1.id, exercise_id: mountainclimber.id)
WorkoutExercise.create(workout_id: core1.id, exercise_id: vups.id)

#The 100 / core2
WorkoutExercise.create(workout_id: core2.id, exercise_id: knee_to_elbow_crunch.id)
WorkoutExercise.create(workout_id: core2.id, exercise_id: bicycle_crunch.id)
WorkoutExercise.create(workout_id: core2.id, exercise_id: double_knees_to_elbows_crunch.id)


#Basketball / cardio1
WorkoutExercise.create(workout_id: cardio1.id, exercise_id: basketball.id)

#Basketball Suicide Drills / cardio2
WorkoutExercise.create(workout_id: cardio2.id, exercise_id: suicide_drills.id)

############################################ ^^^ JOSH's workouts ^^^ ############################################
#################################################################################################################
#################################################################################################################

# "Planks on Planks" / workout10
WorkoutExercise.create(workout_id: workout10.id, exercise_id: plank.id)
WorkoutExercise.create(workout_id: workout10.id, exercise_id: planktap.id)
WorkoutExercise.create(workout_id: workout10.id, exercise_id: sideplank.id)

#workout11 / quick core circuit
WorkoutExercise.create(workout_id: workout11.id, exercise_id: jackknife.id)
WorkoutExercise.create(workout_id: workout11.id, exercise_id: legraise.id)
WorkoutExercise.create(workout_id: workout11.id, exercise_id: mountainclimber.id)

# Beginner's Core / 12
WorkoutExercise.create(workout_id: workout12.id, exercise_id: vups.id)
WorkoutExercise.create(workout_id: workout12.id, exercise_id: legraise.id)
WorkoutExercise.create(workout_id: workout12.id, exercise_id: mountainclimber.id)
# 13 / 10-min 6-pack"
WorkoutExercise.create(workout_id: workout13.id, exercise_id: supermans.id)
WorkoutExercise.create(workout_id: workout13.id, exercise_id: jackknife.id)
WorkoutExercise.create(workout_id: workout13.id, exercise_id: mountainclimber.id)
WorkoutExercise.create(workout_id: workout13.id, exercise_id: hipdip.id)

#"Tricep Focus" / 20
WorkoutExercise.create(workout_id: workout20.id, exercise_id: tricepkickback.id)
WorkoutExercise.create(workout_id: workout20.id, exercise_id: tricepdips.id)
WorkoutExercise.create(workout_id: workout20.id, exercise_id: tricepextension.id)

#Full Upper Body / 21
WorkoutExercise.create(workout_id: workout21.id, exercise_id: overhead_press.id)
WorkoutExercise.create(workout_id: workout21.id, exercise_id: curls.id)
WorkoutExercise.create(workout_id: workout21.id, exercise_id: tricepkickback.id)
WorkoutExercise.create(workout_id: workout21.id, exercise_id: rows.id)
WorkoutExercise.create(workout_id: workout21.id, exercise_id: chestpress.id)

#Dumbbell Routine / 22
WorkoutExercise.create(workout_id: workout22.id, exercise_id: tricepkickback.id)
WorkoutExercise.create(workout_id: workout22.id, exercise_id: rows.id)
WorkoutExercise.create(workout_id: workout22.id, exercise_id: chestpress.id)
WorkoutExercise.create(workout_id: workout22.id, exercise_id: curls.id)

# "Body Weight Only / 23
WorkoutExercise.create(workout_id: workout23.id, exercise_id: tricepdips.id)
WorkoutExercise.create(workout_id: workout23.id, exercise_id: kneelpushup.id)

# "Toned Arms in 10/ 24
WorkoutExercise.create(workout_id: workout24.id, exercise_id: tricepkickback.id)
WorkoutExercise.create(workout_id: workout24.id, exercise_id: clap_push_up.id)
WorkoutExercise.create(workout_id: workout24.id, exercise_id: tricepextension.id)

# Work Your Booty / 30
WorkoutExercise.create(workout_id: workout30.id, exercise_id: squats.id)
WorkoutExercise.create(workout_id: workout30.id, exercise_id: glutebridge.id)
WorkoutExercise.create(workout_id: workout30.id, exercise_id: donkeykicks.id)

# Leg Day  / 31
WorkoutExercise.create(workout_id: workout31.id, exercise_id: squats.id)
WorkoutExercise.create(workout_id: workout31.id, exercise_id: jumpsquats.id)
WorkoutExercise.create(workout_id: workout31.id, exercise_id: forwardlunge.id)
WorkoutExercise.create(workout_id: workout31.id, exercise_id: laterallunge.id)
WorkoutExercise.create(workout_id: workout31.id, exercise_id: reverselunge.id)

# At Home Leg Routine / 32
WorkoutExercise.create(workout_id: workout32.id, exercise_id: forwardlunge.id)
WorkoutExercise.create(workout_id: workout32.id, exercise_id: reverselunge.id)
WorkoutExercise.create(workout_id: workout32.id, exercise_id: calfraises.id)
WorkoutExercise.create(workout_id: workout32.id, exercise_id: glutebridge.id)

# "Toned Legs, Round Booty"  / 33
WorkoutExercise.create(workout_id: workout33.id, exercise_id: glutebridge.id)
WorkoutExercise.create(workout_id: workout33.id, exercise_id: sumosquats.id)
WorkoutExercise.create(workout_id: workout33.id, exercise_id: reverselunge.id)
WorkoutExercise.create(workout_id: workout33.id, exercise_id: donkeykicks.id)

#Quick Cardio / 40
WorkoutExercise.create(workout_id: workout40.id, exercise_id: burpees.id)
WorkoutExercise.create(workout_id: workout40.id, exercise_id: jumprope.id)
WorkoutExercise.create(workout_id: workout40.id, exercise_id: jumpingjacks.id)

# Brisk Walk / 41
WorkoutExercise.create(workout_id: workout41.id, exercise_id: briskwalk.id)

# Distance Run / 42
WorkoutExercise.create(workout_id: workout42.id, exercise_id: running.id)
WorkoutExercise.create(workout_id: workout42.id, exercise_id: jogging.id)
WorkoutExercise.create(workout_id: workout42.id, exercise_id: sprints.id)

# Soul Cycle / 43
WorkoutExercise.create(workout_id: workout43.id, exercise_id: spin.id)

# Swim / 44
WorkoutExercise.create(workout_id: workout44.id, exercise_id: swim.id)

# 30-min High Burn / 45
WorkoutExercise.create(workout_id: workout45.id, exercise_id: burpees.id)
WorkoutExercise.create(workout_id: workout45.id, exercise_id: sprints.id)
WorkoutExercise.create(workout_id: workout45.id, exercise_id: jumprope.id)
WorkoutExercise.create(workout_id: workout45.id, exercise_id: stairclimber.id)








































































