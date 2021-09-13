# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts '🌱 Seeding data...'

puts 'Creating users...'

User.create(username: 'Josh', password: 'password', avatar_url: '', weekly_goal: 3)
User.create(username: 'Claire', password: 'password', avatar_url: '', weekly_goal: 5)

puts '✅ Seeding done...'