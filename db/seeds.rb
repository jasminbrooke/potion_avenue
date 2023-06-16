require 'faker'
puts 'seeding data...'

User.find_or_create_by(username: "Nixinator", password_digest: BCrypt::Password.create("123"), displayname: "Nixie", store_name: "Potion Avenue", high_score: 0)

Material.find_or_create_by(name: "Bloodroot", description: "🌷", cost: 5, brew_time: 1, quality: 1, reward: 6)
Material.find_or_create_by(name: "Sage", description: "🍃", cost: 5, brew_time: 1, quality: 2, reward: 7)
Material.find_or_create_by(name: "Ginseng", description: "🍂", cost: 5, brew_time: 1, quality: 3, reward: 8)
Material.find_or_create_by(name: "Chamomile", description: "🌼", cost: 5, brew_time: 1, quality: 3, reward: 9)
Material.find_or_create_by(name: "Amaranthus", description: "🌻", cost: 8, brew_time: 2, quality: 4, reward: 10)
Material.find_or_create_by(name: "Elderberry", description: "🍒", cost: 8, brew_time: 2, quality: 5, reward: 10)
Material.find_or_create_by(name: "Rose oil", description: "🌹", cost: 8, brew_time: 2, quality: 6, reward: 11)
Material.find_or_create_by(name: "Wormwood", description: "🌿", cost: 8, brew_time: 2, quality: 7, reward: 12)
Material.find_or_create_by(name: "Yarrow", description: "🌾", cost: 10, brew_time: 3, quality: 8, reward: 13)
Material.find_or_create_by(name: "Myrrh", description: "🍄", cost: 10, brew_time: 3, quality: 9, reward: 13)
Material.find_or_create_by(name: "Frankincense", description: "🌲", cost: 12, brew_time: 3, quality: 10, reward: 14)
Material.find_or_create_by(name: "Mugwort", description: "☘️", cost: 10, brew_time: 4, quality: 12, reward: 14)


10.times do
Customer.create(
    name: "#{Faker::Name.unique.first_name} of #{Faker::Lorem.words(number: 2).map(&:capitalize).join(" ")}",
    level: rand(10..100),
    budget: rand(100..1000),
    priority: ['brew_time', 'quality', 'price'].sample,
    satisfaction: rand(1..10),
    reviews: Faker::Lorem.paragraphs(number: rand(1..5)).join('\n\n')
)
end

puts '🌱 seeded!'