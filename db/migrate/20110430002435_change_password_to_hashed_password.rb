class ChangePasswordToHashedPassword < ActiveRecord::Migration
  def self.up
    rename_column :people, :password, :hashed_password
    Person.find_each do |p|
      p.password = p.hashed_password
      # calls the encrypt_new_password method
      p.save!
    end
  end

  def self.down
    rename_column :people, :hashed_password, :password
    # this is a bit of a destructive migration. Plain text passwords cannot be recovered.
  end
end
