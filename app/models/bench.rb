class Bench < ApplicationRecord
    validates :description, :lat, :lng, presence: true

    def self.in_bounds(bounds)
        
        benches = Bench.all

        top, bottom, left, right = bounds[:northEast][:lat], bounds[:southWest][:lat], bounds[:southWest][:lng], bounds[:northEast][:lng]

        return benches.select do |bench|
            (bench.lat < top && bench.lat > bottom) && (bench.lng > left && bench.lng < right)
        end
    end

end
