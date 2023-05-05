# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Material.destroy_all

Material.create(name: "Bloodroot", description: "A root used for its medicinal and magical properties in protection, purification, and love spells", cost: 5, brew_time: 1, quality: 1, reward: 6)
Material.create(name: "Sage", description: "A fragrant herb used for purification, healing, and wisdom", cost: 5, brew_time: 2, quality: 2, reward: 7)
Material.create(name: "Ginseng", description: "A root used for energy, health, and longevity", cost: 5, brew_time: 3, quality: 1, reward: 8)
Material.create(name: "Chamomile", description: "A flower used for relaxation, healing, and love spells", cost: 5, brew_time: 4, quality: 3, reward: 9)
Material.create(name: "Amaranthus", description: "A flowering plant used for protection, healing, and divination", cost: 8, brew_time: 5, quality: 4, reward: 10)
Material.create(name: "Elderflower", description: "A flower used for protection, healing, and love spells", cost: 8, brew_time: 6, quality: 5, reward: 10)
Material.create(name: "Rose oil", description: "An oil used for love, beauty, and psychic awareness", cost: 8, brew_time: 7, quality: 6, reward: 11)
Material.create(name: "Wormwood", description: "A bitter herb used for divination, protection, and banishing spells", cost: 8, brew_time: 8, quality: 7, reward: 12)
Material.create(name: "Yarrow", description: "A flowering plant used for healing, protection, and love spells", cost: 10, brew_time: 9, quality: 8, reward: 13)
Material.create(name: "Myrrh", description: "A resin used for purification, protection, and spiritual awareness", cost: 10, brew_time: 10, quality: 9, reward: 13)
Material.create(name: "Frankincense", description: "A resin used for purification, protection, and spiritual awareness", cost: 12, brew_time: 11, quality: 10, reward: 14)
Material.create(name: "Mugwort", description: "An herb used for lucid dreaming, psychic awareness, and protection", cost: 10, brew_time: 12, quality: 12, reward: 14)
