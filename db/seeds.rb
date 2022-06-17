# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding athletes..."
25.times do 
    Athlete.create(
        name: Faker::Name.name,
        dob: Faker::Date.between(from: 18.years.ago, to: 100.years.ago),
        weight: Faker::Number.between(from: 50, to: 350),
        gender: Faker::Gender.type,
        profile_img: Faker::Avatar.image(size: "50x50", format: "jpg")
    )
end

puts "Seeding sports..."
    Sport.create(title: "Running", image_icon: "https://icon-library.com/images/track-and-field-icon/track-and-field-icon-19.jpg")

    Sport.create(title: "Cycling", image_icon: "https://cdn.vectorstock.com/i/1000x1000/49/84/cycling-icon-on-white-background-vector-19194984.webp")

puts "Seeding activities..."
    75.times do
        Activity.create(
            athlete_id: Faker::Number.between(from: 1, to: 25),
            sport_id: Faker::Number.between(from: 1, to: 2),
            title: Faker::Movies::Lebowski.quote,
            duration: Faker::Number.between(from: 1, to: 24),
            distance: Faker::Number.between(from: 1, to: 250),
            heart_rate: Faker::Number.between(from: 60, to: 200),
            elevation: Faker::Number.between(from: 1, to: 4000)
        )
    end

puts "done seeding!"