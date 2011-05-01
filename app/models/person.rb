require 'digest'
class Person < ActiveRecord::Base

  has_many :created_tasks, :class_name => "Task"

  attr_accessor :password

  validates :email, :uniqueness => true,
                    :length => { :within => 5..50 },
                    :format => { :with => /^[^@][\w.-]+@[\w.-]+[.][a-z]{2,4}$/i }
  validates :password, :confirmation => true,
                       :length => { :within => 4..20 },
                       :presence => true,
                       :if => :password_required?

  before_save :encrypt_new_password

  def self.authenticate(email, password)
    person = find_by_email(email.downcase)
    return person if person && person.authenticated?(password)
  end

  def authenticated?(password)
    self.hashed_password == encrypt(password)
  end

  def to_json(options={})
    options = {} unless options
    options[:except] = [] unless options[:except]
    options[:except] << :hashed_password
    super(options)
  end

  def as_json(options={})
    options = {} unless options
    options[:except] = [] unless options[:except]
    options[:except] << :hashed_password
    super(options)
  end

  protected
    def encrypt_new_password
      return if password.blank?
        self.hashed_password = encrypt(password)
    end

    def password_required?
      hashed_password.blank? || password.present?
    end

    def encrypt(string)
      Digest::SHA1.hexdigest(string + 'we083u41hlksadf34kljalsdfh1' + 'transcend')
    end
end