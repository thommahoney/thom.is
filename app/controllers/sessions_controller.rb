class SessionsController < ApplicationController
    
  def create
    if user = Person.authenticate(params[:email], params[:password])
      session[:person_id] = user.id
      I18n.locale = params[:locale] || 'en'
      redirect_to tasks_path, :notice => "Logged in successfully"
    else
      flash.now[:alert] = "Invalid login/password combination"
      render :action => 'new'
    end
  end

  # GET /logout
  def destroy
    reset_session
    redirect_to tasks_path, :notice => "You successfully logged out"
  end

  # for API use only (.json format)
  def credentials
    authenticate
    if @current_user
      render :json => @current_user
    end
  end
end