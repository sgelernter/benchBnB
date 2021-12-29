class Bench < ApplicationRecord
    validates :description, :lat, :lng, presence: true

    def self.in_bounds(bounds)
        
        benches = Bench.all

        top, bottom, left, right = bounds[:northEast][:lat], bounds[:southWest][:lat], bounds[:southWest][:lng], bounds[:northEast][:lng]

        return benches.select do |bench|
            (bench.lat < top.to_f && bench.lat > bottom.to_f) && (bench.lng > left.to_f && bench.lng < right.to_f)
        end
    end

end
