class ApplicationController < ActionController::Base
  protect_from_forgery

  protected
    # Returns the currently logged in user or nil if there isn't one
    def current_user
      if @current_user
        return @current_user
      end
      if session[:person_id]
        @current_user ||= Person.find(session[:person_id])
      else
        authenticate_with_http_basic do |email, password|
          @current_user = Person.authenticate(email, password)
        end
      end
    end

    # Make current_user available in templates as a helper
    helper_method :current_user

    # Filter method to enforce a login requirement
    # Apply as a before_filter on any controller you want to protect
    def authenticate
      logged_in? ? true : access_denied
    end

    # Predicate method to test for a logged in user
    def logged_in?
      current_user.is_a? Person
    end

    # Make logged_in? available in templates as a helper
    helper_method :logged_in?

    def access_denied
      respond_to do |format|
        format.html { redirect_to login_path, :notice => "Please log in to continue" and return false }
        format.json  do
          headers['WWW-Authenticate'] = "Basic"
          render :json => Object.new, :status => :unauthorized
        end
      end
    end
end