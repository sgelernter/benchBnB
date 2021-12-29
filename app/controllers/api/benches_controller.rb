class Api::BenchesController < ApplicationController

    def index
        # debugger
        @benches = Bench.all
        # @benches = Bench.in_bounds(params[:filters][:bounds])
    end

    def create
    end

end
