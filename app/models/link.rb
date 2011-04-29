require 'digest/sha1'
class Link < ActiveRecord::Base
  validates :short, :presence => true,
                    :uniqueness => true
  validates :long, :presence => true,
                   :format => { :with => /^http(s)*:\/\/.*$/i }
  
  def self.random_string(length)
    o = [('a'..'z'),('A'..'Z')].map{|i| i.to_a}.flatten;  
    random_str = (0...length).map{ o[rand(o.length)] }.join;
    if Link.find_by_short(random_str)
      return List.random_string(length)
    else
      return random_str
    end
  end
end
