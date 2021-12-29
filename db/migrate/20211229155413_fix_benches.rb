class FixBenches < ActiveRecord::Migration[5.2]
  def change
    change_column_null :benches, :description, false
    change_column_null :benches, :lat, false
    change_column_null :benches, :lng, false
  end
end
