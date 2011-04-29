class CreateLinks < ActiveRecord::Migration
  def self.up
    create_table :links do |t|
      t.string :short
      t.string :long
      t.integer :requests, :default => 0

      t.timestamps
    end
  end

  def self.down
    drop_table :links
  end
end
