# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bench1 = Bench.create({description: "Behind Toad's", lat: 41.311641, lng: -72.929959})
bench2 = Bench.create({description: 'Wall St. Smoke Break', lat: 41.310583, lng: -72.924930})
bench3 = Bench.create({description: 'Hillhouse Hillside', lat: 41.315069, lng: -72.922213})
bench4 = Bench.create({description: 'Spring Fling Promo Bench', lat: 41.310561, lng: -72.927794})
bench5 = Bench.create({description: '216 Postshow', lat: 41.311646, lng: -72.935948})