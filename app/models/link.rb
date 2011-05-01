require 'digest/sha1'
class Link < ActiveRecord::Base
  default_scope :order => 'created_at DESC'

  validates :short, :presence => true,
                    :uniqueness => true

  validates :long, :presence => true,
                   :format => { :with => /^http(s)*:\/\/.*$/i }

  def self.random_string(length)
    # we want all characters a-z and A-Z
    characters = [('a'..'z'),('A'..'Z')].map{|i| i.to_a}.flatten;
    # generate a string of these characters given the length
    random_str = (0...length).map{ characters[rand(characters.length)] }.join;
    # in the off event that the random string already exists, try again
    if Link.find_by_short(random_str)
      return List.random_string(length)
    else
      return random_str
    end
  end
end
